import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Jobcatagory from "../../Jobcatagory/Jobcatagory";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Jobcatagory></Jobcatagory>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
