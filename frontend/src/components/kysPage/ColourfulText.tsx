import { Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
// import { useSpring, animated } from 'react-spring';
import { interpolateRainbow } from "d3-scale-chromatic";
import { random } from "lodash";
import { useInterval } from "react-use";
import CharacterCarousel from "./CharacterCarousel";

export default function ColorfulText(props: { text: string }) {
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
  //   useEffect(() => {
  //     const initCharacterCarousel = () =>{

  //     }
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
  //   }, []);

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
