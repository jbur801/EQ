import { useEffect, useState } from "react";
import {
  awfulPhrasesByConversationID,
  conversationUsersByUserId,
  listAwfulPhrases,
} from "../../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLSubscription } from "@aws-amplify/api";
import {
  createAwfulPhrase,
  createConversation,
  createConversationUser,
  deleteAwfulPhrase,
  deleteConversation,
} from "../../../graphql/mutations";
import { onCreateAwfulPhrase } from "../../../graphql/subscriptions";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import {
  AwfulPhrase,
  AwfulPhrasesByConversationIDQuery,
  Conversation,
  CreateAwfulPhraseInput,
  CreateConversationInput,
  CreateConversationUserInput,
  OnCreateAwfulPhraseSubscription,
  User,
} from "../../../API";

/**
 * custom hook designed to manage conversations which users are a part of
 * a conversation is a collection of unkind statements which 2 or more humans direct at each other sequentially, a bizarre practice
 *
 * TODO: will subscribe to the 'creation of invitation to conversation for user' event. Will update the awfulPhrases list upon recieving a new awful phrase
 * @param user User type generated from schema, this dictates which conversations are fetched and also which invites are fetched
 *
 * @function doDeleteConversation deleteMeanWords' big brother - Further attempts to mitigate the damage caused by the user
 * @function addConversation Creates... opportunities
 * @function selectConversation sets the context conversation (target conversation)
 * TODO: all invite stuff
 * @function acceptInvite Deletes invite object and links user to conversation
 * @function declineInvite Deletes invite object
 * @function invite adds invite object (target user -> target conversation
 */
export const useConversationsManager = (user: User | undefined) => {
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation>();
  const [conversations, setConversations] = useState<Conversation[]>([]);

  //TODO
  const [invites, setInvites] = useState<any>();
  useEffect(() => {
    async function fetchConversations() {
      const apiData = (await API.graphql({
        query: conversationUsersByUserId,
        variables: { input: user },
      })) as GraphQLResult<any>;
      const awfulPhrasesFromAPI = apiData.data.listConversations
        .items as Conversation[];
      console.log("convoRawResult", apiData);
      const convoNames = awfulPhrasesFromAPI.map(
        (conversation: Conversation) => {
          return conversation.name;
        }
      );
      console.log("found conversations:", convoNames);
      setConversations(awfulPhrasesFromAPI);
    }

    // TODO create subscriptions for conversation/invite events
    // const sub = API.graphql<
    //   GraphQLSubscription<OnCreateAwfulPhraseSubscription>
    // >(graphqlOperation(onCreateAwfulPhrase)).subscribe({
    //   next: ({ provider, value }) => {
    //     const newMessage = value.data?.onCreateAwfulPhrase;
    //     newMessage && setLatestMessage(newMessage);
    //     console.log(provider, value);
    //   },
    //   error: (error) => console.warn(error),
    // });
    if (user) {
      fetchConversations();
    }

    // return () => sub.unsubscribe();
  }, [user]);

  /**
   * for fixing of mistakes
   * @param conversation conversation to be deleted, in fact, this function only requires a valid x.id
   * @returns result of deletion
   */
  const doDeleteConversation = async (conversation: Conversation) => {
    const apiData = (await API.graphql({
      query: deleteConversation,
      variables: { input: { id: conversation.id } },
    })) as GraphQLResult<any>;
    return apiData;
  };

  /**
   * For making of mistakes.
   * Will fail if user  (hook props) is undefined
   * @param name something unkind, I'm sure
   * @returns result of save operation
   */
  const addConversation = async (name: string) => {
    if (user) {
      let input: CreateConversationInput = {
        name: name,
      };
      const createConversationRes = await API.graphql({
        query: createConversation,
        variables: { input },
      });
      console.log("res from creating convo", createConversationRes);
      const linkConvoUserInput: CreateConversationUserInput = {
        userId: user.id,
        conversationId: "xdlmao ", //TODO getConvoID from createConversationRes
      };
    } else {
      console.log("missing user or conversation context");
      return;
    }
  };

  return {
    conversations,
    selectedConversation,
    setSelectedConversation,
    addConversation,
    doDeleteConversation,
  };
};
