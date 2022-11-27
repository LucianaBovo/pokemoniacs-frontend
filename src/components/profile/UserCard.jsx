import React, { useEffect } from 'react';
import { coinFormatter } from '../../utils/helpers';
import * as  UsersApi from '../../api/UsersApi';

import './UserCard.css';

const UserCard = ({ card, removeCard }) => {

  useEffect(() => {
    const userId = window.localStorage.getItem('userId');
    UsersApi.getUserCards(userId);
  }, [])


  return (
    <div className="user-card">
      <img src={card.picture} alt={card.name} />
      <h3>{card.name}</h3>
      <div className='price-container'>
        <h4>{coinFormatter((card.price))}</h4>
      </div>
      <button onClick={() => removeCard(card.id)}>delete card</button>
    </div>
  )
}

export default UserCard;