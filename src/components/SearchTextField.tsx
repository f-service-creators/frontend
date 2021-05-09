import React, {useState, useEffect} from "react";
import {TextField} from "@material-ui/core/";
import SubsidyList from "./SubsidyList";
import {Box, Container, Typography, Paper} from "@material-ui/core";
import {createStyles, Theme, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 2040,
      backgroundColor: theme.palette.background.paper,
    },
  })
);
const SearchTextField: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const classes = useStyles();
  useEffect(() => {
    setKeyword(keyword.trim());
  }, [keyword]);

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="subtitle1">
          キーワードを入力してください
        </Typography>
        <TextField
          id="field"
          color="secondary"
          variant="outlined"
          label="enter keywords"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <SubsidyList keyword={keyword} />
      </Container>
    </Box>
  );
};

export default SearchTextField;
