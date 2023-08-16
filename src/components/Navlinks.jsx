import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { links } from "../assets/list";

const Navlinks = () => {
  const [heading, setHeading] = useState(null);

  return (
    <>
      {links.map((link) => (
        <div className=" border-slate-700 shadow-sm md:shadow-none">
          <div className="px-3 py-4 text-left md:cursor-pointer group">
            <h1
              style={{ fontFamily: "Roboto" }}
              onClick={() =>
                heading !== link.name ? setHeading(link.name) : setHeading("")
              }
              className=" text-#888888  hover:text-orange-400 transition-colors duration-300 flex justify-between items-center md:text-[16px] text-lg "
            >
              {link.name}{" "}
              {link.submenu && (
                <span>
                  {heading !== link.name ? <MdExpandMore /> : <MdExpandLess />}
                </span>
              )}
            </h1>
            {link.sublinks && (
              <div>
                <div className="absolute top-14 hidden group-hover:md:block hover:md:block bg-white shadow-md ">
                  <div className="bg-white px-5">
                    {link.sublinks.map((sub) => (
                      <li className="text-sm text-gray-600 my-2.5">
                        <Link
                          className="hover:text-yellow-400 transition-transform transform hover:translate-x-2 font-['Roboto']"
                          to={sub.link}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* mobile submenu */}
          <ul
            className={`${
              heading === link.name ? "md:hidden" : "hidden"
            } list-disc `}
          >
            {link.sublinks &&
              link.sublinks.map((slink) => (
                <div>
                  <li className="text-[15px] pl-5 border-t-1 border-slate-500 shadow-sm py-2 font-[Roboto] ">
                    <Link to={"#"}>{slink.name}</Link>
                  </li>
                </div>
              ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Navlinks;
