import React from "react";

const ShowFeatureJob = ({ item }) => {
  console.log(item);
  const { img, title, company, salary, location, jobtype1, jobtype2 } = item;
  return (
    <div>
      <div></div>
      <div className="h-[472px] w-[600px] border-2 rounded-lg">
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
          <div className="flex mx-[40px]">
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

          <p className="mx-[40px] text-gray-500">{salary}</p>
        </div>
        <div className="mt-[24px] mx-[40px] h-[39px] w-[127px] bg-purple-500 rounded-lg">
          <button className="px-[18px] py-[6px] font-semibold text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowFeatureJob;