import React from "react";
import styled from 'styled-components';
import {
  StyledBox,
  StyledFront,
  StyledBack,
  StyledBottom,
  StyledTop,
  StyledLeft,
  StyledRight
} from "./burger.styled";

const StyledWrapper = styled.div`
 perspective: 500px;
 position: relative;
  top: 5%;
  left: 2rem;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
  width: 30px;
  height: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transform-style: preserve-3d;
`;

const Burger = props => {
  return (
      
      <StyledBox id={props.id}>
        <StyledFront />
        <StyledBack />
        <StyledRight />
        <StyledLeft />
        <StyledTop />
        <StyledBottom />
      </StyledBox>
    
  );
};

export default Burger;
