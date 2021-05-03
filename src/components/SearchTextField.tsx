import React, { useState, useEffect } from "react";
import { TextField, ListItem, ListItemText } from "@material-ui/core/";
import SubsidyList from "./SubsidyList"

interface Props {
  text: string;
}

const products: string[] = [
  "apple",
  "banana",
  "orange",
  "cheese cake",
  "banana cake",
  "apple juice",
  "orange juice"
];

const ListItems: React.FC<Props> = (props) => (
  <ListItem alignItems="center" divider>
    <ListItemText primary={props.text} />
  </ListItem>
);

const SearchTextField: React.FC = () => {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setKeyword(keyword.trim());
  }, [keyword]);

  return (
    <>
      <TextField
        id="field"
        color="secondary"
        variant="outlined"
        label="enter keywords"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <SubsidyList name={ keyword } />
    </>
  );
};

export default SearchTextField;