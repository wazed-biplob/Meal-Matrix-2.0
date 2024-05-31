import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Homepage from "../pages/Homepage";
import AllSuppliies from "../pages/AllSuppliies";
import SingleProduct from "../pages/SingleProduct";
import Dashboard from "../pages/Dashboard";
import CreateSupply from "../pages/CreateSupply";
import Chart from "../components/Chart";
import Supplies from "../pages/Supplies";
import PrivateRoute from "./PrivateRoute";
import LeaderBoard from "../pages/LeaderBoard";
import Community from "../pages/Community";
import CreateTestimonials from "../pages/CreateTestimonials";
import Volunteer from "../pages/Volunteer";
import AboutUs from "../pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      { path: "supplies", element: <Supplies /> },
      { path: "supplies/:id", element: <SingleProduct /> },
      { path: "leaderboard", element: <LeaderBoard /> },
      { path: "community", element: <Community /> },
      { path: "volunteer", element: <Volunteer /> },
      { path: "about-us", element: <AboutUs /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Chart /> },
      {
        path: "create-supply",
        element: <CreateSupply />,
      },
      { path: "supplies", element: <AllSuppliies /> },
      { path: "create-testimonial", element: <CreateTestimonials /> },
    ],
  },
]);
