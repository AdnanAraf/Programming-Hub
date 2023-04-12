import React from "react";
import Categoryitems from "../Catagory/Categoryitems";
import FeaturedData from "../Featured/FeaturedData";

const Profile = () => {
  return (
    <div>
      <div className="bg-purple-50 w-full">
        <div className="lg:flex">
          <div>
            <h1 className="lg:mx-[55px]  lg:text-[50px] font-bold lg:w-[660px] text-[20px] w-[419px] lg:p-[px] p-[50px]">
              One Step <br></br>Closer To Your
              <span className="text-purple-400">Programming Dream Job</span>
            </h1>
            <p className="lg:mx-[100px] lg:my-[24px] lg:w-[519px] lg:text-[18px] font-thin">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <div className="lg:mx-[100px] mx-[100px] lg:h-[65px] lg:w-[170px] h-[50px] w-[150px] bg-purple-400 rounded-lg lg:mt-[] mt-[20px]">
              <button className="lg:px-[28px] lg:py-[19px] px-[28px] py-[14px] font-bold lg:text-[20px] text-white">
                Get Started
              </button>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/yRMSWCM/P3-OLGJ1-copy-1.png"></img>
          </div>
        </div>
      </div>
      {/* <Categoryitems></Categoryitems>
      <FeaturedData /> */}
    </div>
  );
};

export default Profile;
