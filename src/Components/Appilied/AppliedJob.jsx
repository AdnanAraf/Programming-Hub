import React from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../Utilities/fakedb";
import AppliedJobitem from "../Appliedjobitems/AppliedJobitem";

const AppliedJob = () => {
  const { initialCart, products } = useLoaderData();

  return (
    <div>
      <h1 className="text-center font-bold text-[32px] bg-purple-50 h-[200px]">
        Applied Jobs
      </h1>
      <div className="m-[40px] mx-[150px] mt-[200px]">
        {initialCart.map((item) => (
          <AppliedJobitem key={products.id} products={item} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
