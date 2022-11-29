import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Footer.css';

const Footer = () => {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <div class="footer-basic">
      <footer>
        <ul class="list-inline">
          <li class="list-inline-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG" width="20px" height="20px" alt="pokemon-logo"></img>
            <a href="/">Pokemoniacs</a>
          </li>
        </ul>
        <hr></hr>
        <p class="copyright">Tech Savvy © {year}</p>
      </footer>
    </div>
  )
}

export default Footer;