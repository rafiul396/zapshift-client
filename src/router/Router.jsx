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
import PrivateRoute from "../private/PrivateRoute";
import MainDashboard from "../root/dashborad/MainDashboard";
import Users from "../root/dashborad/Users";
import AdminRoute from "../root/dashborad/admin-route/AdminRoute";

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
        element: <PrivateRoute>
          <BeARider />
        </PrivateRoute>,
        loader: () => fetch('/public/warehouses.json')
      },
      {
        path: "/parcel",
        element: <PrivateRoute>
          <SendPercel />
        </PrivateRoute>,
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
    element: <PrivateRoute>
      <Dashboard />
    </PrivateRoute>,
    children: [
      {
        index: true,
        element: <MainDashboard />
      },
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
      },
      {
        path: "/dashboard/users",
        element: <AdminRoute>
          <Users />
        </AdminRoute>
      }
    ]
  }
]);