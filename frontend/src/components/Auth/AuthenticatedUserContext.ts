import { createContext } from "react";
import { User } from "../../API";

export type AuthenticatedUser = User | undefined;

const dummyUser = {
  __typename: "User",
  username: "none",
  createdAt: "never",
  updatedAt: "never",
  id: "no",
};
export const AuthenticatedUserContext =
  createContext<AuthenticatedUser>(undefined);
