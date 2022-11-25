import { useState } from "react";

function ChatBar({ onSendMessage }) {
  const [message, setMessage] = useState("");

  function sendMessage(e) {
    e.preventDefault();

    onSendMessage(message);
  }
  return (
    <div className="container">
      <div className="row">
        <form className="was-validated" onSubmit={(e) => sendMessage(e)}>
          <div className="col-12 mb-2">
            <label htmlFor="sendMessage" className="form-label fw-bold">
              Send Message:
            </label>
            <input
              type="text"
              className="form-control"
              id="sendMessage"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Send message"
              minLength="1"
              required
            />
          </div>
          <div className="text-center">
            <button
              id="sendDirectMessage"
              className="btn btn-primary"
              type="submit"
            >
              Send direct message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatBar;