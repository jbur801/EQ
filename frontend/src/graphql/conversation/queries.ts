export const getUserConversationInfo = /* GraphQL */ `
  query getUserConversationInfo($id: ID!) {
    getUser(id: $id) {
      username
      id
      conversations(sortDirection: DESC, limit: 10) {
        items {
          conversation {
            AwfulPhrases(sortDirection: DESC, limit: 1) {
              items {
                phrase
                createdAt
                userID
              }
            }
            name
            id
            Users {
              items {
                user {
                  username
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;
