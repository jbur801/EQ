import { Button, Card, Container, Stack, Typography } from "@mui/material";
import TestCanvas from "../Three/TestCanvas";
import React, { useState } from "react";
// import { useSpring, animated } from 'react-spring';
import { useInterval } from "react-use";
import { interpolateRainbow } from "d3-scale-chromatic";
import { random } from "lodash";
import { CirclePicker } from "react-color";
import { animated, useSpring } from "@react-spring/web";
import { bgcolor } from "@mui/system";

function ColorfulText(props: { text: string }) {
  let { text } = props;
  const [color, setColor] = React.useState("#00FF00");
  const [hue, setHue] = React.useState(random(0, 360));
  const [active, setActive] = useState(true);
  const { color: animatedColor } = useSpring({
    color,
    from: { color: "#00FF00" },
    config: { duration: 10 },
  });

  useInterval(() => {
    if (active) {
      setHue((hue + 10) % 360);
      setColor(interpolateRainbow(hue / 360));
    }
  }, 10);

  const toggleAnimation = () => {
    setActive(!active);
  };

  return (
    <>
      <animated.div style={{ color: animatedColor }}>
        <h1>{text}</h1>
      </animated.div>
      <Button onClick={toggleAnimation}> IM A HAPPY BUTTON</Button>
    </>
  );
}

export default function KysPage() {
  return (
    // <Container sx={{ width: "100vw", height: "100vh", bgcolor: "black" }}>
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}>
      <ColorfulText text="I hope something you love catches on fire" />
    </div>

    // </Container>
  );
}
