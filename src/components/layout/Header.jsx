import React from "react";
import AuthBox from "../authorization/AuthBox";
import PlaceAd from "../authorization/PlaceAdButton";
// import ChatButton from "../authorization/ChatButton";

import "./Header.css";

const Header = ({ isAuthenticated }) => {
  return (
    <div className="header">
      <div>
        <h2>Pokemoniacs</h2>
      </div>
      {isAuthenticated && <PlaceAd />}
      <AuthBox />
    </div>
  );
};

export default Header;
