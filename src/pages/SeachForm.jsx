import React from "react";
import { useState } from "react";
import PokeCard from "../components/PokeCard";
import "./SearchForm.css";
import Layout from "../components/layout/Layout";
import PokeCategory from "../components/pokemon/PokeCategory";
import { ReactComponent as SearchIcon } from '../assets/searchIcon2.svg';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState([]);
  const [category, setCategory] = useState([])

  const getCards = async () => {
    try {
      if (searchTerm !== " ") {
        const response = await fetch(
          `https://api.pokemontcg.io/v1/cards?name=${searchTerm}&types=${category.join(',') || ''}`
        );
        const data = await response.json();
        console.log(data);
        setCards(data.cards);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getCards();
  };

  const handleCategoryChange = e => {
    const { value, checked } = e.target;
    if (checked) {
      setCategory(current => [...current, value]);
    } else {
      setCategory(category.filter(cat => cat !== value));
    }
  };
  return (
    <Layout>
      <div className="searchform">
        <form className="searchform__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control search-home-input"
            placeholder="search for cards..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button type="submit" className="home-search-form-button btn btn-danger">
            <SearchIcon width={24} height={24} />
          </button>
        </form>
        <PokeCategory onInputChange={handleCategoryChange}/>
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