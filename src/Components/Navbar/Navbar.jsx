import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-purple-50 h-[]">
        <div className=" flex justify-between  ">
          <h1 className="mx-[100px] my-[60px] text-[32px] font-bold">
            Programming Hub
          </h1>

          <div className="flex m-[50px]">
            <Link className="list-none p-[20px]  cursor-pointer" to="/home">
              Home
            </Link>
            <Link
              className="list-none p-[20px]  cursor-pointer"
              to="/statistics"
            >
              Statistics
            </Link>
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
      </div>
    </div>
  );
};

export default Navbar;
