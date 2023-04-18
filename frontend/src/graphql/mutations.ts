/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
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
