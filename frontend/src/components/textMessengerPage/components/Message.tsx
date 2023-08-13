import { Avatar } from "@mui/material";
import { AwfulPhrase, User } from "../../../API";
import { Badge } from "@aws-amplify/ui-react";

interface MessageProps {
  message: AwfulPhrase;
  contextUser: User;
  conversationUsers: User[];
}

export const Message: React.FC<MessageProps> = (props: MessageProps) => {
  const { message, contextUser, conversationUsers } = props;
  const usMessage = message.userID === contextUser.id;
  const colour = usMessage ? "blue" : "grey";
  const justify = usMessage ? "right" : "left";
  const senderName =
    (usMessage
      ? contextUser.username
      : conversationUsers.find((user) => user.id === message.userID)
          ?.username) || "unknown";
  return (
    <div>
      {!usMessage && <p>{senderName}</p>}
      <div style={{ display: "flex", justifyContent: justify }}>
        {!usMessage && <Avatar>ph</Avatar>}
        <Badge>{message.phrase}</Badge>
      </div>
    </div>
  );
};
