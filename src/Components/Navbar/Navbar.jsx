import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-purple-50 lg:w-full w-full ">
        <div className=" flex lg:justify-between  ">
          <h1 className="lg:mx-[100px] lg:my-[60px] lg:text-[32px] my-[10px] mx-[50px] font-bold">
            Programming Hub
          </h1>

          <div className="lg:flex lg:m-[50px]  my-[60px] lg:ml-[0px] ml-[-80px]  ">
            {/* <Link className="list-none p-[20px]  cursor-pointer" to="/home">
              Home
            </Link> */}
            <Link
              className="list-none lg:p-[20px]  cursor-pointer"
              to="/statistics"
            >
              Statistics
            </Link>
            <br></br>
            <Link
              className="list-none lg:p-[20px]  cursor-pointer"
              to="/applied"
            >
              Applied Jobs
            </Link>
            <li className="list-none lg:p-[20px]  cursor-pointer" href="#">
              Blog
            </li>
          </div>
          <div className="lg:m-[60px] lg:h-[65px] lg:w-[190px] h-[50px] w-[190px] bg-purple-400 rounded-lg lg:mr-[100px] lg:mt-[px] mt-[150px] lg:ml-[0px] ml-[-150px]">
            <button className="lg:px-[28px] px-[40px] lg:py-[19px] py-[9px] text-[18px]  text-white ">
              Star Applying
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
