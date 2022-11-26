import React from "react";
import LoginButton from "../components/authorization/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <div>
      <h2 className="home__title">Login</h2>
      <div>
        <LoginButton />
      </div>
    </div>
  );
};

export default Login;
