import { useAuth0 } from "@auth0/auth0-react";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import ChatSearchUsers from "../components/ChatSearchUsers";
import ChatMessages from "../components/ChatMessages";
import ChatBar from "../components/ChatBar";
import { useParams } from "react-router-dom";
import { getChatRoomMessages } from "../api/ChatApi";
import Layout from "../components/layout/Layout";

const ChatRoomPage = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState();
  const { userId } = useParams();

  function sendMessage(message) {
    socket.emit("send_message", {
      message,
      userId: userId,
    });
  }

  useEffect(() => {
    getAccessTokenSilently().then(async (accessToken) => {
      if (socket) {
        socket.disconnect();
      }

      setSocket(
        io(process.env.REACT_APP_BACKEND_BASE_SERVER_URL, {
          query: { accessToken },
          // This will make it work with PM2
          transports: ["websocket"],
        })
      );

      if (userId) {
        setMessages(await getChatRoomMessages(userId, accessToken));
      }
    });

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    function addSocketFunctions() {
      socket.on("receive_message", (data) => {
        console.log(data);
        setMessages([...messages, data]);
      });

      socket.on("connect_error", (error) => {
        console.error(error);
      });
    }

    if (socket) {
      addSocketFunctions();
    }
  }, [socket, messages, userId]);

  return (
    <Layout>
      <ChatBar onSendMessage={(message) => sendMessage(message)} />
      <hr />
      <ChatMessages messages={messages} />
    </Layout>
  );
};

export default ChatRoomPage;
