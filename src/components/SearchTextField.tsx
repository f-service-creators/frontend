import React, {useState, useEffect} from "react";
import {TextField} from "@material-ui/core/";
import SubsidyList from "./SubsidyList";

interface Props {
  text: string;
}

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
      <SubsidyList keyword={keyword} />
    </>
  );
};

export default SearchTextField;
