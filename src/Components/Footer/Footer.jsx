import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-black w-full  lg:h-[400px]  h-[1100px] grid lg:grid-cols-5  px-[100px] py-[130px] ">
        <div>
          <h1 className="text-white text-[30px] font-bold">CareerHub</h1>
          <p className="text-white font-thin my-[20px]">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <img className="my-[20px]" src="/public/Icons/Group 9969.png"></img>
        </div>
        <div className="lg:mx-[100px]">
          <h1 className="text-white font-semibold text-2xl">Company</h1>
          <li className="text-white list-none m-[10px] w-[100px]">About Us</li>
          <li className="text-white list-none m-[10px] w-[100px]">Work</li>
          <li className="text-white list-none m-[10px] w-[100px]">
            Latest News
          </li>
          <li className="text-white list-none m-[10px] w-[100px]">Careers</li>
        </div>
        <div className="lg:mx-[100px]">
          <h1 className="text-white font-bold text-2xl">Product</h1>
          <p className="text-white font-thin  m-[10px] lg:w-[100px]">
            Prototype
          </p>
          <p className="text-white font-thin  m-[10px] lg:w-[100px]">
            Plans & Pricing
          </p>
          <p className="text-white font-thin  m-[10px] lg:w-[100px]">
            Customers
          </p>
          <p className="text-white font-thin  m-[10px] lg:w-[100px]">
            Integrations
          </p>
        </div>
        <div className="lg:mx-[100px]">
          <h1 className="text-white font-bold text-2xl">Support</h1>
          <p className="text-white font-thin m-[10px] lg:w-[100px]">
            Help Desk
          </p>
          <p className="text-white font-thin m-[10px] lg:w-[100px]">Sales</p>
          <p className="text-white font-thin m-[10px] lg:w-[140px]">
            Become a Partner
          </p>
          <p className="text-white font-thin m-[10px] lg:w-[100px]">
            Developers
          </p>
        </div>
        <div className="lg:mx-[100px]">
          <h1 className="text-white font-bold text-2xl ">Contact</h1>
          <p className="text-white font-thin m-[10px] w-[130px]">
            524 Broadway , NYC
          </p>
          <p className="text-white font-thin m-[10px] w-[130px]">
            +1 777 - 978 - 5570
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
