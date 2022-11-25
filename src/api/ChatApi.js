const BASE_URL = process.env.REACT_APP_BACKEND_BASE_SERVER_URL;

export const getChatRooms = async (accessToken) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const response = await fetch(`${BASE_URL}/chat-rooms`, options);

  return response.json();
};

export const getChatRoomMessages = async (userId, accessToken) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const response = await fetch(`${BASE_URL}/messages/${userId}`, options);

  return response.json();
};
