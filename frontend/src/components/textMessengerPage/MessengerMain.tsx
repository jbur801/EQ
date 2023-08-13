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
  const { user: contextUser, availableUsers } = useDynamoUser();

  const {
    conversations,
    selectedConversation,
    setSelectedConversation,
    addConversation,
    doDeleteConversation,
  } = useConversationsManager(contextUser);

  return (
    <Card sx={{ width: "100%", height: "100%" }}>
      <Stack flexDirection={"row"} spacing={2}>
        <ConversationSelector
          contextUser={contextUser}
          conversations={conversations}
          setSelectedConversation={setSelectedConversation}
          addConversation={addConversation}
          availableUsers={availableUsers}
        />
        {selectedConversation && contextUser && (
          <ConversationHandler
            conversation={selectedConversation}
            setConversation={setSelectedConversation}
            contextUser={contextUser}
            conversationUsers={/*TODO convo users*/ availableUsers}
          />
        )}
      </Stack>
    </Card>
  );
}
