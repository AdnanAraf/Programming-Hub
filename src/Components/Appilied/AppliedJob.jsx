import React from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../Utilities/fakedb";
import AppliedJobitem from "../Appliedjobitems/AppliedJobitem";

const AppliedJob = () => {
  const { initialCart, products } = useLoaderData();

  return (
    <div>
      <div className="bg-purple-50 h-[200px] lg:p-[px] p-[70px]">
        <h1 className="text-center font-bold text-[32px]  lg:mt-[px] ">
          Applied Jobs
        </h1>
      </div>
      <div className="lg:m-[40px] lg:mx-[150px] lg:mt-[200px]">
        {initialCart.map((item) => (
          <AppliedJobitem key={products.id} products={item} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
