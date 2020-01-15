import React, { Fragment, useEffect, useState } from "react";
import { TimelineMax, gsap } from "gsap/all";
import Burgers from "./burgers";
import Circles from "./circles";

const Menu = () => {
  const [clicked, setClicked] = useState(true);
  const [clickedTimesCubeOne, setClickedTimesCubeOne] = useState(2);
  const [clickedTimesCubeTwo, setClickedTimesCubeTwo] = useState(2);
  const [clickedTimesCubeThree, setClickedTimesCubeThree] = useState(2);

  useEffect(() => {}, []);

  const onClickBurger = () => {
    const burgerOne = document.querySelector("#burger1");
    const burgerTwo = document.querySelector("#burger2");
    const burgerThree = document.querySelector("#burger3");
    const timeLine = new TimelineMax();

    if (clicked) {
      timeLine
        .fromTo(
          burgerOne,
          2,
          { rotationX: 0, rotationY: 0, rotationZ: 0 },
          { rotationX: 360, rotationY: 360, rotationZ: 135 }
        )
        .fromTo(
          burgerTwo,
          2,
          { rotationX: 0, rotationY: 0, rotationZ: 0, left: 0 },
          { rotationX: 360, rotationY: 360, rotationZ: 0, left: -100 },
          "1"
        )
        .fromTo(
          burgerThree,
          2,
          { rotationX: 0, rotationY: 0, rotationZ: 0, y: 0 },
          { rotationX: 360, rotationY: 360, rotationZ: -135, y: -14 },
          "1"
        );
    } else {
      timeLine
        .fromTo(
          burgerOne,
          2,
          { rotationX: 360, rotationY: 360, rotationZ: 135 },
          { rotationX: 0, rotationY: 0, rotationZ: 0 }
        )
        .fromTo(
          burgerTwo,
          2,
          { rotationX: 360, rotationY: 360, rotationZ: 0, left: -100 },
          { rotationX: 0, rotationY: 0, rotationZ: 0, left: 0 },
          "1"
        )
        .fromTo(
          burgerThree,
          2,
          { rotationX: 360, rotationY: 360, rotationZ: -135, y: -14 },
          { rotationX: 0, rotationY: 0, rotationZ: 0, y: 0 },
          "1"
        );
    }
    setClicked(!clicked);
  };

  const onMouseAnimation = (cubes, cubeId) => {
    const timeLine = new TimelineMax();
    let value = null;

    switch(cubeId){
      case 'cubeOne':
        value = clickedTimesCubeOne;
        setClickedTimesCubeOne(clickedTimesCubeOne + 1);
        break;

        case 'cubeTwo':
          value = clickedTimesCubeTwo;
          setClickedTimesCubeTwo(clickedTimesCubeTwo + 1);
          break;

          case 'cubeThree':
            value = clickedTimesCubeThree;
            setClickedTimesCubeThree(clickedTimesCubeThree + 1);
            break;

        default:
          value = 2;
          break;
    }


    timeLine.fromTo(
      cubes,
      7,
      {
        rotationX: gsap.getProperty(cubes, "rotationX"),
        rotationY: gsap.getProperty(cubes, "rotationY"),
        rotationZ: gsap.getProperty(cubes, "rotationZ")
      },
      {
        rotationX: 360 * value,
        rotationY: 360 * value,
        rotationZ: 360 * value
      }
    );
  };

  return (
    <Fragment>
      <Burgers onClick={onClickBurger} />
      <Circles onMouseAnimation={onMouseAnimation} />
    </Fragment>
  );
};

export default Menu;
