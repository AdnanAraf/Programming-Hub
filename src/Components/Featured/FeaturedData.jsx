import React, { useEffect, useState } from "react";
import DataFeature from "../ShowData/DataFeature";

const FeaturedData = () => {
  const [feature, setfeature] = useState([]);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    fetch("Showfeature.json")
      .then((res) => res.json())
      .then((data) => setfeature(data));
  }, []);
  // const handleShowAll = () => {
  //   setShowAll(false);
  // };
  return (
    <div>
      <div>
        <h1 className="text-center font-bold lg:text-[48px] text-[24px] mt-[100px]">
          Featured Jobs
        </h1>
        <p className="text-center font-semibold text-gray-400 mt-[16px]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:mx-[100px]  mt-[62px]">
        {feature.slice(0, showAll ? 4 : 6).map((item) => (
          <DataFeature key={item.id} item={item}></DataFeature>
        ))}
      </div>
      {showAll ? (
        <>
          <div
            onClick={() => setShowAll(!showAll)}
            className="lg:mx-[650px] mx-[100px] h-[50px] w-[150px] bg-purple-500 my-[50px] rounded-lg"
          >
            <button className="px-[31px] py-[12px] text-white font-semibold">
              See All Jobs
            </button>
          </div>
        </>
      ) : (
        <>
          <div
            onClick={() => setShowAll(!showAll)}
            className="lg:mx-[650px]   mx-[100px] h-[50px] w-[150px] bg-purple-500 my-[50px] rounded-lg"
          >
            <button className="px-[39px] py-[12px] text-white font-bold">
              See Less
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedData;
