import React, { Fragment } from "react";
import styled from 'styled-components';
import Burger from "./burger";

const StyledDiv = styled.div`
perspective: 500px;
 position: relative;
  top: 2%;
  left: 2rem;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
  width: 30px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transform-style: preserve-3d;
  & > div:not(:first-child){
      margin-top:3px;
  }
`;

const Burgers = props => {
  return (
    <StyledDiv onClick={props.onClick}>
      <Burger id="burger1" />
      <Burger id="burger2" />
      <Burger id="burger3" />
    </StyledDiv>
  );
};

export default Burgers;
