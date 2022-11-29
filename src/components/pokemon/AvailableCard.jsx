import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { coinFormatter } from '../../utils/helpers';

import './AvailableCard.css';

const AvailableCard = ({ card }) => {
  const navigate = useNavigate();
  const [marketPrice, setMarketPrice] = useState('');
  // const [searchTerm, setSearchTerm] = useState("");
useEffect(() => {
  const getMarketPrice = async() => {
    try {
      const response = await fetch(
        `https://api.pokemontcg.io/v2/cards?name=${card.name}`
      );
      const data = await response.json();
      const holofoil = data.data.map( item => (item.tcgplayer.prices.holofoil));
      if(holofoil !== 'undefined') {
        setMarketPrice(holofoil.market)
      }
    } catch (err) {
      console.log(err)
    }
  }
  getMarketPrice();
})

  const handleClick = () => {
    navigate(`/cards/${card.id}`);
  }

  return (
    <div className="available-card" onClick={handleClick}>
      <img src={card.picture} alt={card.name} />
      <h3>{card.name}</h3>
      <div className='price-container'>
        <h4>{coinFormatter((card.price))}</h4>
        {/* {marketPrice} */}
      </div>
      <div>
      </div>
    </div>
  )
}

export default AvailableCard;