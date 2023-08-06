import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
// import { useSpring, animated } from 'react-spring';

import { API } from "aws-amplify";
import { createAwfulPhrase } from "../../graphql/mutations";

import { useAwfulPhraseManager } from "./data/useAwfulPhraseManager";

export default function KysPage() {
  const [stringName, setStringName] = useState<string>("");

  const { awfulPhrases, deleteMeanWords, saveAwfulPhrase } =
    useAwfulPhraseManager();

  const save = () => {
    if (stringName !== "") {
      saveAwfulPhrase(stringName);
      setStringName("");
    }
  };

  const keyPress = (e: any) => {
    if (e.keyCode == 13) {
      console.log("value", e.target.value);
      // put the login here
      save();
    }
  };

  return (
    // <Container sx={{ width: "100vw", height: "100vh", bgcolor: "black" }}>
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
      onKeyDown={keyPress}
    >
      <Box>
        {awfulPhrases.map((awfulPhrase) => {
          return (
            <div key={awfulPhrase.id}>
              {/* <ColorfulText text={awfulPhrase.phrase} /> */}
              <>{awfulPhrase.phrase}</>
              <Button onClick={() => deleteMeanWords(awfulPhrase)}>
                {" "}
                delete
              </Button>
            </div>
          );
        })}
      </Box>
      <TextField
        onChange={(e) => {
          let newValue = e.target.value;

          setStringName(newValue);
        }}
        sx={{ background: "white" }}
        value={stringName || ""}
        autoComplete="off"
        fullWidth
        label={"Awful Phrase "}
        variant="outlined"
      />
      <Button onClick={save}> save ur awful phrase</Button>
    </div>

    // </Container>
  );
}
