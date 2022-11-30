import React from 'react';
import { useNavigate } from "react-router-dom";
import { coinFormatter } from '../../utils/helpers';

import './AvailableCard.css';

const AvailableCard = ({ card }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/cards/${card.id}`);
  }

  return (
    <div className="available-card-container" onClick={handleClick}>
      <div className="available-card-information">
        <img className="available-card-image" src={card.picture} alt={card.name} />
        <h4 className="h4-card-name">{card.name}</h4>
        <div className="available-card-price-container">
          <h5 className="h5-price">{coinFormatter((card.price))}</h5>
        </div>
      </div>
    </div>
  )
}

export default AvailableCard;