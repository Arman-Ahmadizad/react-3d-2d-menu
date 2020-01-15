import styled from "styled-components";

const StyledBoxFace = styled.div`
  position: absolute;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

export const StyledBox = styled.div`
  width: 30px;
  height: 4px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-1px);
  div {
    background-color: #4c5c68;
  }
`;
export const StyledFront = styled(StyledBoxFace)`
  width: 30px;
  height: 4px;
  transform: rotateY(0deg) translateZ(3px);
  /* background-color: green !important; */
`;

export const StyledBack = styled(StyledBoxFace)`
  width: 30px;
  height: 4px;
  transform: rotateY(180deg) translateZ(-3px);
  /* background-color: transparent !important; */
`;

export const StyledRight = styled(StyledBoxFace)`
  width: 6px;
  height: 4px;
  left: 21px;
  line-height: 4px;
  transform: rotateY(90deg) translateZ(6px);
  /* background-color: purple !important; */
`;

export const StyledLeft = styled(StyledBoxFace)`
  width: 6px;
  height: 4px;
  left: 3px;
  line-height: 4px;
  transform: rotateY(-90deg) translateZ(6px);
  /* background-color: yellow !important; */
`;

export const StyledTop = styled(StyledBoxFace)`
  width: 30px;
  height: 6px;
  top: 2px;
  transform: rotateX(90deg) translateZ(4px);
  /* background-color: blue !important; */
`;

export const StyledBottom = styled(StyledBoxFace)`
  width: 30px;
  height: 6px;
  top: 2px;
  transform: rotateX(-90deg) translateZ(-2px);
  /* background-color: red !important; */
`;
