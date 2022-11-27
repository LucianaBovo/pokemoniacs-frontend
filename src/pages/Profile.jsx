import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import UserCardsList from '../components/profile/UserCardsList';
import * as UsersApi from "../api/UsersApi";
import Layout from '../components/layout/Layout';

import "./Profile.css";

const Profile = () => {
  const { user } = useAuth0();
  const [userCards, setUserCards] = useState([]);

  const fetchUserCards = async () => {
    const userId = window.localStorage.getItem('userId');
    if (userId) {
      const result = await UsersApi.getUserCards(userId);
      if (!result.error) setUserCards(result);
    }
  }
  useEffect(() => {
    fetchUserCards();
  }, []);

  const removeCard = async (cardId) => {
    console.log('clicado', cardId)
    const userId = window.localStorage.getItem('userId');
    await UsersApi.deleteCardForUser(cardId, userId);
    await fetchUserCards();
  }

  if (!user) {
    return null;
  }

  return (
    <Layout>
      <div className='profile-picture-container'>
      <img className="profile-picture" src={user.picture} alt={user.name} />
      </div>
      <h2> {user.name} </h2>
      {/* <p> {user.email}</p> */}
      <UserCardsList removeCard={removeCard} cards={userCards} />
    </Layout>
  )
}

export default Profile
