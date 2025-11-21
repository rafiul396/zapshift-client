import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Login from "../pages/login-register/Login";
import Register from "../pages/login-register/Register";
import Home from "../pages/Home";
import Logregisterforgot from "../pages/login-register/Logregisterforgot";
import BeARider from "../pages/beARider/BeARider";
import SendPercel from "../pages/send-percel/SendPercel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/rider",
        element: <BeARider />
      },
      {
        path: "/percel",
        element: <SendPercel />
      }
    ]
  },
  {
    path: "/user",
    element: <Logregisterforgot />,
    children: [
      {
        path: "/user/login",
        element: <Login />
      },
      {
        path: "/user/register",
        element: <Register />
      }
    ]
  }
]);