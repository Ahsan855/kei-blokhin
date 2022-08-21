import React from "react";
import contactPhoto from "../../../Assets/Images/Contact.png";

const Contact = () => {
  return (
    <div>
      <section className="bg-[#1D2229] body-font relative">
        <div className="container px-5 py-24 mx-auto flex flex-col lg:flex-row">
          <div className="lg:w-1/3 w-full bg-[#1D2229] flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
            <h2 className="text-white text-4xl mb-6 font-medium title-font">
              Drop Up A Message
            </h2>
            <p className="leading-8 mb-12 text-[20px] text-white">
              Discover Collections, get Equipment, or find assets to build your
              own unique Experiences.
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
          <div className="lg:w-1/2 w-full bg-[#1D2229] flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
            <img src={contactPhoto} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
