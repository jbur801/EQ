import { useEffect, useState } from "react";
import { listAwfulPhrases } from "../../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLSubscription } from "@aws-amplify/api";
import { AwfulPhrase } from "../../../models/AwfulPhrase";
import {
  createAwfulPhrase,
  deleteAwfulPhrase,
} from "../../../graphql/mutations";
import { onCreateAwfulPhrase } from "../../../graphql/subscriptions";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { OnCreateAwfulPhraseSubscription } from "../../../API";

export const useAwfulPhraseManager = () => {
  const [awfulPhrases, setAwfulPhrases] = useState<AwfulPhrase[]>([]);
  const [latestMessage, setLatestMessage] = useState<AwfulPhrase>();
  useEffect(() => {
    async function fetchAwfulPhrases() {
      const apiData = (await API.graphql({
        query: listAwfulPhrases,
      })) as GraphQLResult<any>;
      const awfulPhrasesFromAPI = apiData.data.listAwfulPhrases
        .items as AwfulPhrase[];
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

  const deleteMeanWords = async (awfulPhrase: AwfulPhrase) => {
    const apiData = (await API.graphql({
      query: deleteAwfulPhrase,
      variables: { input: { id: awfulPhrase.id } },
    })) as GraphQLResult<any>;
    return apiData;
  };

  const saveAwfulPhrase = (phraseString: string) => {
    API.graphql({
      query: createAwfulPhrase,
      variables: { input: { phrase: phraseString } },
    });
  };

  return { awfulPhrases, deleteMeanWords, saveAwfulPhrase };
};
