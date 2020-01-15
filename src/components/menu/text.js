import React, { useRef, useEffect } from "react";
import { TimelineMax } from "gsap/all";
import { StyledText } from "./text.styled";

const Text = props => {
  const textRef = useRef(null);

  useEffect(() => {
    const timeLine = new TimelineMax();
    timeLine.fromTo(textRef.current, 3, { y: -500 }, { y: 0 });
    timeLine.fromTo(
      textRef.current,
      5,
      { rotationX: 0, rotationY: 0, rotationZ: 0 },
      { rotationX: 360, rotationY: 360, rotationZ: 360 },
      "-1"
    );
  }, []);

  return <StyledText ref={textRef}>{props.text}</StyledText>;
};
export default Text;
