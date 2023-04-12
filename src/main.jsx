import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Back from "./Components/Back/Back";
import Viewdetails from "./Components/ViewDetails/Viewdetails";
import Profile from "./Components/Profile/Profile";
import AppliedJob from "./Components/Appilied/AppliedJob";
import { productsAndCartData } from "./Cart&Product/CartandProduct";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Back />,
      },
      {
        path: "/",
        element: <Profile />,
      },
      {
        path: "applied",
        element: <AppliedJob />,
        loader: productsAndCartData,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "item/:itemid",
        element: <Viewdetails />,
        loader: ({ params }) => fetch(`/Showfeature.json`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
