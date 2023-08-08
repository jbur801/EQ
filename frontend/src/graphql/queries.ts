/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      id
      name
      AwfulPhrases {
        nextToken
      }
      Users {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      AwfulPhrases {
        nextToken
      }
      conversations {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAwfulPhrase = /* GraphQL */ `
  query GetAwfulPhrase($id: ID!) {
    getAwfulPhrase(id: $id) {
      id
      phrase
      userID
      conversationID
      type
      createdAt
      updatedAt
    }
  }
`;
export const listAwfulPhrases = /* GraphQL */ `
  query ListAwfulPhrases(
    $filter: ModelAwfulPhraseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAwfulPhrases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        phrase
        userID
        conversationID
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const awfulPhrasesByUserID = /* GraphQL */ `
  query AwfulPhrasesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAwfulPhraseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    awfulPhrasesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        phrase
        userID
        conversationID
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const awfulPhrasesByConversationID = /* GraphQL */ `
  query AwfulPhrasesByConversationID(
    $conversationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAwfulPhraseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    awfulPhrasesByConversationID(
      conversationID: $conversationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        phrase
        userID
        conversationID
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const awfulPhrasesByDate = /* GraphQL */ `
  query AwfulPhrasesByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAwfulPhraseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    awfulPhrasesByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        phrase
        userID
        conversationID
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNicePhrase = /* GraphQL */ `
  query GetNicePhrase($id: ID!) {
    getNicePhrase(id: $id) {
      id
      phrase
      createdAt
      updatedAt
    }
  }
`;
export const listNicePhrases = /* GraphQL */ `
  query ListNicePhrases(
    $filter: ModelNicePhraseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNicePhrases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        phrase
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConversationUser = /* GraphQL */ `
  query GetConversationUser($id: ID!) {
    getConversationUser(id: $id) {
      id
      conversationId
      userId
      conversation {
        id
        name
        createdAt
        updatedAt
      }
      user {
        id
        username
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listConversationUsers = /* GraphQL */ `
  query ListConversationUsers(
    $filter: ModelConversationUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversationUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        conversationId
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const conversationUsersByConversationId = /* GraphQL */ `
  query ConversationUsersByConversationId(
    $conversationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConversationUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    conversationUsersByConversationId(
      conversationId: $conversationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        conversationId
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const conversationUsersByUserId = /* GraphQL */ `
  query ConversationUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConversationUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    conversationUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        conversationId
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
