import React from "react";
import Layout from "../components/layout/Layout";
import LoginButton from "../components/authorization/LoginButton";

const Login = () => {
  return (
    <Layout>
      <h2 className="home__title">Login</h2>
      <div>
        <LoginButton />
      </div>
    </Layout>
  );
};

export default Login;
