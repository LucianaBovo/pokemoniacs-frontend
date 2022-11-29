const BASE_URL = process.env.REACT_APP_BACKEND_BASE_SERVER_URL;

export const createUserIfNotExist = async (user) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      sub: user.sub
    })
  };
  const response = await fetch(`${BASE_URL}/users`, options);
  const result = await response.json();

  if (!result.success) {
    return 'Some error occurred. Please Try again.';
  }

  return result.userId;
}

export const createCardForUser = async (userId, card, condition, price) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: card.name,
      picture: card.imageUrl,
      condition: condition,
      price: price,
      types: card.types,
      series: card.series
    })
  };
  const response = await fetch(`${BASE_URL}/users/${userId}/cards`, options);
  const result = await response.json();

  if (!result.success) {
    return 'Some error occurred. Please Try again.';
  }

  return 'Card was added successfully.';
}

export const deleteCardForUser = async (cardId, userId) => {
  const response = await fetch(`${BASE_URL}/users/${userId}/cards/${cardId}`, {
    method: 'DELETE',
  });
  const result = await response.json();

  if (!result.success) {
    return 'Some error occurred. Please Try again.';
  }

  return 'Card was deleted successfully.';
}

export const getUserCards = async (userId) => {
  const response = await fetch(`${BASE_URL}/users/${userId}/cards`);
  const result = await response.json();
  return result;
}

export const updateCardForUser = async (userId, cardId, status, condition, price) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      status: status,
      condition: condition,
      price: price
    })
  };
  const response = await fetch(`${BASE_URL}/users/${userId}/cards/${cardId}`, options);
  const result = await response.json();

  if (!result.success) {
    return 'Some error occurred. Please Try again.';
  }

  return result.updatedCard;

}