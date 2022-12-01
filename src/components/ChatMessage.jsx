import React from "react";

export const ChatMessage = ({ message }) => {
  return (
    <div className="">
      <h4>{message.userName}:</h4>
      <h6>{message.message}</h6>
    </div>
  );
};

export default ChatMessage;
