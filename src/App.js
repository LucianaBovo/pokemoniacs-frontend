import "./App.css";
import SearchForm from "./components/SeachForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AfterLogin from "./pages/AfterLogin";
import CardDetail from "./pages/CardDetail";
import ChatPage from "./pages/ChatPage";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/afterlogin" element={<AfterLogin />} />
            <Route path="/cards/:id" element={<CardDetail />} />
            <Route path="/searchform" element={<SearchForm />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
