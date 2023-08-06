/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNoteInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelNoteConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelNoteConditionInput | null > | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  not?: ModelNoteConditionInput | null,
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

export type Note = {
  __typename: "Note",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNoteInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteNoteInput = {
  id: string,
};

export type CreateAwfulPhraseInput = {
  id?: string | null,
  phrase: string,
};

export type ModelAwfulPhraseConditionInput = {
  phrase?: ModelStringInput | null,
  and?: Array< ModelAwfulPhraseConditionInput | null > | null,
  or?: Array< ModelAwfulPhraseConditionInput | null > | null,
  not?: ModelAwfulPhraseConditionInput | null,
};

export type AwfulPhrase = {
  __typename: "AwfulPhrase",
  id: string,
  phrase: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAwfulPhraseInput = {
  id: string,
  phrase?: string | null,
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

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
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

export type ModelNoteConnection = {
  __typename: "ModelNoteConnection",
  items:  Array<Note | null >,
  nextToken?: string | null,
};

export type ModelAwfulPhraseFilterInput = {
  id?: ModelIDInput | null,
  phrase?: ModelStringInput | null,
  and?: Array< ModelAwfulPhraseFilterInput | null > | null,
  or?: Array< ModelAwfulPhraseFilterInput | null > | null,
  not?: ModelAwfulPhraseFilterInput | null,
};

export type ModelAwfulPhraseConnection = {
  __typename: "ModelAwfulPhraseConnection",
  items:  Array<AwfulPhrase | null >,
  nextToken?: string | null,
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

export type ModelSubscriptionNoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionNoteFilterInput | null > | null,
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

export type ModelSubscriptionAwfulPhraseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  phrase?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAwfulPhraseFilterInput | null > | null,
  or?: Array< ModelSubscriptionAwfulPhraseFilterInput | null > | null,
};

export type ModelSubscriptionNicePhraseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  phrase?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNicePhraseFilterInput | null > | null,
  or?: Array< ModelSubscriptionNicePhraseFilterInput | null > | null,
};

export type CreateNoteMutationVariables = {
  input: CreateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type CreateNoteMutation = {
  createNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type UpdateNoteMutation = {
  updateNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type DeleteNoteMutation = {
  deleteNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
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

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      name: string,
      description?: string | null,
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

export type OnCreateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
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
