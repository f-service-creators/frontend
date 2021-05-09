import {useCollectionDataOnce} from "react-firebase-hooks/firestore";
import firebase from "firebase";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {createStyles, Theme, makeStyles} from "@material-ui/core/styles";
import {Box, Container, Typography, Paper} from "@material-ui/core";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  CardActionArea,
} from "@material-ui/core";
type SubsidyProps = {
  children?: never;
  keyword: string;
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 2080,
      backgroundColor: theme.palette.background.paper,
    },
    card: {
      border: "2px solid",
      borderColor: "#E7EDF3",
      borderRadius: 16,
      transition: "0.4s",
      width: "100%",
      maxWidth: 2080,
    },
    cardContent: {
      textAlign: "left",
    },
    table: {
      minWidth: 650,
    },
  })
);

const firebaseConfig = {
  projectId: import.meta.env.VITE_PROJECT_ID,
  appId: import.meta.env.VITE_APP_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  locationId: import.meta.env.VITE_LOCATION_ID,
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const Subsidies: React.FC<SubsidyProps> = (props: SubsidyProps) => {
  const classes = useStyles();
  console.log("Start connect to firestore");
  // if (props.keyword === "") {
  //   return <div>検索条件を入力してください</div>;
  // }
  const [values, loading, error] = useCollectionDataOnce(
    firebase
      .firestore()
      .collection("subsidy")
      .orderBy("publish_date", "desc")
      .orderBy("id")
      .limit(100),
    {
      idField: "id",
    }
  );
  // const [state, setState] = useState(values);
  console.log("Proccessing connect to firestore");
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{`Error: ${error.message}`}</div>;
  }
  console.log(values);
  if (typeof values === "undefined") {
    return <div>No Data</div>;
  }
  const filteredList = values.filter((item) => {
    // console.log("TYPE:" + typeof props.target);
    const has_keyword = (x: string | undefined, word: string) => {
      if (typeof x !== "string") return false;
      return x.search(word) !== -1;
    };
    return Object.values(item).some((x) => has_keyword(x, props.keyword));
  });

  return (
    <div>
      <Typography variant="h4" color="textPrimary" component="p">
        {filteredList.length}件の補助金が見つかりました
      </Typography>
      <Box className={classes.root}>
        <Container maxWidth="lg">
          {filteredList.map((values) => (
            <Card className={classes.card} key={values.id}>
              <CardActionArea>
                <Link
                  to={{pathname: "/detail", state: {values}}}
                  style={{textDecoration: "none"}}
                >
                  <CardHeader
                    title={values.title}
                    subheader={values.competent_authorities[0].name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      {values.summary}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      最終更新日：
                      {
                        values.competent_authorities[0].update_info.last_modified_at.split(
                          "T"
                        )[0]
                      }
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          ))}
        </Container>
      </Box>
    </div>
  );
};

export default Subsidies;
