import React from "react";

export const ChatMessage = ({ message }) => {
  return (
    <div>
      <img src={message.fromUser.picture} alt="message" />: <h3>{message.fromUser.name}</h3>
      <p>{message.message}</p>
    </div>
  );
};

export default ChatMessage;