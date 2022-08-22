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
          <div className="px-0  xl:container  xl:mx-auto  xl:px-6  xl:py-4">
            <div className="flex  relative z-20 items-center justify-end  xl:justify-center  ">
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

              <div className="flex items-center  xl:justify-end ">
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
                  className="peer-checked:hamburger block absolute left-0 z-30 md:p-6 cursor-pointer  xl:hidden"
                >
                  {open ? (
                    <img
                      className=" xl:mt-[26px] w-[15px] h-[15px] ml-[20px]   xl:ml-0   xl:mb-[36px]"
                      src={close}
                      alt=""
                    />
                  ) : (
                    <img
                      className=" xl:mt-[26px] w-[24px] h-[19px] ml-[20px]   xl:ml-0   xl:mb-[36px]"
                      src={hamburger}
                      alt=""
                    />
                  )}
                </label>

                <div className="peer-checked:translate-x-0 fixed inset-0 w-[300px]  translate-x-[-100%]  shadow-lg transition duration-500   xl:w-auto  xl:static  xl:shadow-none  xl:translate-x-0 z-[-1000]  xl:z-0">
                  <div className="flex flex-col h-full justify-between pl-[24px]  xl:pl-0  xl:items-center  bg-[#15181D] border-r-[2px] border-r-[#51505B]  xl:border-0  xl:bg-transparent    xl:flex-row">
                    <ul className="px-6 pt-32 text-gray-700 space-y-8   md:px-6  xl:space-y-0  xl:flex xl:space-x-12  xl:pt-0 ">
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
