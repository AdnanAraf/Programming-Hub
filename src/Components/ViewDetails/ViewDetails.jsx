import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../Utilities/fakedb";

const Viewdetails = () => {
  const [identify, setidentify] = useState({});

  const Loader = useLoaderData();
  // console.log(Loader);

  const { itemid } = useParams();

  useEffect(() => {
    fetch("/Showfeature.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const founddata = data.find((job) => job.id == itemid);
        // console.log(founddata);
        setidentify(founddata);
      });
  }, []);

  const HandleaddtoClick = (job) => {
    addToDb(job.id);
  };

  return (
    <div>
      <div>
        <div className="flex">
          <div>
            <h1 className="w-[872px] mx-[100px] mt-[130px]">
              <span className="font-bold">Job Description:</span>Job
              Description: A UI/UX (User Interface/User Experience) designer is
              responsible for designing and creating engaging and effective
              interfaces for software and web applications. This includes
              designing the layout, visual design, and interactivity of the user
              interface.
            </h1>
            <h1 className="w-[872px] mx-[100px] mt-[24px]">
              <span className="font-bold">Job Responsibility:</span>{" "}
              Collaborating with cross-functional teams: UI/UX designers often
              work closely with other teams, including product management,
              engineering, and marketing, to ensure that the user interface is
              aligned with business and technical requirements. You will need to
              be able to effectively communicate your design ideas and gather
              feedback from other team members.
            </h1>
            <div>
              <h1 className="my-[24px] mx-[100px]">
                <span className="font-bold">Educational Requirements:</span>
                <br></br>
                Bachelor degree to complete any reputational university.
              </h1>
              <div className="my-[24px] mx-[100px]">
                <span className="font-bold">Experiences:</span>
                <br></br>
                <h1>2-3 Years in this field.</h1>
              </div>
            </div>
          </div>
          {/**********Job Details ***********************/}
          <div>
            <div className="w-[364px] h-[461px] bg-purple-100 mt-[130px] rounded-lg">
              <div className=" p-[24px]">
                <h1 className="font-bold ">Job Details</h1>
                <hr className="w-[314px] h-[2px] border-1 bg-gray-400 mt-[24px]"></hr>
                <div className="flex mt-[24px]">
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
                  <h1 className=" text-gray-700">
                    <span className="font-bold text-black">Salary:</span>
                    {identify.salary} (Per Month)
                  </h1>
                </div>
                <div className="flex my-[24px]">
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
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>

                  <h1 className="text-gray-700">
                    <span className="font-bold text-black">Job Title: </span>
                    {identify.title}
                  </h1>
                </div>
              </div>

              {/**************************    CONTRACT Information *********** */}
              <div className="">
                <h1 className="font-bold mx-[30px]">Contract Information</h1>
                <hr className="w-[314px] h-[2px] border-1 bg-gray-400 mt-[24px] mx-[30px]"></hr>
                <div className="flex p-[10px] mx-[20px] mt-[24px]">
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>

                  {/********************************* Mobile *******************************/}

                  <h1>
                    <span className="font-bold">Mobile: </span> {identify.Phone}
                  </h1>
                </div>
              </div>

              <div className="flex p-[10px] mx-[20px]">
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
                    d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                  />
                </svg>
                {/********************************* Email *******************************/}
                <h1>
                  <span className="font-bold">Email: </span>
                  {identify.email}
                </h1>
              </div>
              <div className="flex mx-[20px] p-[10px]">
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

                {/********************************* Address *******************************/}
                <h1>
                  <span className="font-bold">Address: </span>
                  {identify.address}
                </h1>
              </div>
            </div>
            <div className="w-[364px] h-[65px] bg-purple-700 rounded-lg px-[131px] py-[19px] mt-[10px]">
              <button
                onClick={() => HandleaddtoClick(identify)}
                className="font-semibold text-white"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewdetails;
