import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Success = () => {
  return (
    <div className="container py-[90px] px-3">
      <div className="flex flex-col justify-center items-center font-[Roboto]">
        <div className="h-[55px] w-[60px] flex ">
          <BsFillPatchCheckFill className="text-blue-400  success" />
        </div>
        <h1 className="font-semibold md:text-3xl text-xl  ">
          Thank you for your appoinment
        </h1>
        <h1 className="text-sm">We will contact with you soon.</h1>
      </div>
    </div>
  );
};

export default Success;
