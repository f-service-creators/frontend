import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import {Paper} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {Link, Route} from "react-router-dom";
import SubsidyDetail from "./SubsidyDeail";

type SubsidyProps = {
  children?: never;
  keyword: string;
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
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
  console.log(import.meta.env.VITE_MEASUREMENT_ID);
  const [values, loading, error] = useCollectionData(
    firebase.firestore().collection("subsidy"),
    {
      idField: "id",
    }
  );
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

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>タイトル</TableCell>
            <TableCell align="right">ターゲット</TableCell>
            <TableCell align="right">概要</TableCell>
            <TableCell align="right">支援組織</TableCell>
            <TableCell align="right">問い合わせ先</TableCell>
            <TableCell align="right">詳細</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {values
            .filter((item) => {
              // console.log("TYPE:" + typeof props.target);
              const has_keyword = (x: string | undefined, word: string) => {
                if (typeof x !== "string") return false;
                return x.search(word) !== -1;
              };
              return Object.values(item).some((target) =>
                has_keyword(target, props.keyword)
              );
            })
            .map((values) => (
              <TableRow key={values.id}>
                <TableCell component="th" scope="row">
                  {" "}
                  {values.title}{" "}
                </TableCell>
                <TableCell align="right">{values.target}</TableCell>
                <TableCell align="right">{values.summary}</TableCell>
                <TableCell align="right">
                  {values.support_organization}
                </TableCell>
                <TableCell align="right">{values.inquiry}</TableCell>
                <TableCell align="right">
                  <Link to="/detail">
                    <Button variant="contained" color="primary">
                      詳細
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Subsidies;
