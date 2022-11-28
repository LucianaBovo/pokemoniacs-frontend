import React from "react";

export const ChatMessage = ({ message }) => {
  return (
    <div>
      <p>
        {message.userName} {message.message}
      </p>
    </div>
  );
};

export default ChatMessage;
