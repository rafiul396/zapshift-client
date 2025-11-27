import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Login from "../pages/login-register/Login";
import Register from "../pages/login-register/Register";
import Home from "../pages/Home";
import Logregisterforgot from "../pages/login-register/Logregisterforgot";
import BeARider from "../pages/beARider/BeARider";
import SendPercel from "../pages/send-percel/SendPercel";
import Dashboard from "../root/dashborad/Dashboard";
import MyParcel from "../root/dashborad/MyParcel";
import PaymentSuc from "../pages/payment/PaymentSuc";
import PaymentCan from "../pages/payment/PaymentCan";
import Coverage from "../pages/map/Coverage";

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
        path: "/parcel",
        element: <SendPercel />,
        loader: () => fetch('/public/warehouses.json')
      },
      {
        path: "/coverage",
        element: <Coverage />
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
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/my-parcels",
        element: <MyParcel />
      },
      {
        path: "/dashboard/payment-success",
        element: <PaymentSuc />
      },
      {
        path: "/dashboard/payment-cancelled",
        element: <PaymentCan />
      }
    ]
  }
]);