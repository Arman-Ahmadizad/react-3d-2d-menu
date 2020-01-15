import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Circle from "./circle";
import Text from './text';
import styled from "styled-components";

const StyledCol = styled(Col)`
  margin-bottom: 5rem;
  align-items: center !important;
  display:flex;
  justify-content: center;
`;
const StyledContainer = styled(Container)`
height : 100vh;
`

const Circles = props => {

  return (
    <StyledContainer fluid={true} className="align-items-center justify-content-center d-flex" >
      <Row>
        <StyledCol xs={12}>
          <Circle
           image="/home.svg"
           onMouseAnimation={props.onMouseAnimation}
           id={'cubeOne'}
           />
           <Text text='خانه' />
        </StyledCol>
        <StyledCol xs={12}>
          <Circle
           image="/buy.svg"
           onMouseAnimation={props.onMouseAnimation}
           id={'cubeTwo'}
           />
           <Text text="محصولات" />
        </StyledCol>
        <Col xs={12}  className="align-items-center justify-content-center d-flex">
          <Circle 
          image="/reports.svg"
          onMouseAnimation={props.onMouseAnimation}
          id={'cubeThree'}
          />
          <Text  text="گزارشات" />
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Circles;
