import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import AvailableCardList from "../components/pokemon/AvailableCardList";
import * as CardsApi from "../api/CardsApi";

import "./Home.css";
 
const Home = () => {
  const [availableCards, setAvailableCards] = useState([]);

  useEffect(() => {
    const fetchAvailableCards = async () => {
      const result = await CardsApi.getAvailableCards();
      if (!result.error) setAvailableCards(result);
    };

    fetchAvailableCards();
  }, []);

  return (
    <Layout>
      <h2 className="home__title">Check out our Available Cards!</h2>
      <div>
        <AvailableCardList cards={availableCards} />
      </div>
    </Layout>
  );
};

export default Home;
