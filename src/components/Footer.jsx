import React from "react";
import { Logo } from "./Navbar/NavHeader";
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
    <div className=" font-[Roboto] w-full">
      <div className=" w-screen bg-[#151515] md:grid grid-cols-3 gap-4 p-6">
        {/* first start*/}
        <div className="text-[#808080]   flex justify-start md:justify-end md:pr-7 pr-0">
          <div className="">
            <Logo />
            <div className="py-5">
              <h1>Kidney Stone & Urology Clinic</h1>
              <p>
                #Jail Road, Anandgarh Colony,
                <br />
                Tilkamanjhi, Bhagalpur,
                <br /> Bihar 812001
              </p>
            </div>
        <Link 
            target="_blank" 
            to="https://www.google.com/maps/place/Dr+Rajan+Kumar+Sinha+(Superspecialist)+%7BM.Ch+-Urology%7D/@25.253668,87.008595,17z/data=!4m6!3m5!1s0x39f036209d394ebb:0xed9af541658ee7f5!8m2!3d25.2536679!4d87.0085947!16s%2Fg%2F11dybcrl_p?hl=en&entry=ttu">
              <button  className="bg-[#1196CC] text-white p-2 rounded-md px-4 hover:opacity-70">
                Get Direction
              </button>
        </Link>

            
            <div className="py-5">
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
        <div className="flex flex-col items-center my-5 md:my-0">
          <div className=" w-[100%]">
            <h1 className="text-white text-xl md:pb-6 pb-2">Useful Links</h1>
            <div className="md:grid md:grid-cols-2 ">
              {list1.map((link,index) => (
                <div key={index} className="pr-5  ">
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
        <div className=" flex flex-col md:pr-20 pr-2">
          <h1 className="text-white md:pb-6 pb-2 text-xl ">Timings</h1>
          <div className="text-[#808080] md:w-[70%] w-[100%]">
            {timings.map((element,index) => (
              <div key={index} className="pr-5 h-auto ">
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
      <div className="bg-[#121212] py-7 px-4 justify-center flex w-full">
        <h1 className="text-[#808080]">
          © Copyright 2023 Kideny Stone Uro Clinic. All Rights Reserved. |
          Powered By{" "}
          <a href="https://thousandways.in" className="hover:opacity-60">
            Thousand Ways
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
