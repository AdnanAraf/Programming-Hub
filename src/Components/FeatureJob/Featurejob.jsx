import React, { useEffect, useState } from "react";
import ShowFeatureJob from "../ShowFeature/ShowFeatureJob";
import ViewDetails from "../ViewDetails/ViewDetails";

const Featurejob = () => {
  const [feature, setfeature] = useState([]);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    fetch("FeaturedData.json")
      .then((res) => res.json())
      .then((data) => setfeature(data));
  }, []);
  // const handleShowAll = () => {
  //   setShowAll(false);
  // };
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-[48px] mt-[100px]">
          Featured Jobs
        </h1>
        <p className="text-center font-semibold text-gray-400 mt-[16px]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 mx-[100px] mt-[62px]">
        {feature.slice(0, showAll ? 4 : 6).map((item) => (
          <ShowFeatureJob key={item.id} item={item}
          ></ShowFeatureJob>
        ))}
      </div>
      {showAll ? (
        <>
          <div
            onClick={() => setShowAll(!showAll)}
            className="mx-[650px] h-[50px] w-[150px] bg-purple-500 my-[50px] rounded-lg"
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
            className="mx-[650px] h-[50px] w-[150px] bg-purple-500 my-[50px] rounded-lg"
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

export default Featurejob;
