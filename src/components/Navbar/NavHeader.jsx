import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import logo from "../../assets/logo_d.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowWidth = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleWindowWidth);
    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, [windowWidth]);
  return (
    <nav className="bg-white w-screen drop-shadow-md sticky top-0 z-20">
      <div className="flex items-center font-medium md:justify-around justify-between px-5 py-2">
        {/* logo and text */}
        <Logo />
        <div>
          {/* mobile menu show button */}
          <div
            className="md:hidden text-3xl hover:cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <AiOutlineMenu />
          </div>
          {/* desktop nav */}
          <ul className="md:flex hidden  items-center gap-8 font-[Poppins]">
            <li className="md:text-lg text-2xl ">
              <Link
                className="hover:text-yellow-400 transition-transform transform hover:translate-x-2 flex"
                to={"/"}
              >
                <img
                  className="w-[30px] h-[30px] self-center "
                  src={logo}
                  alt="home-"
                />
                <p className="pl-1">Home</p>
              </Link>
            </li>
            <Navlinks setOpen={setOpen} open={open} />
          </ul>
          {/* mobile nav */}

          <div className="absolute z-100 top-[70px] left-0 w-screen shadow-md bg-white  px-[2rem] ">
            <ul
              className={`list ${
                open ? "max-h-[800px]" : "max-h-0"
              } overflow-hidden transition-max-height duration-500 ease-in-out`}
            >
              <li className="text-lg pt-1 px-3 shadow-inner-md mt-3">
                <Link
                  className="hover:text-yellow-400 text-l flex  items-center shadow-sm pb-2 "
                  to={"/"}
                  onClick={() => setOpen(!open)}
                >
                  <AiFillHome />
                  <p className="pl-2">Home</p>
                </Link>
              </li>
              <Navlinks setOpen={setOpen} open={open} />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

export const Logo = () => (
  <div className="flex">
    <Link className="flex" to={"/"}>
      <div className="w-[60px] h-[60px]">
        <img src={logo} alt="reload" />
      </div>
      <div className="  font-[Roboto] flex  md:flex-col md:items-start items-center  justify-start md:text-sm ">
        <h1 className="pl-1 font-sans">Kidney </h1>
        <h1 className="pl-1"> Stone</h1>
        <h1 className="pl-1"> Uro Clinic</h1>
      </div>
    </Link>
  </div>
);
