import React from "react";
import { useState } from "react";
import PokeCard from "./PokeCard";
import "./SearchForm.css";
import Layout from "./layout/Layout";
const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    try {
      if (searchTerm !== "") {
        const response = await fetch(
          `https://api.pokemontcg.io/v1/cards?name=${searchTerm}`
        );
        const data = await response.json();
        console.log(data);
        setCards(data.cards);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getCards();
  };
  return (
    <Layout>
      <div>
        <form className="app__searchForm" onSubmit={handleSubmit}>
          <input
            className="text-input"
            type="text-input"
            placeholder="search for cards"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input className="app__submit" type="submit" value="Search" />
        </form>
        <div className="app__cards">
          {cards.map((card, index) => {
            return <PokeCard card={card} key={index} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default SearchForm;
