import { Card, Stack } from "@mui/material";
import { ConversationHandler } from "./ConversationHandler";
import { ConversationSelector } from "./ConversationSelector";
import { useConversationsManager } from "./customHooks/useConversationsManager";
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

  const quickIsMobile = window.screen.width < 600;

  return (
    <Card sx={{ width: "100%", height: "100%" }}>
      <Stack flexDirection={"row"} spacing={2}>
        {(!quickIsMobile || !selectedConversation) && (
          <ConversationSelector
            contextUser={contextUser}
            conversations={conversations}
            setSelectedConversation={setSelectedConversation}
            addConversation={addConversation}
            availableUsers={availableUsers}
          />
        )}
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
