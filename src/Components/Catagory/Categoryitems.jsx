import React, { useEffect, useState } from "react";

const Categoryitems = () => {
  const [catagory, setcatagory] = useState([]);

  useEffect(() => {
    fetch("JobCatagoryfakedata.json")
      .then((res) => res.json())
      .then((data) => setcatagory(data));
  }, []);

  return (
    <div>
      <div className="text-center ">
        <h1 className="font-semibold mt-[130px] lg:text-[48px] text-[24px]">
          Job Category List
        </h1>
        <div>
          <p className="font-thin">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
      </div>
      <div>
        <div className="grid lg:grid-cols-4 grid-cols-1 my-[32px] lg:mx-[100px] mx-[60px] cursor-pointer gap-[25px]">
          {catagory.map((item) => (
            <div className="h-[220px] w-[243px] bg-purple-50 rounded-lg">
              <img
                className="h-[80px] w-[80px] mt-[40px] mx-[40px] rounded-lg"
                src={item.img}
              ></img>
              <h1 className="mx-[40px] font-bold mt-[10px]">{item.title}</h1>
              <p className="mx-[40px] mt-[10px] text-gray-400">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categoryitems;
