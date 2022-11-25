import { useAuth0 } from "@auth0/auth0-react";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import ChatSearchUsers from "../components/ChatSearchUsers";
import ChatMessages from "../components/ChatMessages";
import ChatBar from "../components/ChatBar";

const ChatPage = () => {
  const { getAccessTokenSilently, user } = useAuth0();
  const [toUser, setToUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState();

  function joinDirectMessage(u) {
    socket.emit("join_direct_message", u.userId);

    setToUser(u);
  }

  function sendMessage(message) {
    socket.emit("send_message", {
      message,
      fromUser: user.sub,
      toUser: toUser.userId,
    });
  }

  useEffect(() => {
    getAccessTokenSilently().then((accessToken) => {
      if (socket) {
        socket.disconnect();
      }

      setSocket(
        io.connect(process.env.REACT_APP_BACKEND_BASE_SERVER_URL, {
          query: { accessToken },
        })
      );
    });

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("receive_message", (data) => {
        setMessages([...messages, data]);
      });

      socket.on("connect_error", (error) => {
        console.error(error);
      });
    }
  }, [socket, messages]);

  return (
    <>
      <ChatSearchUsers onUserSelect={(userId) => joinDirectMessage(userId)} />

      {toUser?.userId.length && (
        <>
          <ChatBar onSendMessage={(message) => sendMessage(message)} />
          <ChatMessages user={user} toUser={toUser} messages={messages} />
        </>
      )}
    </>
  );
};

export default ChatPage;