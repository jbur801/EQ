import { Typography } from "@mui/material";
import React, { useState } from "react";
// import { useSpring, animated } from 'react-spring';
import { animated, useSpring } from "@react-spring/web";

export default function CharacterCarousel(props: {
  character: string;
  setCallback: (callback: React.Dispatch<React.SetStateAction<string>>) => void;
  setState: (state: string) => void;
  callback?: React.Dispatch<React.SetStateAction<string>>;
}) {
  let { character, setCallback, setState, callback } = props;
  let [color, setColor] = useState("#00FF00");
  let oldColor = color;
  // useEffect(()=>{
  //   callback(oldColor)
  //   oldColor = color
  // },[color])
  setCallback(setColor);
  setState(color);
  const { color: animatedColor } = useSpring({
    color,
    from: { color: "#00FF00" },
    config: { duration: 10 },
  });

  return (
    <animated.div
      style={{ color: animatedColor, flex: 1, padding: 0, margin: 0 }}
    >
      <Typography fontSize={80}>{character}</Typography>
    </animated.div>
  );
}
