import { useEffect, useState } from "react";
import { User } from "../../../API";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "../../../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { createUser } from "../../../graphql/mutations";

/**
 * custom hook designed to fetch the dynamo instance of a user from their authenticated cognito identity
 * users are matched with cognito by cognitoUser.userName === dynamoUser.id
 * TODO: update -> current functionality will create a user object in dynamo if none is found, this will set the dynamo username field to the users email address
 * TODO: add some functions for manipulating user object into this hook
 */
export const useDynamoUser = () => {
  const [user, setUser] = useState<User>();
  const { user: cognitoUser } = useAuthenticator((context) => [context.user]);
  const get = async (user: any /*AmplifyUser*/) => {
    const userID = user.username;
    console.log("found id", userID);
    const getRes = (await API.graphql(
      graphqlOperation(getUser, {
        id: userID,
      })
    )) as GraphQLResult<any>;
    console.log("UserRawResult", getRes);
    if (getRes.data.getUser) {
      setUser(getRes.data.getUser);
    } else {
      const createRes = (await API.graphql(
        graphqlOperation(createUser, {
          input: { id: userID, username: user.attributes?.email },
        })
      )) as GraphQLResult<any>;
      if (createRes.data.createUser) {
        setUser(createRes.data.createUser);
      } else {
        console.log("wee woo problem");
      }
    }

    // const awfulPhrasesFromAPI = apiData.data.listConversations
    //   .items as Conversation[];

    // const convoNames = awfulPhrasesFromAPI.map((conversation: Conversation) => {
    //   return conversation.name;
    // });
    // console.log("found conversations:", convoNames);
    // setUser(foundUser);
  };
  useEffect(() => {
    console.log(user, cognitoUser);
    get(cognitoUser);
  }, [cognitoUser]);

  return { user };
};
