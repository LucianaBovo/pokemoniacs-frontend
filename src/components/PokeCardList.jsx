import React from "react";
import PokeCard from "./PokeCard";

import "./PokeCardList.css";

const PokeCardList = ({ cards }) => {
  if (cards.length === 0) {
    return <div>No cards available.</div>;
  }

  return (
    <div className="poke-card-list">
      {cards.map((card) => {
        return <PokeCard card={card} key={card.id} />;
      })}
    </div>
  );
};

export default PokeCardList;
