import "./App.css";
import SearchForm from "./components/SeachForm";
// import LoginButton from './components/authorization/LoginButton';
// import LogoutButton from './components/authorization/LogoutButton';
// import Profile from './components/authorization/Profile';
// import MainPage from './components/authorization/MainPage';
import Layout from "./components/layout/Layout";
// import Chat from './components/Chat';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AfterLogin from "./pages/AfterLogin";
import CardDetail from "./pages/CardDetail";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/afterlogin" element={<AfterLogin />} />
            <Route path="/cards/:id" element={<CardDetail />} />
            <Route path="/searchform" element={<SearchForm> </SearchForm>} />
            <Route path="/chat" element={<ChatPage> </ChatPage>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
