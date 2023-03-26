import { Button, Card, Container, Stack, Typography } from "@mui/material";
import TestCanvas from "../Three/TestCanvas";
import React from "react";
// import { useSpring, animated } from 'react-spring';
import { useInterval } from "react-use";
import { interpolateRainbow } from "d3-scale-chromatic";
import { random } from "lodash";
import { CirclePicker } from "react-color";
import { animated, useSpring } from "@react-spring/web";

function ColorfulText(props: { text: string }) {
  let { text } = props;
  const [color, setColor] = React.useState("#00FF00");
  const [hue, setHue] = React.useState(random(0, 360));
  const { color: animatedColor } = useSpring({
    color,
    from: { color: "#00FF00" },
    config: { duration: 1000 },
  });

  useInterval(() => {
    setHue((hue + 10) % 360);
    setColor(interpolateRainbow(hue / 360));
  }, 10);

  return (
    <animated.div style={{ color: animatedColor }}>
      <h1>{text}</h1>
      <p>This text changes color constantly.</p>
      <CirclePicker
        color={color}
        onChangeComplete={({ hex }) => setColor(hex)}
      />
    </animated.div>
  );
}

export default function KysPage() {
  return (
    <Container sx={{ width: "100%", height: "100%" }}>
      <ColorfulText text="I hope something you love catches on fire" />
    </Container>
  );
}
