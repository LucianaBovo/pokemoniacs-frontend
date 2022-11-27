import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import AuthBox from "../authorization/AuthBox";
import PlaceAd from "../authorization/PlaceAdButton";
import PokeCategory from "../pokemon/PokeCategory";
// import ChatButton from '../authorization/ChatButton';

import "./Header.css";
const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="header">
      <Link className="header__link" to="/">
        <div className="header__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG"
            width="40px"
            height="40px"
            alt="pokemon-logo"
          />
          <h2>Pokemoniacs</h2>
        </div>
      </Link>
      {/* <ChatButton /> */}
      {isAuthenticated && <PlaceAd />}
      {isAuthenticated && (
        <Link to="/chat">
          <button className="btn btn-outline-danger">Messages</button>
        </Link>
      )}
      <AuthBox />
    </div>
  );
};
export default Header;
