import { Box, Button, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
// import { useSpring, animated } from 'react-spring';

import { useAwfulPhraseManager } from "./customHooks/useAwfulPhraseManager";
import { AuthenticatedUserContext } from "../Auth/AuthenticatedUserContext";
import { User, Conversation } from "../../API";

interface conversationHandlerProps {
  conversation: Conversation;
  conversationUsers: User[];
  contextUser: User;
}

export const ConversationHandler: React.FC<conversationHandlerProps> = (
  props
) => {
  const { conversation, conversationUsers, contextUser } = props;

  const [stringName, setStringName] = useState<string>("");

  const { awfulPhrases, deleteMeanWords, saveAwfulPhrase } =
    useAwfulPhraseManager(contextUser, conversation);

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
        height: "100%",
        backgroundColor: "grey",
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
};
