import { useAuth0 } from "@auth0/auth0-react";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import AuthBox from "../authorization/AuthBox";
import PlaceAd from "../authorization/PlaceAdButton";
// eslint-disable-next-line
import PokeCategory from "../pokemon/PokeCategory";
// import ChatButton from '../authorization/ChatButton';
// eslint-disable-next-line
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import "./Header.css";
const Header = () => {
  // eslint-disable-next-line
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <div className="header__logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG"
              width="40px"
              height="40px"
              alt="pokemon-logo"
            />
            <div className="header__logo">
              <h2>Pokemoniacs</h2>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto navbar__desktop">
            <Nav.Link href="/chat">Messages</Nav.Link>
            <Nav.Link href="/searchform"><PlaceAd /></Nav.Link>
            <Nav.Link href="/profile">my Profile</Nav.Link>
            <Nav.Link href="/login"><AuthBox /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
