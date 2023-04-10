import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Jobcatagory from "../Jobcatagory/Jobcatagory";
import Featurejob from "../FeatureJob/Featurejob";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Jobcatagory></Jobcatagory>
      <Featurejob></Featurejob>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
