import React from "react";
import {createStyles, Theme, makeStyles} from "@material-ui/core/styles";
import {Box, Container, Typography, Paper} from "@material-ui/core";
import {Card, CardContent, CardHeader, CardActions} from "@material-ui/core";
import ReactMarkdown from "react-markdown";
type SubsidyDetailProps = {
  values: subsidy.TargetContent;
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
      maxWidth: 2080,
    },
    cardContent: {
      textAlign: "left",
    },
  })
);
const SubsidyDetail: React.FC<SubsidyDetailProps> = (
  props: SubsidyDetailProps
) => {
  const classes = useStyles();
  console.log(props.values);
  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="subtitle1">{props.values.subtitle}</Typography>
        <Typography variant="h3">{props.values.title}</Typography>
        <Paper>
          <Typography variant="body1">{props.values.summary}</Typography>
        </Paper>
        <Typography variant="h6" color="textSecondary">
          制度番号：{props.values.number}
        </Typography>
        <Card className={classes.card}>
          <CardHeader title="対象者" align="left" />
          <CardContent className={classes.cardContent}>
            <Typography variant="body1" color="textSecondary">
              {props.values.target}
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardHeader title="内容" align="left" />
          <CardContent className={classes.cardContent}>
            <Typography variant="body1" color="textSecondary">
              <ReactMarkdown children={props.values.body} skipHtml={true} />
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardHeader title="利用・申請方法" align="left" />
          <CardContent className={classes.cardContent}>
            <Typography variant="body1" color="textSecondary">
              {props.values.usage}
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardHeader title="お問い合わせ先" align="left" />
          <CardContent className={classes.cardContent}>
            <Typography variant="body1" color="textSecondary">
              {props.values.inquiry}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default SubsidyDetail;
