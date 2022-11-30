import "./App.css";
import SearchForm from "./pages/SeachForm";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import AfterLogin from "./pages/AfterLogin";
import CardDetail from "./pages/CardDetail";
import ChatRoomPage from "./pages/ChatRoomPage";
import ChatPage from "./pages/ChatPage";
import Profile from "./pages/Profile";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./pages/Login";

const PrivateRoute = ({ pageComponent }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [isAuthenticated, isLoading]);

  return pageComponent;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/afterlogin" element={<AfterLogin />} />
          <Route path="/cards/:id" element={<CardDetail />} />

          {/* Private Routes */}
          <Route
            path="/searchform"
            element={<PrivateRoute pageComponent={<SearchForm />} />}
          />
          <Route
            path="/chat"
            element={<PrivateRoute pageComponent={<ChatPage />} />}
          />
          <Route path="/chat/:userId" element={<ChatRoomPage />} />
          <Route
            path="/profile"
            element={<PrivateRoute pageComponent={<Profile />} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
