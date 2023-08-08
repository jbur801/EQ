import { Box, Card, Stack } from "@mui/material";
import { Conversation, User } from "../../API";
import { useConversationsManager } from "./customHooks/useConversationsManager";
import { ConversationSelector } from "./ConversationSelector";
import { ConversationHandler } from "./ConversationHandler";
import { AuthenticatedUserContext } from "../Auth/AuthenticatedUserContext";
import { useContext, useEffect, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { getUser } from "../../graphql/queries";
import { API } from "aws-amplify";
import { useDynamoUser } from "./customHooks/useDynamoUser";

export default function MessengerMain() {
  const { user: contextUser } = useDynamoUser();

  const {
    conversations,
    selectedConversation,
    setSelectedConversation,
    addConversation,
    doDeleteConversation,
  } = useConversationsManager(contextUser);

  return (
    <Card sx={{ width: "100%", height: "100%" }}>
      <Stack flexDirection={"row"}>
        <ConversationSelector
          conversations={conversations}
          setSelectedConversation={setSelectedConversation}
          addConversation={addConversation}
        />
        {selectedConversation && contextUser && (
          <ConversationHandler
            conversation={selectedConversation}
            contextUser={contextUser}
            conversationUsers={/*TODO convo users*/ []}
          />
        )}
      </Stack>
    </Card>
  );
}
