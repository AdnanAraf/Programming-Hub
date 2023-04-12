import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Profile from "../Components/Profile/Profile";
import Categoryitems from "../Components/Catagory/Categoryitems";
import FeaturedData from "../Components/Featured/FeaturedData";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Home1 = () => {
  return (
    <div>
      <Profile />
      <Categoryitems />
      <FeaturedData />
    </div>
  );
};

export default Home1;
