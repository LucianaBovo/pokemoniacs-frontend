let searchTerm;
//:searchterm (endpoint for getting one card)
//post endpoint to add the card in db
const getTypes = async () => {
  const res = await fetch('https://api.pokemontcg.io/v1/types');
  const result = await res.json();
  console.log(result.data)
  return result.data;
}

export const getCardsFromApi = async () => {
  try {
    const response = await fetch('https://api.pokemontcg.io/v1/cards?pageSize=50');
    const cards = await response.json();
    for (let i = 0; i < cards.length; i++) {
      console.log(cards[i].name)
    }
  }
  catch (err) {
    console.log(err);
  }
}

export const getCardById = async (apiId) => {
  const response = await fetch(`https://api.pokemontcg.io/v2/cards/${apiId}`);
  const card = await response.json();
  return card;
}
