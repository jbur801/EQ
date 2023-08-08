/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateConversationInput = {
  id?: string | null,
  name?: string | null,
};

export type ModelConversationConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelConversationConditionInput | null > | null,
  or?: Array< ModelConversationConditionInput | null > | null,
  not?: ModelConversationConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Conversation = {
  __typename: "Conversation",
  id: string,
  name?: string | null,
  AwfulPhrases?: ModelAwfulPhraseConnection | null,
  Users?: ModelConversationUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAwfulPhraseConnection = {
  __typename: "ModelAwfulPhraseConnection",
  items:  Array<AwfulPhrase | null >,
  nextToken?: string | null,
};

export type AwfulPhrase = {
  __typename: "AwfulPhrase",
  id: string,
  phrase: string,
  userID: string,
  conversationID: string,
  type: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelConversationUserConnection = {
  __typename: "ModelConversationUserConnection",
  items:  Array<ConversationUser | null >,
  nextToken?: string | null,
};

export type ConversationUser = {
  __typename: "ConversationUser",
  id: string,
  conversationId: string,
  userId: string,
  conversation: Conversation,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  username?: string | null,
  AwfulPhrases?: ModelAwfulPhraseConnection | null,
  conversations?: ModelConversationUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateConversationInput = {
  id: string,
  name?: string | null,
};

export type DeleteConversationInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  username?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateAwfulPhraseInput = {
  id?: string | null,
  phrase: string,
  userID: string,
  conversationID: string,
  type: string,
  createdAt?: string | null,
};

export type ModelAwfulPhraseConditionInput = {
  phrase?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  conversationID?: ModelIDInput | null,
  type?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAwfulPhraseConditionInput | null > | null,
  or?: Array< ModelAwfulPhraseConditionInput | null > | null,
  not?: ModelAwfulPhraseConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAwfulPhraseInput = {
  id: string,
  phrase?: string | null,
  userID?: string | null,
  conversationID?: string | null,
  type?: string | null,
  createdAt?: string | null,
};

export type DeleteAwfulPhraseInput = {
  id: string,
};

export type CreateNicePhraseInput = {
  id?: string | null,
  phrase: string,
};

export type ModelNicePhraseConditionInput = {
  phrase?: ModelStringInput | null,
  and?: Array< ModelNicePhraseConditionInput | null > | null,
  or?: Array< ModelNicePhraseConditionInput | null > | null,
  not?: ModelNicePhraseConditionInput | null,
};

export type nicePhrase = {
  __typename: "nicePhrase",
  id: string,
  phrase: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNicePhraseInput = {
  id: string,
  phrase?: string | null,
};

export type DeleteNicePhraseInput = {
  id: string,
};

export type CreateConversationUserInput = {
  id?: string | null,
  conversationId: string,
  userId: string,
};

export type ModelConversationUserConditionInput = {
  conversationId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelConversationUserConditionInput | null > | null,
  or?: Array< ModelConversationUserConditionInput | null > | null,
  not?: ModelConversationUserConditionInput | null,
};

export type UpdateConversationUserInput = {
  id: string,
  conversationId?: string | null,
  userId?: string | null,
};

export type DeleteConversationUserInput = {
  id: string,
};

export type ModelConversationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelConversationFilterInput | null > | null,
  or?: Array< ModelConversationFilterInput | null > | null,
  not?: ModelConversationFilterInput | null,
};

export type ModelConversationConnection = {
  __typename: "ModelConversationConnection",
  items:  Array<Conversation | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelAwfulPhraseFilterInput = {
  id?: ModelIDInput | null,
  phrase?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  conversationID?: ModelIDInput | null,
  type?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAwfulPhraseFilterInput | null > | null,
  or?: Array< ModelAwfulPhraseFilterInput | null > | null,
  not?: ModelAwfulPhraseFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelNicePhraseFilterInput = {
  id?: ModelIDInput | null,
  phrase?: ModelStringInput | null,
  and?: Array< ModelNicePhraseFilterInput | null > | null,
  or?: Array< ModelNicePhraseFilterInput | null > | null,
  not?: ModelNicePhraseFilterInput | null,
};

export type ModelNicePhraseConnection = {
  __typename: "ModelNicePhraseConnection",
  items:  Array<nicePhrase | null >,
  nextToken?: string | null,
};

export type ModelConversationUserFilterInput = {
  id?: ModelIDInput | null,
  conversationId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelConversationUserFilterInput | null > | null,
  or?: Array< ModelConversationUserFilterInput | null > | null,
  not?: ModelConversationUserFilterInput | null,
};

export type ModelSubscriptionConversationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionConversationFilterInput | null > | null,
  or?: Array< ModelSubscriptionConversationFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionAwfulPhraseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  phrase?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  conversationID?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAwfulPhraseFilterInput | null > | null,
  or?: Array< ModelSubscriptionAwfulPhraseFilterInput | null > | null,
};

export type ModelSubscriptionNicePhraseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  phrase?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNicePhraseFilterInput | null > | null,
  or?: Array< ModelSubscriptionNicePhraseFilterInput | null > | null,
};

export type ModelSubscriptionConversationUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  conversationId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionConversationUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionConversationUserFilterInput | null > | null,
};

export type CreateConversationMutationVariables = {
  input: CreateConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type CreateConversationMutation = {
  createConversation?:  {
    __typename: "Conversation",
    id: string,
    name?: string | null,
    AwfulPhrases?:  {
      __typename: "ModelAwfulPhraseConnection",
      nextToken?: string | null,
    } | null,
    Users?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConversationMutationVariables = {
  input: UpdateConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type UpdateConversationMutation = {
  updateConversation?:  {
    __typename: "Conversation",
    id: string,
    name?: string | null,
    AwfulPhrases?:  {
      __typename: "ModelAwfulPhraseConnection",
      nextToken?: string | null,
    } | null,
    Users?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteConversationMutationVariables = {
  input: DeleteConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type DeleteConversationMutation = {
  deleteConversation?:  {
    __typename: "Conversation",
    id: string,
    name?: string | null,
    AwfulPhrases?:  {
      __typename: "ModelAwfulPhraseConnection",
      nextToken?: string | null,
    } | null,
    Users?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    AwfulPhrases?:  {
      __typename: "ModelAwfulPhraseConnection",
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    AwfulPhrases?:  {
      __typename: "ModelAwfulPhraseConnection",
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    AwfulPhrases?:  {
      __typename: "ModelAwfulPhraseConnection",
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAwfulPhraseMutationVariables = {
  input: CreateAwfulPhraseInput,
  condition?: ModelAwfulPhraseConditionInput | null,
};

export type CreateAwfulPhraseMutation = {
  createAwfulPhrase?:  {
    __typename: "AwfulPhrase",
    id: string,
    phrase: string,
    userID: string,
    conversationID: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAwfulPhraseMutationVariables = {
  input: UpdateAwfulPhraseInput,
  condition?: ModelAwfulPhraseConditionInput | null,
};

export type UpdateAwfulPhraseMutation = {
  updateAwfulPhrase?:  {
    __typename: "AwfulPhrase",
    id: string,
    phrase: string,
    userID: string,
    conversationID: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAwfulPhraseMutationVariables = {
  input: DeleteAwfulPhraseInput,
  condition?: ModelAwfulPhraseConditionInput | null,
};

export type DeleteAwfulPhraseMutation = {
  deleteAwfulPhrase?:  {
    __typename: "AwfulPhrase",
    id: string,
    phrase: string,
    userID: string,
    conversationID: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNicePhraseMutationVariables = {
  input: CreateNicePhraseInput,
  condition?: ModelNicePhraseConditionInput | null,
};

export type CreateNicePhraseMutation = {
  createNicePhrase?:  {
    __typename: "nicePhrase",
    id: string,
    phrase: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNicePhraseMutationVariables = {
  input: UpdateNicePhraseInput,
  condition?: ModelNicePhraseConditionInput | null,
};

export type UpdateNicePhraseMutation = {
  updateNicePhrase?:  {
    __typename: "nicePhrase",
    id: string,
    phrase: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNicePhraseMutationVariables = {
  input: DeleteNicePhraseInput,
  condition?: ModelNicePhraseConditionInput | null,
};

export type DeleteNicePhraseMutation = {
  deleteNicePhrase?:  {
    __typename: "nicePhrase",
    id: string,
    phrase: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateConversationUserMutationVariables = {
  input: CreateConversationUserInput,
  condition?: ModelConversationUserConditionInput | null,
};

export type CreateConversationUserMutation = {
  createConversationUser?:  {
    __typename: "ConversationUser",
    id: string,
    conversationId: string,
    userId: string,
    conversation:  {
      __typename: "Conversation",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConversationUserMutationVariables = {
  input: UpdateConversationUserInput,
  condition?: ModelConversationUserConditionInput | null,
};

export type UpdateConversationUserMutation = {
  updateConversationUser?:  {
    __typename: "ConversationUser",
    id: string,
    conversationId: string,
    userId: string,
    conversation:  {
      __typename: "Conversation",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteConversationUserMutationVariables = {
  input: DeleteConversationUserInput,
  condition?: ModelConversationUserConditionInput | null,
};

export type DeleteConversationUserMutation = {
  deleteConversationUser?:  {
    __typename: "ConversationUser",
    id: string,
    conversationId: string,
    userId: string,
    conversation:  {
      __typename: "Conversation",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetConversationQueryVariables = {
  id: string,
};

export type GetConversationQuery = {
  getConversation?:  {
    __typename: "Conversation",
    id: string,
    name?: string | null,
    AwfulPhrases?:  {
      __typename: "ModelAwfulPhraseConnection",
      nextToken?: string | null,
    } | null,
    Users?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListConversationsQueryVariables = {
  filter?: ModelConversationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConversationsQuery = {
  listConversations?:  {
    __typename: "ModelConversationConnection",
    items:  Array< {
      __typename: "Conversation",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    AwfulPhrases?:  {
      __typename: "ModelAwfulPhraseConnection",
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAwfulPhraseQueryVariables = {
  id: string,
};

export type GetAwfulPhraseQuery = {
  getAwfulPhrase?:  {
    __typename: "AwfulPhrase",
    id: string,
    phrase: string,
    userID: string,
    conversationID: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAwfulPhrasesQueryVariables = {
  filter?: ModelAwfulPhraseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAwfulPhrasesQuery = {
  listAwfulPhrases?:  {
    __typename: "ModelAwfulPhraseConnection",
    items:  Array< {
      __typename: "AwfulPhrase",
      id: string,
      phrase: string,
      userID: string,
      conversationID: string,
      type: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AwfulPhrasesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAwfulPhraseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AwfulPhrasesByUserIDQuery = {
  awfulPhrasesByUserID?:  {
    __typename: "ModelAwfulPhraseConnection",
    items:  Array< {
      __typename: "AwfulPhrase",
      id: string,
      phrase: string,
      userID: string,
      conversationID: string,
      type: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AwfulPhrasesByConversationIDQueryVariables = {
  conversationID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAwfulPhraseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AwfulPhrasesByConversationIDQuery = {
  awfulPhrasesByConversationID?:  {
    __typename: "ModelAwfulPhraseConnection",
    items:  Array< {
      __typename: "AwfulPhrase",
      id: string,
      phrase: string,
      userID: string,
      conversationID: string,
      type: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AwfulPhrasesByDateQueryVariables = {
  type: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAwfulPhraseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AwfulPhrasesByDateQuery = {
  awfulPhrasesByDate?:  {
    __typename: "ModelAwfulPhraseConnection",
    items:  Array< {
      __typename: "AwfulPhrase",
      id: string,
      phrase: string,
      userID: string,
      conversationID: string,
      type: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNicePhraseQueryVariables = {
  id: string,
};

export type GetNicePhraseQuery = {
  getNicePhrase?:  {
    __typename: "nicePhrase",
    id: string,
    phrase: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNicePhrasesQueryVariables = {
  filter?: ModelNicePhraseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNicePhrasesQuery = {
  listNicePhrases?:  {
    __typename: "ModelNicePhraseConnection",
    items:  Array< {
      __typename: "nicePhrase",
      id: string,
      phrase: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConversationUserQueryVariables = {
  id: string,
};

export type GetConversationUserQuery = {
  getConversationUser?:  {
    __typename: "ConversationUser",
    id: string,
    conversationId: string,
    userId: string,
    conversation:  {
      __typename: "Conversation",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListConversationUsersQueryVariables = {
  filter?: ModelConversationUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConversationUsersQuery = {
  listConversationUsers?:  {
    __typename: "ModelConversationUserConnection",
    items:  Array< {
      __typename: "ConversationUser",
      id: string,
      conversationId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ConversationUsersByConversationIdQueryVariables = {
  conversationId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelConversationUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConversationUsersByConversationIdQuery = {
  conversationUsersByConversationId?:  {
    __typename: "ModelConversationUserConnection",
    items:  Array< {
      __typename: "ConversationUser",
      id: string,
      conversationId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ConversationUsersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelConversationUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConversationUsersByUserIdQuery = {
  conversationUsersByUserId?:  {
    __typename: "ModelConversationUserConnection",
    items:  Array< {
      __typename: "ConversationUser",
      id: string,
      conversationId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
};

export type OnCreateConversationSubscription = {
  onCreateConversation?:  {
    __typename: "Conversation",
    id: string,
    name?: string | null,
    AwfulPhrases?:  {
      __typename: "ModelAwfulPhraseConnection",
      nextToken?: string | null,
    } | null,
    Users?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
};

export type OnUpdateConversationSubscription = {
  onUpdateConversation?:  {
    __typename: "Conversation",
    id: string,
    name?: string | null,
    AwfulPhrases?:  {
      __typename: "ModelAwfulPhraseConnection",
      nextToken?: string | null,
    } | null,
    Users?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
};

export type OnDeleteConversationSubscription = {
  onDeleteConversation?:  {
    __typename: "Conversation",
    id: string,
    name?: string | null,
    AwfulPhrases?:  {
      __typename: "ModelAwfulPhraseConnection",
      nextToken?: string | null,
    } | null,
    Users?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    AwfulPhrases?:  {
      __typename: "ModelAwfulPhraseConnection",
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    AwfulPhrases?:  {
      __typename: "ModelAwfulPhraseConnection",
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    AwfulPhrases?:  {
      __typename: "ModelAwfulPhraseConnection",
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAwfulPhraseSubscriptionVariables = {
  filter?: ModelSubscriptionAwfulPhraseFilterInput | null,
};

export type OnCreateAwfulPhraseSubscription = {
  onCreateAwfulPhrase?:  {
    __typename: "AwfulPhrase",
    id: string,
    phrase: string,
    userID: string,
    conversationID: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAwfulPhraseSubscriptionVariables = {
  filter?: ModelSubscriptionAwfulPhraseFilterInput | null,
};

export type OnUpdateAwfulPhraseSubscription = {
  onUpdateAwfulPhrase?:  {
    __typename: "AwfulPhrase",
    id: string,
    phrase: string,
    userID: string,
    conversationID: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAwfulPhraseSubscriptionVariables = {
  filter?: ModelSubscriptionAwfulPhraseFilterInput | null,
};

export type OnDeleteAwfulPhraseSubscription = {
  onDeleteAwfulPhrase?:  {
    __typename: "AwfulPhrase",
    id: string,
    phrase: string,
    userID: string,
    conversationID: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNicePhraseSubscriptionVariables = {
  filter?: ModelSubscriptionNicePhraseFilterInput | null,
};

export type OnCreateNicePhraseSubscription = {
  onCreateNicePhrase?:  {
    __typename: "nicePhrase",
    id: string,
    phrase: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNicePhraseSubscriptionVariables = {
  filter?: ModelSubscriptionNicePhraseFilterInput | null,
};

export type OnUpdateNicePhraseSubscription = {
  onUpdateNicePhrase?:  {
    __typename: "nicePhrase",
    id: string,
    phrase: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNicePhraseSubscriptionVariables = {
  filter?: ModelSubscriptionNicePhraseFilterInput | null,
};

export type OnDeleteNicePhraseSubscription = {
  onDeleteNicePhrase?:  {
    __typename: "nicePhrase",
    id: string,
    phrase: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateConversationUserSubscriptionVariables = {
  filter?: ModelSubscriptionConversationUserFilterInput | null,
};

export type OnCreateConversationUserSubscription = {
  onCreateConversationUser?:  {
    __typename: "ConversationUser",
    id: string,
    conversationId: string,
    userId: string,
    conversation:  {
      __typename: "Conversation",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateConversationUserSubscriptionVariables = {
  filter?: ModelSubscriptionConversationUserFilterInput | null,
};

export type OnUpdateConversationUserSubscription = {
  onUpdateConversationUser?:  {
    __typename: "ConversationUser",
    id: string,
    conversationId: string,
    userId: string,
    conversation:  {
      __typename: "Conversation",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteConversationUserSubscriptionVariables = {
  filter?: ModelSubscriptionConversationUserFilterInput | null,
};

export type OnDeleteConversationUserSubscription = {
  onDeleteConversationUser?:  {
    __typename: "ConversationUser",
    id: string,
    conversationId: string,
    userId: string,
    conversation:  {
      __typename: "Conversation",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
