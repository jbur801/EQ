import { Box, Card, Stack } from "@mui/material";
import { Conversation, User } from "../../API";
import { useConversationsManager } from "./customHooks/useConversationsManager";
import { ConversationSelector } from "./ConversationSelector";
import { ConversationHandler } from "./ConversationHandler";
import { AuthenticatedUserContext } from "../Auth/AuthenticatedUserContext";
import { useContext, useEffect, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { getUser } from "../../graphql/queries";

export default function MessengerMain() {
  const [contextUser, setContextUser] = useState<User>();
  const { user } = useAuthenticator((context) => [context.user]);
  //   const get = async(user:any/*AmplifyUser*/)=>{
  //         const apiData = (await API.graphql({
  //           query: getUser,
  //           variables: {input: user}
  //         })) as GraphQLResult<any>;
  //         const awfulPhrasesFromAPI = apiData.data.listConversations
  //           .items as Conversation[];
  //         console.log("convoRawResult", apiData);
  //         const convoNames = awfulPhrasesFromAPI.map((conversation: Conversation) => {
  //           return conversation.name;
  //         });
  //         console.log("found conversations:", convoNames);
  //         setConversations(awfulPhrasesFromAPI);

  //   }
  useEffect(() => {
    console.log(user);
    // get(user)
  }, [user]);
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
