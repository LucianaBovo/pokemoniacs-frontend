import React from "react";
import ChatMessage from "./ChatMessages";

const ChatMessages = ({ user, toUser, messages }) => {
  return (
    <div className="container">
      <div className="row">
        <h1>Messages to {toUser.name}</h1>
        {messages.map((message, index) => {
          return (
            <div key={`message-${index}`}>
              <ChatMessage user={user} toUser={toUser} message={message} />
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatMessages;