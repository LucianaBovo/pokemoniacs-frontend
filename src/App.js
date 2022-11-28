import "./App.css";
import SearchForm from "./components/SeachForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AfterLogin from "./pages/AfterLogin";
import CardDetail from "./pages/CardDetail";
import ChatRoomPage from "./pages/ChatRoomPage";
import ChatPage from "./pages/ChatPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/afterlogin" element={<AfterLogin />} />
            <Route path="/cards/:id" element={<CardDetail />} />
            <Route path="/searchform" element={<SearchForm />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/chat/:userId" element={<ChatRoomPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
