import React from "react";
import titleIcon from "../../../Assets/Icons/titleIcon.png";
import contactPhoto from "../../../Assets/Images/Contact.png";
import contactBread from "../../../Assets/Images/_breadcrumbs.png";

const Contact = () => {
  return (
    <section className="bg-[#1D2229]">
      <div className="font-poppins relative">
        <div className="bg-bgImage bg-no-repeat bg-center bg-cover">
          <div className="lg:w-[1200px] lg:container lg:mx-auto mx-auto md:pt-[78px] pt-4 pb-4 pl-4 md:pl-[32px] md:pb-[48px]">
            <img src={titleIcon} alt="icon" />
            <h1 className="text-[#FFFFFF] font-semibold mb-3 md:mb-4  pt-[15px] leading-[48px] text-[32px]  lg:text-[48px] md:text-[40px] ">
              Contact
            </h1>
            <img
              src={contactBread}
              className="sm:h-[23px] sm:w-[131px]"
              alt=""
            />
          </div>
        </div>
        <div className="max-w-[1200px]  mx-auto">
          <div className="grid sm:grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 px-5 md:px-12 pt-24 pb-12">
            <div className="bg-[#1D2229]md:py-8 mt-8 md:mt-0">
              <h2 className="text-white text-4xl mb-6 font-medium title-font">
                Drop Up A Message
              </h2>
              <p className="leading-8 mb-12 text-[20px] text-white">
                Discover Collections, get Equipment, or find assets to build
                your own unique Experiences.
              </p>
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-[20px] text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Type here"
                  className="w-full rounded-full mt-4 bg-[#1D2229] border border-[#3E3E46] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-[20px] text-white">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type here"
                  className="w-full rounded-full mt-4 bg-[#1D2229] border border-[#3E3E46] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="message"
                  className="leading-7 mb-4 text-[20px] text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type here"
                  className="w-full mt-4 bg-[#1D2229] rounded border border-[#3E3E46]  h-[100px] text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="py-[12px] px-[32px] w-full md:w-1/2 text-white rounded-full box-border border-2 border-[#F6D62E] text-[16px] font-semibold leading-[24px]">
                Send Message
              </button>
            </div>
            <div className="bg-[#1D2229] mt-8">
              <img className="img-fluid" src={contactPhoto} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
