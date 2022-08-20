import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Icons/logo.png";
import hamburger from "../../../Assets/Icons/hamburgerIcons.png";
import close from "../../../Assets/Icons/Close.png";

const Header = () => {
  let [open, setOpen] = useState(false);
  return (
    <header className="bg-[#15181D] header py-[30px] lg:py-0  border-b-[#51505B] border-b-[2px] overflow-x-hidden">
      <div>
        <div className="relative z-20 custom-shadow max-w-[1200px] mx-auto">
          <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
            <div className="flex  relative z-20 items-center justify-end lg:justify-between  ">
              <div className="relative z-20 flex items-center gap-3">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[76px] h-[31px] md:w-[100px] md:h-[42px] lg:w-[96px] lg:h-[32px] "
                />
                <form class="search-box">
                  <input
                    class="search-box"
                    type="search"
                    placeholder="Search"
                  />
                </form>
              </div>

              <div className="flex items-center lg:justify-end ">
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  className="peer"
                  hidden
                />
                <label
                  onClick={() => setOpen(!open)}
                  htmlFor="hamburger"
                  className="peer-checked:hamburger block absolute left-0 z-30 p-6 cursor-pointer lg:hidden"
                >
                  {open ? (
                    <img className="mt-[26px]  mb-[36px]" src={close} alt="" />
                  ) : (
                    <img
                      className="mt-[26px]   mb-[36px]"
                      src={hamburger}
                      alt=""
                    />
                  )}
                </label>

                <div className="peer-checked:translate-x-0 fixed inset-0 w-[250px]  translate-x-[-100%]  shadow-lg transition duration-500  lg:w-auto lg:static lg:shadow-none lg:translate-x-0 z-[-1000] lg:z-0">
                  <div className="flex flex-col h-full justify-between pl-[24px] lg:pl-0 lg:items-center  bg-[#15181D] border-r-[2px] border-r-[#51505B] lg:border-0 lg:bg-transparent   lg:flex-row">
                    <ul className="px-6 pt-32 text-gray-700 space-y-8   md:px-6 lg:space-y-0 lg:flex xl:space-x-12 lg:pt-0 lg:gap-2">
                      <li>
                        <Link
                          to="contact"
                          className="transition-all duration-300  cursor-pointer font-medium text-xl text-[#FFFFFF] font-poppins "
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="author"
                          className=" transition-all duration-300 cursor-pointer font-medium text-xl text-[#FFFFFF] font-poppins"
                        >
                          Author
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="explore"
                          className="transition-all duration-300 cursor-pointer font-medium text-xl text-[#FFFFFF] font-poppins"
                        >
                          Explore
                        </Link>
                      </li>
                    </ul>

                    <div className=" py-[24px]">
                      <Link
                        to="contact"
                        className="font-poppins rounded-[300px] py-[12px] px-[24px] font-semibold text-base text-[#FFFFFF] bg-[#3C84F7]"
                      >
                        Wallet Connection
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
