import { Avatar, Stack } from "@mui/material";
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
  const colour = usMessage ? "#078ddb" : "#a1b7bf";
  const justify = usMessage ? "right" : "left";
  const align = usMessage ? "end" : "start";
  const senderName =
    (usMessage
      ? contextUser.username
      : conversationUsers.find((user) => user.id === message.userID)
          ?.username) || "unknown";
  return (
    <Stack
      width={"100%"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={align}
    >
      {!usMessage && <p>{senderName}</p>}
      <div style={{ display: "flex" }}>
        {!usMessage && <Avatar>ph</Avatar>}
        <Badge color={"white"} backgroundColor={colour}>
          {message.phrase}
        </Badge>
      </div>
    </Stack>
  );
};
