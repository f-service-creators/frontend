import React from "react";
import SubsidyDetil from "../components/SubsidyDeail";
const Detail = (props) => {
  //check props values
  console.log(props.location.state);
  return <SubsidyDetil values={props.location.state.values} />;
};

export default Detail;
