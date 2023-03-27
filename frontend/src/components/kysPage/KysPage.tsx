import { Button, Card, Container, Stack, Typography } from "@mui/material";
import TestCanvas from "../Three/TestCanvas";
import React, { useEffect, useState } from "react";
// import { useSpring, animated } from 'react-spring';
import { useInterval } from "react-use";
import { interpolateRainbow } from "d3-scale-chromatic";
import { random } from "lodash";
import { CirclePicker } from "react-color";
import { animated, SpringValue, useSpring } from "@react-spring/web";
import { bgcolor } from "@mui/system";

function ColorfulText(props: { text: string }) {
  let { text } = props;
  const [color, setColor] = React.useState("#00FF00");
  const [hue, setHue] = React.useState(random(0, 360));
  const [active, setActive] = useState(true);
  const callbacks: React.Dispatch<React.SetStateAction<string>>[] = [];
  const states: string[] = [];
  let characters: JSX.Element[] = [];
  let words: JSX.Element[] = [];
  useInterval(() => {
    if (active) {
      setHue((hue + 10) % 360);
      setColor(interpolateRainbow(hue / 360));
    } else {
      setHue(0);
      setColor(interpolateRainbow(hue / 360));
    }
  }, 100);
  // useEffect(() => {
  for (let i = 0; i < text.length; i++) {
    let setCallback = (
      callback: React.Dispatch<React.SetStateAction<string>>
    ) => {
      callbacks.push(callback);
    };
    let setState = (state: string) => {
      // states[i] = state;
      states.push(state);
    };

    let character = CharacterCarousel({
      character: text[i],
      setCallback,
      setState,
    });
    characters.push(character);
    if (text[i] === " ") {
      characters.push(<div style={{ width: 10 }} />);
      words.push(
        <div
          style={{
            display: "flex",
          }}
        >
          {characters}
        </div>
      );
      characters = [];
    }
  }
  words.push(
    <div
      style={{
        display: "flex",
      }}
    >
      {characters}
    </div>
  );
  // }, []);

  useEffect(() => {
    let max = text.length - 1;
    if (callbacks.length > 0) {
      callbacks[0](color);
      for (let i = 1; i < callbacks.length; i++) {
        callbacks[i](states[i - 1]);
      }
    }
  }, [color]);

  const toggleAnimation = () => {
    setActive(!active);
  };

  return (
    <>
      <Stack width={"100%"} justifyContent="center" alignItems="center">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {words}
        </div>
        <Button onClick={toggleAnimation}> IM A HAPPY BUTTON</Button>
      </Stack>
    </>
  );
}

function CharacterCarousel(props: {
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

export default function KysPage() {
  return (
    // <Container sx={{ width: "100vw", height: "100vh", bgcolor: "black" }}>
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <ColorfulText text="I hope something you love catches on fire" />
    </div>

    // </Container>
  );
}
