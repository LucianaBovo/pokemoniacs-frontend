import React, { useEffect } from "react";
import { useState } from "react";
import PokeCard from "../components/PokeCard";
import PokeCardList from "../components/PokeCardList";
import "./SearchForm.css";
import Layout from "../components/layout/Layout";
import { ReactComponent as SearchIcon } from '../assets/searchIcon2.svg';
import { MultiSelect } from "react-multi-select-component";
import { POKEMON_TYPES } from "../utils/constants";
import Pagination from "../components/Pagination";
const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  const selectOptions = POKEMON_TYPES.map(item => ({ label: item, value: item }));
  const [selectedCategories, setCategories] = useState(selectOptions);

  const fetchCards = async () => {
    try {
      let types = '';
      if (selectedCategories.length < POKEMON_TYPES.length) {
        types = selectedCategories.map((item) => item.value).join(',');
      }
      const response = await fetch(`https://api.pokemontcg.io/v1/cards?name=${searchTerm}&types=${types}&page=${page}&pageSize=12`);
      const data = await response.json();
      setCards(data.cards);
      setLastPage(100)
     
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  useEffect(() => {
    fetchCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchCards();
  };

  return (
    <Layout>
      <div className="searchform">
        <form className="searchform__form" onSubmit={handleSubmit}>
          <MultiSelect
            options={selectOptions}
            value={selectedCategories}
            onChange={setCategories}
            labelledBy="Select"
            className="types-select"
          />
          <input
            type="text"
            className="form-control search-home-input"
            placeholder="search for cards..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1)}}
            value={searchTerm}
          />
          <button type="submit" className="home-search-form-button btn btn-danger">
            <SearchIcon width={24} height={24} />
          </button>
        </form>
        <PokeCardList cards={cards} />
        {/* <Pagination page={page} lastPage={lastPage} setPage={setPage} /> */}
      </div>
    </Layout>
  );
};

export default SearchForm;
