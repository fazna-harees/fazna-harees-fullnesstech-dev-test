import { useRoutes } from "react-router-dom";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:category",
      element: <Category />,
    },
  ]);
}
