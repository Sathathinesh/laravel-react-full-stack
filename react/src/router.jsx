import { createBrowserRouter } from "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Users from "./views/Users";
import App from "./App";
import NotFound from "./views/NotFound";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/users",
      element: <Users />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]
);

export default router;
