import "./App.css";
import SearchForm from "./components/SeachForm";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import AfterLogin from './pages/AfterLogin';
import CardDetail from './pages/CardDetail';
import ChatPage from './pages/ChatPage';
import MainPage from './components/authorization/MainPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/afterlogin",
      element: <AfterLogin />,
    },
    {
      path: "/cards/:id",
      element: <CardDetail />,
    },
    {
      path: "/searchform",
      element: <SearchForm />
    },
    {
      path: '/chat',
      element: <ChatPage />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
