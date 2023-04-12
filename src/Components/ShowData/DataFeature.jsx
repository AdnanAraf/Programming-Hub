import React from "react";
import { Link } from "react-router-dom";

const DataFeature = ({ item }) => {
  //   console.log(item);
  //   return <div></div>;
  const { img, title, company, salary, location, jobtype1, jobtype2, id } =
    item;
  return (
    <div>
      <div></div>
      <div className="lg:h-[472px] lg:w-[600px] h-[495px] border-2 rounded-lg">
        <img
          className="h-[130px] w-[260px] m-[40px] rounded-lg"
          src={img}
        ></img>
        <h1 className="mx-[40px] p-[5px] font-bold text-gray-500 text-[24px]">
          {title}
        </h1>
        <h1 className="mx-[40px] p-[5px] text-gray-500">{company}</h1>
        <div className="flex gap-[25px] mx-[40px] p-[10px] ">
          <h1 className="border-2 h-[40px] w-[109px] border-purple-200 px-[19px] py-[7px] font-semibold text-purple-600">
            {jobtype1}
          </h1>
          <h1 className="border-2 h-[40px] w-[109px] border-purple-200 text-purple-600 font-semibold px-[19px] py-[7px]">
            {jobtype2}
          </h1>
        </div>
        <div className="flex mt-[10px]">
          <div className="flex mx-[40px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p className="">{location}</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mt-[5px] "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <p className=" text-gray-500">{salary}</p>
        </div>
        <div className="mt-[24px] mx-[40px] h-[39px] w-[127px] bg-purple-500 rounded-lg">
          <Link to={`/item/${id}`}>
            <button className="px-[18px] py-[6px] font-semibold text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataFeature;
