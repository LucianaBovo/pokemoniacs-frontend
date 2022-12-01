const BASE_URL = process.env.REACT_APP_BACKEND_BASE_SERVER_URL;

export const getAvailableCards = async (searchTerm) => {
  const response = await fetch(`${BASE_URL}/cards/available?searchTerm=${searchTerm}`);
  const result = await response.json();
  return result;
};

export const getCardById = async (id) => {
  const response = await fetch(`${BASE_URL}/cards/${id}`);
  const result = await response.json();
  return result;
};
