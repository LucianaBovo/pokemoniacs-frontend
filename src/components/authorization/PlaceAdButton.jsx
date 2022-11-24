import React, {useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import * as UsersApi from '../../api/UsersApi';
import { useNavigate } from "react-router-dom";


const BASE_URL = process.env.REACT_APP_BACKEND_BASE_SERVER_URL;

const PlaceAdButton = () => {
    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated } = useAuth0();


    const navigate = useNavigate();
    
    useEffect(() => {
      const checkUser = async () => {
        if (isAuthenticated) {
          const userId = await UsersApi.createUserIfNotExist(user);
          window.localStorage.setItem('userId', userId);
          navigate('/');
        }
      }
  
      checkUser();
    }, [isAuthenticated, user, navigate]);

    return <button onClick={() => loginWithRedirect({ redirectUri: `${BASE_URL}/searchform` })}>Sell Card</button>;
}

export default PlaceAdButton