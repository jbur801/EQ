import { Avatar, Box, Button, Card, Stack, TextField } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
// import { useSpring, animated } from 'react-spring';

import { useAwfulPhraseManager } from "./customHooks/useAwfulPhraseManager";
import { AuthenticatedUserContext } from "../Auth/AuthenticatedUserContext";
import { User, Conversation } from "../../API";
import { Message } from "./components/Message";

interface conversationHandlerProps {
  conversation: Conversation;
  setConversation: (convo: Conversation | undefined) => void;
  conversationUsers: User[];
  contextUser: User;
}

export const ConversationHandler: React.FC<conversationHandlerProps> = (
  props
) => {
  const { conversation, conversationUsers, contextUser, setConversation } =
    props;
  const bottomEl = useRef<HTMLDivElement>(null);
  const [stringName, setStringName] = useState<string>("");
  const scrollToBottom = () => {
    bottomEl?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const {
    awfulPhrases,
    deleteMeanWords,
    saveAwfulPhrase,
    fullyLoaded,
    fetchMorePhrases,
    isFetching,
  } = useAwfulPhraseManager(contextUser, conversation);

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

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    // <Container sx={{ width: "100vw", height: "100vh", bgcolor: "black" }}>
    <div
      style={{
        width: "100%",
        height: "100%",
        // backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
      onKeyDown={keyPress}
    >
      <Stack sx={{ width: "95%", height: "80vh" }}>
        <Stack id={"headerBar"} flexDirection={"row"} alignItems={"center"}>
          <Button onClick={() => setConversation(undefined)}>{"<"}</Button>
          <Avatar sx={{ width: 80, height: 80 }}>placeholder</Avatar>
          <h1>{conversation.name}</h1>
        </Stack>
        <Card sx={{ width: "95%", height: "90%" }}>
          <div style={{ overflowY: "scroll", height: "100%" }}>
            <Stack
              spacing={1}
              height={"100%"}
              alignItems={"flex-end"}
              justifyContent={"right"}
            >
              {fullyLoaded ? (
                <div style={{ height: "30vh" }}> no more stuff to load</div>
              ) : isFetching ? (
                <>currently fetching stuff</>
              ) : (
                <Button onClick={fetchMorePhrases}> fetch more stuff </Button>
              )}
              {awfulPhrases.map((awfulPhrase) => {
                return (
                  <Message
                    contextUser={contextUser}
                    message={awfulPhrase}
                    conversationUsers={conversationUsers}
                  />
                );
              })}
              <div ref={bottomEl}></div>
            </Stack>
          </div>
        </Card>
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <div style={{ width: "100%" }}>
            I'm gonna put some more controls here
          </div>
          <TextField
            onChange={(e) => {
              let newValue = e.target.value;

              setStringName(newValue);
            }}
            sx={{ background: "white", flexGrow: 3 }}
            value={stringName || ""}
            autoComplete="off"
            fullWidth={true}
            label={"Type here cunt "}
            variant="outlined"
          />
          <Button onClick={save} sx={{ flexGrow: 0, width: 60 }}>
            {" "}
            send
          </Button>
        </div>
      </Stack>
    </div>

    // </Container>
  );
};
