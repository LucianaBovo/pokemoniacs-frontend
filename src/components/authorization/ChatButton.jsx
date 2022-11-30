import React from "react";
import { Link } from "react-router-dom";

const ChatButton = ({ userId }) => {
  return (
    <Link to={`/chat/${userId}`}>
      <button className="btn btn-outline-danger">Contact seller</button>
    </Link>
  );
};

export default ChatButton;
