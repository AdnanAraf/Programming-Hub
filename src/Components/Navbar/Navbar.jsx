import React from "react";

const Navbar = () => {
  return (
    <div className="bg-purple-50 h-[]">
      <div className=" flex justify-between  ">
        <h1 className="mx-[100px] my-[60px] text-[32px] font-bold">
          Programming Hub
        </h1>

        <div className="flex m-[50px]">
          <li className="list-none p-[20px]  cursor-pointer" href="#">
            Home
          </li>
          <li className="list-none p-[20px]  cursor-pointer" href="#">
            Statistics
          </li>
          <li className="list-none p-[20px]  cursor-pointer" href="#">
            Applied Jobs
          </li>
          <li className="list-none p-[20px]  cursor-pointer" href="#">
            Blog
          </li>
        </div>
        <div className="m-[60px] h-[65px] w-[190px] bg-purple-400 rounded-lg mr-[100px]">
          <button className="px-[28px] py-[19px] text-[20px] font-semibold text-white ">
            Star Applying
          </button>
        </div>
      </div>
      <div>
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
    </div>
  );
};

export default Navbar;
