import React from "react";
import LoginButton from "../components/authorization/LoginButton";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h3 className="login__title">Welcome to Pokemoniacs!</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG"
          className="logo-img"
          width="60px"
          height="60px"
          alt="pokemon-logo"
        />
        <LoginButton />
      </div>
    </div>
  );
};

export default Login;
