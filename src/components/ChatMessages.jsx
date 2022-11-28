import React from "react";
import ChatMessage from "./ChatMessage";

const ChatMessages = ({ messages }) => {
  return (
    <div className="container">
      <div className="row">
        {messages.map((message, index) => {
          return (
            <div key={`message-${index}`}>
              <ChatMessage message={message} />
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatMessages;
