import React from "react";
import {createStyles, Theme, makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem, {ListItemProps} from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
type SubsidyDetailProps = {
  values: object;
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
    <div className={classes.root}>
      <List aria-label="subsidy data details">
        <ListItem>
          <ListItemText primary={props.values.title} />
        </ListItem>
        <ListItem>
          <ListItemText primary={props.values.subtitle} />
        </ListItem>
        <ListItem>
          <ListItemText secondary={props.values.summary} />
        </ListItem>
        <ListItem>
          <ListItemText secondary={props.values.target} />
        </ListItem>
        <ListItem>
          <ListItemText secondary={props.values.usage} />
        </ListItem>
        <ListItem>
          <ListItemText secondary={props.values.inquiry} />
        </ListItem>
        <ListItem>
          <ListItemText secondary={props.values.keywords} />
        </ListItem>
      </List>
      {/* {Object.values(props.values).map((value) => {
        <p>{value}</p>;
      })} */}
    </div>
  );
};

export default SubsidyDetail;
