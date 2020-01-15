import React, { Fragment, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { TimelineMax } from "gsap/all";

const StyledContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  perspective: 100px;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  &:hover .cube {
  }
`;

const StyledCube = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  div {
    width: 100px;
    height: 100px;
    display: block;
    position: absolute;
    border: none;
    line-height: 200px;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    background-color: #abd2dc;
  }
  .front {
    transform: rotateY(0deg) translateZ(50px);
    -webkit-transform: rotateY(0deg) translateZ(50px);
    -moz-transform: rotateY(0deg) translateZ(50px);
  }
  .back {
    transform: rotateX(180deg) translateZ(50px);
    -webkit-transform: rotateX(180deg) translateZ(50px);
    -moz-transform: rotateX(180deg) translateZ(50px);
  }
  .right {
    transform: rotateY(90deg) translateZ(50px);
    -webkit-transform: rotateY(90deg) translateZ(50px);
    -moz-transform: rotateY(90deg) translateZ(50px);
  }
  .left {
    transform: rotateY(-90deg) translateZ(50px);
    -webkit-transform: rotateY(-90deg) translateZ(50px);
    -moz-transform: rotateY(-90deg) translateZ(50px);
  }
  .top {
    transform: rotateX(90deg) translateZ(50px);
    -webkit-transform: rotateX(90deg) translateZ(50px);
    -moz-transform: rotateX(90deg) translateZ(50px);
  }
  .bottom {
    transform: rotateX(-90deg) translateZ(50px);
    -webkit-transform: rotateX(-90deg) translateZ(50px);
    -moz-transform: rotateX(-90deg) translateZ(50px);
  }
`;

const StyledSide = styled.div`
  background-image: url(${props => props.image});
`;

const Circle = props => {
  const cubeRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <Fragment>
      <StyledContainer>
        <StyledCube
          className="cube"
          ref={cubeRef}
          onMouseEnter={() => props.onMouseAnimation(cubeRef.current, props.id)}
          id={props.id}
        >
          <StyledSide className="front" image={props.image} />
          <StyledSide className="back" image={props.image} />
          <StyledSide className="right" image={props.image} />
          <StyledSide className="left" image={props.image} />
          <StyledSide className="top" image={props.image} />
          <StyledSide className="bottom" image={props.image} />
        </StyledCube>
      </StyledContainer>
    </Fragment>
  );
};

export default Circle;
