import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../Utilities/fakedb";
import AppliedJobitem from "../Appliedjobitems/AppliedJobitem";
import RemoteItem from "../Remote/RemoteItem";
import Fulltime from "../../Fulltime/Fulltime";
let cnt = 0,
  cnt1 = 0;
const AppliedJob = () => {
  const { initialCart, products } = useLoaderData();

  const [data, setdata] = useState(initialCart);
  const [data1, setdata1] = useState(initialCart);
  const [initialdata, setinitial] = useState(true);

  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filteredJobs1, setFilteredJobs1] = useState([]);

  const handleFilterClick = () => {
    const remoteJobs = data.filter(
      (job) => job.jobtype1 === "Remote" || job.jobtype2 == "Remote"
    );
    setFilteredJobs(remoteJobs);
    setinitial(false);
    cnt = 0;
    cnt1++;
  };

  const handleFilterClick1 = () => {
    const remoteJobs1 = data1.filter(
      (job) => job.jobtype1 === "Onsite" || job.jobtype2 == "Onsite"
    );
    setFilteredJobs1(remoteJobs1);
    setinitial(false);
    cnt++;
    cnt1 = 0;
  };

  return (
    <div>
      <div className="bg-purple-50 h-[200px] lg:p-[px] p-[70px]">
        <h1 className="text-center font-bold text-[32px]  lg:mt-[px] ">
          Applied Jobs
        </h1>
      </div>
      <div className="lg:mx-[1200px] mt-[20px] lg:flex   gap-[20px] rounded-lg">
        <div>
          <div className=" bg-purple-400 rounded-lg lg:m-[px] m-[20px]">
            <button className="h-[50px] w-[100px]" onClick={handleFilterClick}>
              Remote
            </button>
          </div>
        </div>
        <div className=" bg-purple-400 rounded-lg lg:m-[px] m-[20px]">
          <button className="h-[50px] w-[100px]" onClick={handleFilterClick1}>
            Onsite
          </button>
        </div>
      </div>

      <div className="lg:m-[40px] lg:mx-[150px] lg:mt-[200px]">
        {initialdata &&
          initialCart.map((item) => (
            <AppliedJobitem key={products.id} products={item} />
          ))}
      </div>
      {/********************** Remote Item ***************************/}
      <div>
        {cnt == 0 &&
          filteredJobs.map((job, index) => (
            <RemoteItem key={index} job={job}></RemoteItem>
          ))}
      </div>
      {/* ***********************Fultime*****************************8 */}
      <div>
        {cnt1 == 0 &&
          filteredJobs1.map(
            (job1, index) => <Fulltime key={index} job1={job1}></Fulltime>
            // console.log(cnt1, cnt)
          )}
      </div>
    </div>
  );
};

export default AppliedJob;
