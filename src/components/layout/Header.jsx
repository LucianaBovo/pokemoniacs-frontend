import AuthBox from "../authorization/AuthBox";
import PlaceAd from "../authorization/PlaceAdButton";
import { Nav, Navbar } from "react-bootstrap";

import "./Header.css";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <div className="header__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG"
            width="40px"
            height="40px"
            alt="pokemon-logo"
          />
          <div className="header__text">
            <h2>Pokemoniacs</h2>
          </div>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto navbar__desktop">
          <Nav.Link href="/chat">Messages</Nav.Link>
          <Nav.Link href="/searchform">
            <PlaceAd />
          </Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/login">
            <AuthBox />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
