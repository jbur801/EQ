/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
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
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
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
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAwfulPhrase = /* GraphQL */ `
  mutation CreateAwfulPhrase(
    $input: CreateAwfulPhraseInput!
    $condition: ModelAwfulPhraseConditionInput
  ) {
    createAwfulPhrase(input: $input, condition: $condition) {
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
export const updateAwfulPhrase = /* GraphQL */ `
  mutation UpdateAwfulPhrase(
    $input: UpdateAwfulPhraseInput!
    $condition: ModelAwfulPhraseConditionInput
  ) {
    updateAwfulPhrase(input: $input, condition: $condition) {
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
export const deleteAwfulPhrase = /* GraphQL */ `
  mutation DeleteAwfulPhrase(
    $input: DeleteAwfulPhraseInput!
    $condition: ModelAwfulPhraseConditionInput
  ) {
    deleteAwfulPhrase(input: $input, condition: $condition) {
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
export const createNicePhrase = /* GraphQL */ `
  mutation CreateNicePhrase(
    $input: CreateNicePhraseInput!
    $condition: ModelNicePhraseConditionInput
  ) {
    createNicePhrase(input: $input, condition: $condition) {
      id
      phrase
      createdAt
      updatedAt
    }
  }
`;
export const updateNicePhrase = /* GraphQL */ `
  mutation UpdateNicePhrase(
    $input: UpdateNicePhraseInput!
    $condition: ModelNicePhraseConditionInput
  ) {
    updateNicePhrase(input: $input, condition: $condition) {
      id
      phrase
      createdAt
      updatedAt
    }
  }
`;
export const deleteNicePhrase = /* GraphQL */ `
  mutation DeleteNicePhrase(
    $input: DeleteNicePhraseInput!
    $condition: ModelNicePhraseConditionInput
  ) {
    deleteNicePhrase(input: $input, condition: $condition) {
      id
      phrase
      createdAt
      updatedAt
    }
  }
`;
export const createConversationUser = /* GraphQL */ `
  mutation CreateConversationUser(
    $input: CreateConversationUserInput!
    $condition: ModelConversationUserConditionInput
  ) {
    createConversationUser(input: $input, condition: $condition) {
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
export const updateConversationUser = /* GraphQL */ `
  mutation UpdateConversationUser(
    $input: UpdateConversationUserInput!
    $condition: ModelConversationUserConditionInput
  ) {
    updateConversationUser(input: $input, condition: $condition) {
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
export const deleteConversationUser = /* GraphQL */ `
  mutation DeleteConversationUser(
    $input: DeleteConversationUserInput!
    $condition: ModelConversationUserConditionInput
  ) {
    deleteConversationUser(input: $input, condition: $condition) {
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
