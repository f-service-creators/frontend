import React from "react";
import {createStyles, Theme, makeStyles} from "@material-ui/core/styles";
import {Box, Container, Typography, Paper} from "@material-ui/core";
import {Card, CardContent, CardHeader, CardActions} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem, {ListItemProps} from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
type SubsidyDetailProps = {
  values: subsidy.TargetContent;
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 1080,
      backgroundColor: theme.palette.background.paper,
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
        <Typography variant="h6" color="textSecondary" component="p">
          制度番号：{props.values.number}
        </Typography>
        <Card className={classes.root}>
          <CardHeader title="対象者" align="left" />
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p">
              {props.values.target}
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardHeader title="内容" align="left" />
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p">
              {props.values.body}
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardHeader title="利用・申請方法" align="left" />
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p">
              {props.values.usage}
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardHeader title="お問い合わせ先" align="left" />
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p">
              {props.values.inquiry}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default SubsidyDetail;
