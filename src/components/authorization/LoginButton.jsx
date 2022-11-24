import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const BASE_URL = process.env.REACT_APP_BACKEND_BASE_SERVER_URL;


const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return <button onClick={() => loginWithRedirect({ redirectUri: `${BASE_URL}/searchform` })}>Log In</button>;
}

export default LoginButton