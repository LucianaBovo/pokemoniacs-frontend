import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';
import AuthBox from '../authorization/AuthBox';
import PlaceAd from '../authorization/PlaceAdButton';
// import ChatButton from '../authorization/ChatButton';

import './Header.css';
const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="header">
        <div><Link to="/"><h2>Pokemoniacs</h2></Link></div>
        {/* <ChatButton /> */}
        {isAuthenticated && <PlaceAd/>}
        <AuthBox />
    </div>
  )
}
export default Header;