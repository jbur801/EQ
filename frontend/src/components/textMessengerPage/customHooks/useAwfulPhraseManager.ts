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
import { mostRecentConversationInsults } from "../../../graphql/conversation/queries";

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
  const [fullyLoaded, setFullyLoaded] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [nextToken, setNextToken] = useState<string>();
  async function fetchAwfulPhrases(
    conversation: Conversation,
    givenNextToken?: string
  ) {
    setIsFetching(true);
    console.log("convo id = ", conversation.id);
    const apiData = (await API.graphql({
      query: mostRecentConversationInsults,
      variables: {
        conversationID: conversation.id,
        nextToken: givenNextToken,
      },
    })) as GraphQLResult<any>;
    console.log("awfulPhraseRawResult", apiData);
    const awfulPhrasesFromAPI = apiData.data
      .awfulPhrasesByConversationIDAndCreatedAt.items as AwfulPhrase[];
    //reverse result (fetch most recent, but most recent should be at the end)
    const reversedPhrases = [];
    for (let i = awfulPhrasesFromAPI.length; i > 0; i--) {
      reversedPhrases.push(awfulPhrasesFromAPI[i - 1]);
    }
    setIsFetching(false);
    let newNextToken =
      apiData.data.awfulPhrasesByConversationIDAndCreatedAt.nextToken;
    console.log("new next token is", newNextToken);
    return { phrases: reversedPhrases, nextToken: newNextToken };
  }
  useEffect(() => {
    console.log("setting fullyloaded", nextToken);
    if (nextToken) {
      setFullyLoaded(false);
    } else {
      setFullyLoaded(true);
    }
  }, [nextToken]);

  useEffect(() => {
    async function fetchRecentMessages(conversation: Conversation) {
      let recentMessages = await fetchAwfulPhrases(conversation);
      setAwfulPhrases(recentMessages.phrases);
      setNextToken(recentMessages.nextToken);
    }
    // Subscribe to creation of Message
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
    conversation && fetchRecentMessages(conversation);

    return () => sub.unsubscribe();
  }, [conversation]);

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

  /**
   * loads more disgusting verbiage
   * uses nextToken and conversation stored in state to get the next series of mean words,
   * updates local state with new nextToken and updated awfulPhrases (previously fetched ones + latest fetched ones)
   */
  const fetchMorePhrases = async () => {
    if (conversation && !fullyLoaded) {
      let res = await fetchAwfulPhrases(conversation, nextToken);
      let newMessages = res.phrases;
      setAwfulPhrases(newMessages.concat(awfulPhrases));
      setNextToken(res.nextToken);
    } else {
      if (!conversation) {
        console.warn("trying to fetch messages in nonexistent conversation");
      } else {
        console.warn("trying to fetch messages after all messages are fetched");
      }
    }
  };

  return {
    awfulPhrases,
    deleteMeanWords,
    saveAwfulPhrase,
    isFetching,
    fullyLoaded,
    fetchMorePhrases,
  };
};
