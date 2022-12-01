import React from "react";
import ChatMessage from "./ChatMessage";
import Col from "react-bootstrap/Col";

const ChatMessages = ({ messages }) => {
  return (
    <Col sm={{ span: 5, offset: 4 }} lg={{ span: 4, offset: 4 }}>
      <div className="container">
        <div className="row">
          {messages.map((message, index) => {
            return (
              <div
                className="bg-image hover-overlay shadow-sm p-1 mb-3 w-75 bg-light rounded"
                key={`message-${index}`}
              >
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(249, 49, 84, 0.6)" }}
                ></div>
                <ChatMessage message={message} />
              </div>
            );
          })}
        </div>
      </div>
    </Col>
  );
};

export default ChatMessages;
