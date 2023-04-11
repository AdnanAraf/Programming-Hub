import React from "react";
import Categoryitems from "../Catagory/Categoryitems";
import FeaturedData from "../Featured/FeaturedData";

const Profile = () => {
  return (
    <div>
      <div className="bg-purple-50">
        <div className="flex">
          <div>
            <h1 className="mx-[100px] text-[50px] font-bold w-[660px]">
              One Step <br></br>Closer To Your{" "}
              <span className="text-purple-400">Programming Dream Job</span>
            </h1>
            <p className="mx-[100px] my-[24px] w-[519px] text-[18px] font-thin">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <div className="mx-[100px] h-[65px] w-[170px] bg-purple-400 rounded-lg ">
              <button className="px-[28px] py-[19px] font-bold text-[20px] text-white">
                Get Started
              </button>
            </div>
          </div>
          <div>
            <img src="/public/All Images/P3OLGJ1 copy 1.png"></img>
          </div>
        </div>
      </div>
      {/* <Categoryitems></Categoryitems>
      <FeaturedData /> */}
    </div>
  );
};

export default Profile;
