import React from 'react'
import UserCard from './UserCard';

import "./UserCardsList.css";

const UserCardsList = ({ cards, removeCard }) => {
  if (cards.length === 0) {
    return <div>No cards to sell.</div>
  }

  return (
    <div>
      <hr />
      <section className="user-card-list">
        {cards.map((card) => {
          return <UserCard
            card={card}
            key={card.id}
            onRemoveCard={removeCard} />
        })}
      </section>
    </div>
  )
}

export default UserCardsList;
