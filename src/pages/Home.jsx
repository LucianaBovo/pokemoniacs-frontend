import React, { useEffect, useState } from "react";
import AvailableCardList from "../components/pokemon/AvailableCardList";
import * as CardsApi from "../api/CardsApi";
import { ReactComponent as SearchIcon } from '../assets/searchIcon2.svg';
import Layout from "../components/layout/Layout";

import "./Home.css";

const Home = () => {
  const [availableCards, setAvailableCards] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [matchedcards, setMatchedCards] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchAvailableCards();
  }

  const fetchAvailableCards = async () => {
    const result = await CardsApi.getAvailableCards(searchTerm);
    if (!result.error) setAvailableCards(result);
  };

  useEffect(() => {
    fetchAvailableCards();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <Layout>
      <div className="home__search-bar">
        <form className="home-search-form" onSubmit={handleSearch}>
          <input type="text" className="form-control search-home-input" placeholder="Search..." onChange={handleInputChange} value={searchTerm}></input>
          <button type="submit" className="home-search-form-button btn btn-danger"><SearchIcon width={24} height={24} /></button>
        </form>
      </div>
      <AvailableCardList cards={availableCards} />
    </Layout>
  );
};

export default Home;
