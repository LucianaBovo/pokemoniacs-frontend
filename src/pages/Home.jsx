import React, { useEffect, useState } from "react";
import AvailableCardList from "../components/pokemon/AvailableCardList";
import * as CardsApi from "../api/CardsApi";
import { ReactComponent as SearchIcon } from './assets/searchIcon2.svg';

import "./Home.css";
import Layout from "../components/layout/Layout";

const Home = () => {
  const [availableCards, setAvailableCards] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [matchedcards, setMatchedCards] = useState([]);

  useEffect(() => {
    const fetchAvailableCards = async () => {
      const result = await CardsApi.getAvailableCards();
      if (!result.error) setAvailableCards(result);
    };
    fetchAvailableCards();
  }, []);
  const handleClick = (e) => {
const names = availableCards.map(card => (card.name))
for(let i =0; i< names.length ; i++) {
  // console.log(names[i])
 let areEqual = searchTerm.toUpperCase() === names[i].toUpperCase();
if(areEqual){
  setAvailableCards(availableCards.filter(card => card.name === searchTerm))
return matchedcards;
}
}
  }
  handleClick()
  return (
    <Layout>
      <div className="home__search-bar">
        <form className="home-search-form" onSubmit={handleClick}>
          <input type="text" className="form-control search-home-input" placeholder="Search..." value={searchTerm}
          onChange = {e => setSearchTerm(e.target.value)}
          ></input>
          <button type="submit"
           className="home-search-form-button btn btn-danger"><SearchIcon width={24} height={24} />
          </button>
        </form>
      </div>
      <h2 className="home__title">Check out our Available Cards!</h2>
      <div>
        <AvailableCardList cards={availableCards} />
      </div>
    </Layout>
  );
};

export default Home;
