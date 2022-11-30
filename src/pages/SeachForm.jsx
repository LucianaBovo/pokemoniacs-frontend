import React from "react";
import { useState } from "react";
import PokeCard from "../components/PokeCard";
import "./SearchForm.css";
import Layout from "../components/layout/Layout";
import PokeCategory from "../components/pokemon/PokeCategory";
import { ReactComponent as SearchIcon } from '../assets/searchIcon2.svg';
import { MultiSelect } from "react-multi-select-component";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState([])
  const [type, setType] = useState([]);
  const types = [
    "Colorless",
    "Darkness",
    "Dragon",
    "Fairy",
    "Fighting",
    "Fire",
    "Grass",
    "Lightning",
    "Metal",
    "Psychic",
    "Water"
  ];

  const options = types.map(item => ({ label: item, value: item }));

  const getCardsByName = async () => {
    try {
      if (searchTerm !== " ") {
        const response = await fetch(
          `https://api.pokemontcg.io/v1/cards?name=${searchTerm}&types=${type || ''}`
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
    await getCardsByName();
  };

  const filterOptions = (options, filter) => {
    // if (!filter) {
    //   return options;
    // }
    return options.filter(({ value }) => value === filter);
  };

  return (
    <Layout>
      <div className="searchform">
        <form className="searchform__form" onSubmit={handleSubmit}>
          <div>
            <MultiSelect
              options={options}
              value={categories}
              onChange={setCategories}
              labelledBy="Select"
            />
          </div>
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