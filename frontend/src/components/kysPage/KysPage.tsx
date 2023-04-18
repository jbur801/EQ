import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
// import { useSpring, animated } from 'react-spring';
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API } from "aws-amplify";
import { createAwfulPhrase } from "../../graphql/mutations";
import { listAwfulPhrases } from "../../graphql/queries";
import ColorfulText from "./ColourfulText";
import { AwfulPhrase } from "../../models/AwfulPhrase";

export default function KysPage() {
  const [awfulPhrases, setAwfulPhrases] = useState([
    "I hope you die",
    "I hope it is painful",
  ]);
  const [awfulPhraseText, setAwfulPhraseText] = useState<JSX.Element[]>();
  const [stringName, setStringName] = useState<String>("");
  useEffect(() => {
    async function fetchAwfulPhrases() {
      const apiData = (await API.graphql({
        query: listAwfulPhrases,
      })) as GraphQLResult<any>;
      const awfulPhrasesFromAPI = apiData.data.listAwfulPhrases
        .items as AwfulPhrase[];
      const phraseStrings = awfulPhrasesFromAPI.map((phrase: AwfulPhrase) => {
        return phrase.phrase;
      });
      console.log(phraseStrings);
      setAwfulPhrases(phraseStrings);
    }
    fetchAwfulPhrases();
  }, []);

  useEffect(() => {
    setAwfulPhraseText(
      awfulPhrases.map((awfulPhrase) => {
        return <ColorfulText text={awfulPhrase} />;
      })
    );
  }, [awfulPhrases]);

  const saveAwfulPhrase = () => {
    API.graphql({
      query: createAwfulPhrase,
      variables: { input: { phrase: stringName } },
    });
  };

  return (
    // <Container sx={{ width: "100vw", height: "100vh", bgcolor: "black" }}>
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",

        overflow: "hidden",
      }}
    >
      <Box>{awfulPhraseText}</Box>
      <TextField
        onChange={(e) => {
          let newValue = e.target.value;

          setStringName(newValue);
        }}
        value={stringName || ""}
        autoComplete="off"
        fullWidth
        label={"Awful Phrase "}
        variant="outlined"
      />
      <Button onClick={saveAwfulPhrase}> save ur awful phrase</Button>
    </div>

    // </Container>
  );
}
