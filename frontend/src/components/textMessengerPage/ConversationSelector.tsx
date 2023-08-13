import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import {
  AwfulPhrase,
  Conversation,
  ModelAwfulPhraseConnection,
  User,
} from "../../API";
import { useState } from "react";
import ModalWrapper from "../../global/helperModal/HelperModal";
import { UglyConvoCreationModal } from "./components/UglyConvoCreationModal";

interface conversationSelectorProps {
  conversations: Conversation[];
  contextUser?: User;
  setSelectedConversation: (convo: Conversation) => void;
  addConversation: (name: string, selectedUsers: User[]) => void;
  availableUsers: User[];
}

export const ConversationSelector: React.FC<conversationSelectorProps> = (
  props: conversationSelectorProps
) => {
  const {
    conversations,
    setSelectedConversation,
    addConversation,
    availableUsers,
    contextUser,
  } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <Card sx={{ width: "100%", height: "80vh" }}>
      <Stack>
        {conversations.map((convo) => {
          const phraseConnection =
            convo.AwfulPhrases as ModelAwfulPhraseConnection;
          const phraseItems = phraseConnection.items as AwfulPhrase[];
          let phraserName = "unknown";
          let phrase: string | undefined;
          if (phraseItems && phraseItems.length > 0) {
            const phraserID = phraseItems[0].userID;
            phrase = phraseItems[0].phrase;
            const possiblePhraserName = availableUsers.find(
              (user) => user.id === phraserID
            )?.username;
            possiblePhraserName && (phraserName = possiblePhraserName);
          }

          return (
            <Card
              sx={{ margin: 1, background: "light grey" }}
              onClick={() => setSelectedConversation(convo)}
            >
              <Stack flexDirection={"row"} alignItems={"center"} spacing={2}>
                <Avatar sx={{ width: 80, height: 80 }}>placeholder</Avatar>
                <Stack>
                  <h2 style={{ margin: 0 }}>{convo.name}:</h2>
                  {phrase && (
                    <p>
                      {phraserName}:{phrase}
                    </p>
                  )}
                </Stack>
              </Stack>
            </Card>
          );
        })}
        <Button onClick={() => setShowModal(true)}>
          <h1>+</h1>
        </Button>
      </Stack>
      <UglyConvoCreationModal
        showModal={showModal}
        setShowModal={setShowModal}
        availableUsers={availableUsers}
        addConversation={addConversation}
      />
    </Card>
  );
};
