import { createBrowserRouter } from "react-router";
import Root from "../root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
]);