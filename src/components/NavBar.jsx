import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const Navbar = [
    {
      name: "Profile",
      link: "/profile",
    },
    {
      name: "Recruitment",
      link: "/recruitment",
    },
    {
      name: "Training",
      link: "/training",
    },
  ];
  return (
    <>
      <div className="w-full h-auto lg:px-24 md:px-16 sm:px-14 px-12 py-2 shadow-md">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          {/* navbar logo and toggle button */}
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link className="text-3xl text-sky-900 font-semibold tracking-[0.1rem]">
                MediNet
              </Link>

              {/* toggle button section */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border border-transparent 
                focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FaTimes className="text-gray-400 cursor-pointer size={24}" />
                  ) : (
                    <FaBars className="text-gray-400 cursor-pointer size={24}" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* navbar menu item  */}
          <div
            className={`flex justify-between items-center md:block ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="list-none lg:flex md:flex sm:block block gap-x-5 gap-y-16">
              {Navbar.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-sky-600 text-[1.15rem] font-medium tracking-wider hover:text-sky-300 ease-out duration-200 py-6"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
