import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Jobcatagory from "../Jobcatagory/Jobcatagory";
import Featurejob from "../FeatureJob/Featurejob";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Jobcatagory></Jobcatagory>
      <Featurejob></Featurejob>
      <Footer></Footer>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
