import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Viewdetails = () => {
  const [identify, setidentify] = useState({});

  const { itemid } = useParams();
  //   const foundData = useLoaderData();
  // console.log(foundData);
  //   console.log(itemid);

  //   for (const product of foundData) {
  //     if (product.id == parseInt(itemid)) {
  //       //   setidentify(product);
  //       console.log(product);
  //       setidentify(product);
  //       console.log(identify);
  //     }
  //   }

  useEffect(() => {
    fetch("/Showfeature.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const founddata = data.find((job) => job.id == itemid);
        console.log(founddata);
        setidentify(founddata);
      });
  }, []);

  //   useEffect(() => {
  //     fetch(data)
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []);

  return <div>{identify.title}</div>;
};

export default Viewdetails;
