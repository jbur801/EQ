import { Box, Button, Card, Stack, TextField } from "@mui/material";
import { Conversation, User } from "../../API";
import { useState } from "react";
import ModalWrapper from "../../global/helperModal/HelperModal";

interface conversationSelectorProps {
  conversations: Conversation[];
  // contextUser: User;
  setSelectedConversation: (convo: Conversation) => void;
  addConversation: (name: string) => void;
}

export const ConversationSelector: React.FC<conversationSelectorProps> = (
  props: conversationSelectorProps
) => {
  const { conversations, setSelectedConversation, addConversation } = props;
  const [showModal, setShowModal] = useState(false);
  const [newConvoName, setNewConvoName] = useState("");

  const addConvo = () => {
    addConversation(newConvoName);
    setShowModal(false);
    setNewConvoName("");
  };
  return (
    <Card sx={{ width: "100%", height: "100%" }}>
      <Stack>
        {conversations.map((convo) => {
          return (
            <Box onClick={() => setSelectedConversation(convo)}>
              <h2>{convo.name}: lorem ipsum dolor vietnam</h2>
            </Box>
          );
        })}
        <Button>
          <h1>+</h1>
        </Button>
      </Stack>
      <ModalWrapper
        heading={"Create a conversation"}
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        handleSuccess={addConvo}
      >
        <div>
          <TextField
            label={"name"}
            value={newConvoName}
            onChange={(e) => {
              setNewConvoName(e.target.value);
            }}
          />
        </div>
      </ModalWrapper>
    </Card>
  );
};
