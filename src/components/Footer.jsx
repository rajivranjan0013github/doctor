import React from "react";
import { Logo } from "./NavHeader";
import { IoCall } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { links } from "../assets/list";
import { Link } from "react-router-dom";

const Footer = () => {
  const list1 = links[1].sublinks;

  const timings = [
    { name: "Monday", time: "10 am - 6pm" },
    { name: "Tuesday", time: "10 am - 6pm" },
    { name: "Wednesday", time: "10 am - 6pm" },
    { name: "Thrusday", time: "10 am - 6pm" },
    { name: "Friday", time: "10 am - 6pm" },
    { name: "Saturday", time: "By enquiry" },
    { name: "Sunday", time: "By enquiry" },
  ];

  return (
    <div className="font-[Roboto] w-screen bg-[#151515] md:grid grid-cols-3 gap-4 p-6">
      {/* first start*/}
      <div className="text-[#808080]  flex justify-center md:justify-end ">
        <div className="">
          <Logo />
          <div className="text-sm">
            <h1>Kidney Stone & Urology Clinic</h1>
            <p>
              #Jail Road, Anandgarh Colony,
              <br />
              Tilkamanjhi, Bhagalpur,
              <br /> Bihar 812001
            </p>
          </div>
          <button className="bg-[#1196CC] text-white p-2 rounded-md px-4">
            Get Direction
          </button>
          <div>
            <div className="flex">
              <IoCall className="self-center" />
              <p className="px-2"> +91 97099 93104</p>
            </div>
            <div className="flex">
              <AiOutlineMail className="self-center" />
              <p className="px-2">rajan_rims@yahoo.co.in</p>
            </div>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="flex flex-col items-center">
        <div className=" w-[80%]">
          <h1 className="text-white text-xl pb-6">Useful Links</h1>
          <div className="grid grid-cols-2 ">
            {list1.map((link) => (
              <div className="pr-5  ">
                <Link className="text-[#808080] hover:opacity-60" to={"#"}>
                  {link.name}
                </Link>
                <div className="border-b-[1px] border-[#808080] border-dashed pt-2.5 mb-2.5"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* third part */}
      <div className=" flex flex-col pr-20 ">
        <h1 className="text-white pb-6 text-xl">Timings</h1>
        <div className="text-[#808080] w-[70%]">
          {timings.map((element) => (
            <div className="pr-5 h-auto ">
              <div className="flex justify-between">
                <p>{element.name}</p>
                <p>{element.time}</p>
              </div>
              <div className="border-b-[1px] border-[#808080] border-dashed pt-2.5 mb-2.5"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
