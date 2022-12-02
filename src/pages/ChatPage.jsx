import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getChatRooms } from "../api/ChatApi";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import "./ChatPage.css";

function ChatPage() {
  const { getAccessTokenSilently } = useAuth0();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getAccessTokenSilently().then(async (accessToken) => {
      const rooms = await getChatRooms(accessToken);

      setRooms(rooms);
    });
  }, []);

  return (
    <Layout>
      {rooms.map((room, index) => {
        return (
          <>
            <div class="jan" key={`room${index}`}>
              <Link to={`/chat/${room.userId}`}>{room.userName}</Link>
            </div>
          </>
        );
      })}
    </Layout>
  );
}

export default ChatPage;
