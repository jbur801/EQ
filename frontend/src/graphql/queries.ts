/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
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
