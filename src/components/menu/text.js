import React from "react";
import { StyledText } from "./text.styled";

const Text = props => {
  return <StyledText className="menu-texts">{props.text}</StyledText>;
};
export default Text;
