import React from "react";
import Button from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";

const BASE_URL = process.env.REACT_APP_FRONTEND_BASE_SERVER_URL;

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button 
      variant="secondary"
      onClick={() =>
        loginWithRedirect({
          redirectUri: `${BASE_URL}/afterlogin`,
        })
      }
    >
      Sign In
    </Button>
  );
};

export default LoginButton;
