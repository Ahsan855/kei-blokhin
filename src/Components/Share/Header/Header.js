import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Icons/logo.png";
import hamburger from "../../../Assets/Icons/hamburgerIcons.png";
import close from "../../../Assets/Icons/Close.png";

const Header = () => {
  let [open, setOpen] = useState(false);
  return (
    <header className="bg-[#000000] header font-poppins   border-b-[#51505B] border-b-[2px] overflow-x-hidden">
      <div>
        <div className="relative z-20 custom-shadow max-w-[1300px] mx-auto">
          <div className="px-0 lg:container lg:mx-auto lg:px-6 lg:py-4">
            <div className="flex  relative z-20 items-center justify-end lg:justify-center  ">
              <div className="relative z-20 flex items-center ">
                <Link to="/">
                  <img
                    src={logo}
                    alt="logo"
                    className=" my-[24px] mr-[42px] md:mr-0 w-[56px] h-[22px] md:w-[96px] md:h-[41px] "
                  />
                </Link>
                <form className="search-box">
                  <input
                    className="search-box"
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
                  className="peer-checked:hamburger block absolute left-0 z-30 md:p-6 cursor-pointer lg:hidden"
                >
                  {open ? (
                    <img
                      className="lg:mt-[26px] w-[15px] h-[15px] ml-[20px]  lg:ml-0  lg:mb-[36px]"
                      src={close}
                      alt=""
                    />
                  ) : (
                    <img
                      className="lg:mt-[26px] w-[24px] h-[19px] ml-[20px]  lg:ml-0  lg:mb-[36px]"
                      src={hamburger}
                      alt=""
                    />
                  )}
                </label>

                <div className="peer-checked:translate-x-0 fixed inset-0 w-[300px]  translate-x-[-100%]  shadow-lg transition duration-500  lg:w-auto lg:static lg:shadow-none lg:translate-x-0 z-[-1000] lg:z-0">
                  <div className="flex flex-col h-full justify-between pl-[24px] lg:pl-0 lg:items-center  bg-[#15181D] border-r-[2px] border-r-[#51505B] lg:border-0 lg:bg-transparent   lg:flex-row">
                    <ul className="px-6 pt-32 text-gray-700 space-y-8   md:px-6 lg:space-y-0 lg:flex xl:space-x-12 lg:pt-0 ">
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

                    <div className=" py-[24px]  xxl:ml-[124px]">
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
