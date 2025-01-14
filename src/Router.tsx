import { createBrowserRouter } from "react-router-dom";
import Splash from "pages/login/Splah";
import Login from "./pages/login/Login";
import Auth from "./pages/login/Auth";
import SignUp from "pages/login/SignUp";
import Agree from "pages/login/Agree";
import Feed from "pages/feed/Feed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/auth",
    element: <Auth />,
  },
  {
  path: "/login/auth/phone-number",
  element: <SignUp />,
},
{
  path: "/agree",
  element: <Agree />,
},
{
  path: "/feed",
  element: <Feed />,
},
]);

export default router;
