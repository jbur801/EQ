import { useEffect, useState } from "react";
import {
  awfulPhrasesByConversationID,
  listAwfulPhrases,
} from "../../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLSubscription } from "@aws-amplify/api";
import {
  createAwfulPhrase,
  deleteAwfulPhrase,
} from "../../../graphql/mutations";
import { onCreateAwfulPhrase } from "../../../graphql/subscriptions";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import {
  AwfulPhrase,
  AwfulPhrasesByConversationIDQuery,
  Conversation,
  CreateAwfulPhraseInput,
  OnCreateAwfulPhraseSubscription,
  User,
} from "../../../API";

/**
 * custom hook designed to aid users in saying hurtful things and recieving hurtful replies
 * fetches the awful phrases which have been hurled in the conversation so far
 * subscribes to the 'creation of awfulPhrase' event. Will update the awfulPhrases list upon recieving a new awful phrase
 * @param user User type generated from schema, is the user to be held responsible for the terrible statements saved by this hook
 * @param conversation Conversation type generated from schema, is the conversation which the unkind utterances shall assail
 * @function deleteMeanWords Attempts to mitigate the damage caused by the user, although it is probably too late
 * @function saveAwfulPhrase Immortalises the users foolishness in the database
 */
export const useAwfulPhraseManager = (
  user: User | undefined,
  conversation: Conversation | undefined
) => {
  const [awfulPhrases, setAwfulPhrases] = useState<AwfulPhrase[]>([]);
  const [latestMessage, setLatestMessage] = useState<AwfulPhrase>();
  useEffect(() => {
    async function fetchAwfulPhrases() {
      const apiData = (await API.graphql({
        query: awfulPhrasesByConversationID,
      })) as GraphQLResult<any>;
      const awfulPhrasesFromAPI = apiData.data.listAwfulPhrases
        .items as AwfulPhrase[];
      console.log("awfulPhraseRawResult", apiData);
      const phraseStrings = awfulPhrasesFromAPI.map((phrase: AwfulPhrase) => {
        return phrase.phrase;
      });
      console.log("about to set", phraseStrings);
      setAwfulPhrases(awfulPhrasesFromAPI);
    }

    // Subscribe to creation of Todo
    const sub = API.graphql<
      GraphQLSubscription<OnCreateAwfulPhraseSubscription>
    >(graphqlOperation(onCreateAwfulPhrase)).subscribe({
      next: ({ provider, value }) => {
        const newMessage = value.data?.onCreateAwfulPhrase;
        newMessage && setLatestMessage(newMessage);
        console.log(provider, value);
      },
      error: (error) => console.warn(error),
    });

    fetchAwfulPhrases();

    return () => sub.unsubscribe();
  }, []);

  useEffect(() => {
    latestMessage && setAwfulPhrases([...(awfulPhrases || []), latestMessage]);
  }, [latestMessage]);

  /**
   * for fixing of mistakes
   * @param awfulPhrase awfulPhrase to be deleted, in fact, this function only requires a valid x.id
   * @returns result of deletion
   */
  const deleteMeanWords = async (awfulPhrase: AwfulPhrase) => {
    const apiData = (await API.graphql({
      query: deleteAwfulPhrase,
      variables: { input: { id: awfulPhrase.id } },
    })) as GraphQLResult<any>;
    return apiData;
  };

  /**
   * For making of mistakes.
   * Will fail if user or conversation (hook props) are undefined
   * @param phraseString something unkind, I'm sure
   * @returns result of save operation (promise)
   */
  const saveAwfulPhrase = (phraseString: string) => {
    if (user && conversation) {
      let input: CreateAwfulPhraseInput = {
        phrase: phraseString,
        type: "Phrase",
        userID: user.id,
        conversationID: conversation.id,
      };
      return API.graphql({
        query: createAwfulPhrase,
        variables: { input },
      });
    } else {
      console.log("missing user or conversation context");
      return;
    }
  };

  return { awfulPhrases, deleteMeanWords, saveAwfulPhrase };
};
