import React, { Fragment, useState } from "react";
import { TimelineMax, gsap } from "gsap/all";
import Burgers from "./burgers";
import Circles from "./circles";

const Menu = () => {
  const [clicked, setClicked] = useState(true);
  const [clickedTimesCubeOne, setClickedTimesCubeOne] = useState(2);
  const [clickedTimesCubeTwo, setClickedTimesCubeTwo] = useState(2);
  const [clickedTimesCubeThree, setClickedTimesCubeThree] = useState(2);

  const onClickBurger = () => {
    const burgerOne = document.querySelector("#burger1");
    const burgerTwo = document.querySelector("#burger2");
    const burgerThree = document.querySelector("#burger3");
    const cubes = document.querySelectorAll(".cube");
    const texts = document.querySelectorAll(".menu-texts");
    const timeLine = new TimelineMax();

    setClicked(!clicked);

    if (clicked === true) {
      timeLine
        .fromTo(
          burgerOne,
          1,
          { rotationX: 0, rotationY: 0, rotationZ: 0 },
          { rotationX: 360, rotationY: 360, rotationZ: 135 }
        )
        .fromTo(
          burgerTwo,
          1,
          { rotationX: 0, rotationY: 0, rotationZ: 0, left: 0 },
          { rotationX: 360, rotationY: 360, rotationZ: 0, left: -100 },
          "0.5"
        )
        .fromTo(
          burgerThree,
          1,
          { rotationX: 0, rotationY: 0, rotationZ: 0, y: 0 },
          { rotationX: 360, rotationY: 360, rotationZ: -135, y: -14 },
          "0.5"
        );

      const timeLineCubes = new TimelineMax();
      timeLineCubes.fromTo(
        cubes,
        3,
        { y: gsap.getProperty(cubes[2], "y") },
        { y: 1000 }
      );
      timeLineCubes.fromTo(
        cubes,
        5,
        { rotationX: 0, rotationY: 0, rotationZ: 0 },
        { rotationX: 360, rotationY: 360, rotationZ: 360 },
        "-1"
      );

      const timeLineText = new TimelineMax();
      timeLineText.fromTo(
        texts,
        3,
        { y: gsap.getProperty(texts[2], "y") },
        { y: 1030 }
      );
      timeLineText.fromTo(
        texts,
        5,
        { rotationX: 0, rotationY: 0, rotationZ: 0 },
        { rotationX: 360, rotationY: 360, rotationZ: 360 },
        "-1"
      );
    } else {
      timeLine
        .fromTo(
          burgerOne,
          1,
          { rotationX: 360, rotationY: 360, rotationZ: 135 },
          { rotationX: 0, rotationY: 0, rotationZ: 0 }
        )
        .fromTo(
          burgerTwo,
          1,
          { rotationX: 360, rotationY: 360, rotationZ: 0, left: -100 },
          { rotationX: 0, rotationY: 0, rotationZ: 0, left: 0 },
          "0.5"
        )
        .fromTo(
          burgerThree,
          1,
          { rotationX: 360, rotationY: 360, rotationZ: -135, y: -14 },
          { rotationX: 0, rotationY: 0, rotationZ: 0, y: 0 },
          "0.5"
        );

      const timeLineCubes = new TimelineMax();
      timeLineCubes.fromTo(
        cubes,
        3,
        { y: gsap.getProperty(cubes[2], "y") },
        { y: 0 }
      );
      timeLineCubes.fromTo(
        cubes,
        5,
        { rotationX: 360, rotationY: 360, rotationZ: 360 },
        { rotationX: 0, rotationY: 0, rotationZ: 0 },
        "-1"
      );

      const timeLineText = new TimelineMax();
      timeLineText.fromTo(
        texts,
        3,
        { y: gsap.getProperty(texts[2], "y") },
        { y: 0 }
      );
      timeLineText.fromTo(
        texts,
        5,
        { rotationX: 360, rotationY: 360, rotationZ: 360 },
        { rotationX: 0, rotationY: 0, rotationZ: 0 },
        "-1"
      );
    }
  };

  const onMouseAnimation = (cubes, cubeId) => {
    const timeLine = new TimelineMax();
    let value = null;

    switch (cubeId) {
      case "cubeOne":
        value = clickedTimesCubeOne;
        setClickedTimesCubeOne(clickedTimesCubeOne + 1);
        break;

      case "cubeTwo":
        value = clickedTimesCubeTwo;
        setClickedTimesCubeTwo(clickedTimesCubeTwo + 1);
        break;

      case "cubeThree":
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
      <Burgers
        onClick={() => {
          setClicked(!clicked);
          onClickBurger();
        }}
      />
      <Circles onMouseAnimation={onMouseAnimation} />
    </Fragment>
  );
};

export default Menu;
