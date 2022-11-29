import PlaceAd from "../authorization/PlaceAdButton";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../authorization/LoginButton";
import { useNavigate } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth0();
  const navigate = useNavigate();

  const handleSellCardClick = () => {
    navigate('/searchform');
  };

  const handleSelect = (eventKey) => {
    if (eventKey === 'profile') {
      navigate('/profile');
    } else if (eventKey === 'chat') {
      navigate('/chat');
    } else if (eventKey === 'logout') {
      window.localStorage.removeItem('userId');
      logout();
    }
  }

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
          <Nav.Item>
            <Button onClick={handleSellCardClick}>Sell card</Button>
          </Nav.Item>
          {isAuthenticated
            ? <NavDropdown title={`${user.given_name}`} onSelect={handleSelect}>
              <NavDropdown.Item eventKey="profile">Profile</NavDropdown.Item>
              <NavDropdown.Item eventKey="chat">Messages</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="logout">Logout</NavDropdown.Item>
            </NavDropdown>
            : <div className="unlogged-box">
              <LoginButton />
            </div>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
