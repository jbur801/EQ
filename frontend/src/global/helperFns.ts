import { User } from "../API";
import { AuthenticatedUser } from "../components/Auth/AuthenticatedUserContext";

export function assertUserDefined(
  user: AuthenticatedUser
): asserts user is User {
  if (user === undefined) {
    throw new Error("User is not defined");
  }
}
