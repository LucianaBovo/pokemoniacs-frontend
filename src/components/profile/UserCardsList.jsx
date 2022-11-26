import React from 'react'
import UserCard from './UserCard';


import "./UserCardsList.css";

const UserCardsList = ({ cards }) => {
  if (cards.length === 0) {
    return <div>No cards to sell.</div>
  }

  return (
    <div className="user-card-list">
      {cards.map((card) => {
        return <UserCard card={card} key={card.id} />
      })}
    </div>
  )
}

export default UserCardsList;
