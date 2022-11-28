import React from 'react';
import { useNavigate } from "react-router-dom";
import { coinFormatter } from '../../utils/helpers';

import './UserCard.css';

const UserCard = ({ card }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cards/${card.id}`);
  }

  return (
    <div className="user-card" onClick={handleClick}>
      <img src={card.picture} alt={card.name} />
      <h3>{card.name}</h3>
      <div className='price-container'>
        <h4>{coinFormatter((card.price))}</h4>
      </div>
      <button>delete card</button>
    </div>
  )
}

export default UserCard;