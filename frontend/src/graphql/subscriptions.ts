/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onCreateConversation(filter: $filter) {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onUpdateConversation(filter: $filter) {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onDeleteConversation(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateAwfulPhrase = /* GraphQL */ `
  subscription OnCreateAwfulPhrase(
    $filter: ModelSubscriptionAwfulPhraseFilterInput
  ) {
    onCreateAwfulPhrase(filter: $filter) {
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
export const onUpdateAwfulPhrase = /* GraphQL */ `
  subscription OnUpdateAwfulPhrase(
    $filter: ModelSubscriptionAwfulPhraseFilterInput
  ) {
    onUpdateAwfulPhrase(filter: $filter) {
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
export const onDeleteAwfulPhrase = /* GraphQL */ `
  subscription OnDeleteAwfulPhrase(
    $filter: ModelSubscriptionAwfulPhraseFilterInput
  ) {
    onDeleteAwfulPhrase(filter: $filter) {
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
export const onCreateNicePhrase = /* GraphQL */ `
  subscription OnCreateNicePhrase(
    $filter: ModelSubscriptionNicePhraseFilterInput
  ) {
    onCreateNicePhrase(filter: $filter) {
      id
      phrase
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNicePhrase = /* GraphQL */ `
  subscription OnUpdateNicePhrase(
    $filter: ModelSubscriptionNicePhraseFilterInput
  ) {
    onUpdateNicePhrase(filter: $filter) {
      id
      phrase
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNicePhrase = /* GraphQL */ `
  subscription OnDeleteNicePhrase(
    $filter: ModelSubscriptionNicePhraseFilterInput
  ) {
    onDeleteNicePhrase(filter: $filter) {
      id
      phrase
      createdAt
      updatedAt
    }
  }
`;
export const onCreateConversationUser = /* GraphQL */ `
  subscription OnCreateConversationUser(
    $filter: ModelSubscriptionConversationUserFilterInput
  ) {
    onCreateConversationUser(filter: $filter) {
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
export const onUpdateConversationUser = /* GraphQL */ `
  subscription OnUpdateConversationUser(
    $filter: ModelSubscriptionConversationUserFilterInput
  ) {
    onUpdateConversationUser(filter: $filter) {
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
export const onDeleteConversationUser = /* GraphQL */ `
  subscription OnDeleteConversationUser(
    $filter: ModelSubscriptionConversationUserFilterInput
  ) {
    onDeleteConversationUser(filter: $filter) {
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
