import React, { useState } from "react";
import { BsWhatsapp, BsFillCalendarWeekFill } from "react-icons/bs";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";
const SideNavbar = () => {
  const [open, setOpen] = useState(null);
  const handleToggler = (val) => {
    setOpen(val);
  };
  return (
    <div className="fixed z-20 md:flex flex-col items-end justify-end	top-[30%] right-0 px-2 hidden">
      <Link target="_blank" to="https://wa.me/9709993104">
        <div
          className={` my-2 gap-2  rounded-full bg-green-500 text-white cursor-pointer flex justify-center  ${open === 0 ? "py-1" : "py-0"}  ${
            open === 0 ? "w-[150px]" : "w-8"
          }`}
          onMouseEnter={() => handleToggler(0)}
          onMouseLeave={() => setOpen(null)}
        >
          <BsWhatsapp size={"2rem"} />
          {open === 0 && <span className="pt-1">Whatsapp</span>}
        </div>
      </Link>

      <Link
        target="_blank"
        to="https://www.google.com/maps/place/Dr+Rajan+Kumar+Sinha+(Superspecialist)+%7BM.Ch+-Urology%7D/@25.253668,87.008595,17z/data=!4m6!3m5!1s0x39f036209d394ebb:0xed9af541658ee7f5!8m2!3d25.2536679!4d87.0085947!16s%2Fg%2F11dybcrl_p?hl=en&entry=ttu"
      >
        <div
          className={`my-2 gap-2  rounded-full bg-blue-700 justify-center   text-white cursor-pointer flex  ${open === 1 ? "py-1" : "py-0"}   ${
            open === 1 ? "w-[150px]" : "w-8"
          }`}
          onMouseEnter={() => handleToggler(1)}
          onMouseLeave={() => setOpen(null)}
        >
          <FaLocationCrosshairs size={"2rem"} />
          {open === 1 && <span className="pt-1">Direction</span>}
        </div>
      </Link>
      <Link to={'/appointment'} >
      <div
        className={` gap-2  my-2 rounded-full bg-zinc-100 hover:bg-zinc-200  text-stone-700  justify-center  cursor-pointer flex  ${open === 2 ? "py-1" : "py-0"}   ${
          open === 2 ? "w-[200px]" : "w-8"
        }`}
        onMouseEnter={() => handleToggler(2)}
        onMouseLeave={() => setOpen(null)}
      >
        <BsFillCalendarWeekFill size={"2rem"} />
        {open === 2 && <span className="pt-1">Book Appointment</span>}
      </div>
      
      </Link>

      

      <Link target="_blank" to="tel:9709993104">
        <div
          className={`my-2 gap-2  rounded-full bg-white hover:bg-zinc-200 text-blue-500 justify-center cursor-pointer flex  ${open === 3 ? "py-1" : "py-0"}  ${
            open === 3 ? "w-[150px]" : "w-8"
          }`}
          onMouseEnter={() => handleToggler(3)}
          onMouseLeave={() => setOpen(null)}
        >
          <BiSolidPhoneCall size={"2rem"} />
          {open === 3 && <span className="pt-1">Call us Now</span>}
        </div>
      </Link>
    </div>
  );
};

export default SideNavbar;
