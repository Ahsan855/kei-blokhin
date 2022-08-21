import React from "react";
import bgIcon from "../../../Assets/Icons/bg-icons.png";
import hero_img from "../../../Assets/Images/hero_img.png";

const HeroSection = () => {
  return (
    <section className=" hero relative bg-[#0e0d0d] h-auto pb-[39px] pt-[16px] md:pt-[30px] lg:pt-[10px] w-full overflow-x-hidden ">
      <div className=" mx-auto ml[16px] md:ml-0 flex md:justify-center md:items-center  hero-bg">
        <div className="grid  md:ml-[16px] md:grid-cols-2 justify-between md:gap-x-[20px] lg:gap-x-[200px]">
          <div className=" ml-[16px] md:ml-0 lg:ml-[170px] font-poppins md:pt-[40px] lg:pt-10">
            <h2 className="font-semibold mt-[23px] md:mt-0 text-[#FFFFFF] text-[32px] md:text-[40px]  lg:text-[48px]">
              Welcome to the{" "}
            </h2>
            <h2 className="font-semibold text-[#FFFFFF] text-[32px] md:text-[40px] lg:text-[48px]">
              NFT Marketplace
            </h2>
            <p
              className=" w-[286px] md:w-full text-[15px] md:text-[20px] pt-[25px] text-[#FFFFFF] font-normal"
              style={{ lineHeight: "30px" }}
            >
              Discover Collections, get Equipment, or find assets to build your
              own unique Experiences.
            </p>
            <div className="mt-[36px] md:pt-0 lg::pt-[60px] flex">
              <button
                style={{ lineHeight: "36px" }}
                className="bg-[#3C84F7] text-[16px] md:text-[24px]  text-[#ffffff] font-semibold font-poppins py-[6px] px-[40px] md:py-[12px] md:px-[48px] rounded-[300px]"
              >
                Explore
              </button>
              <button className=" border-[2px] ml-[16px] border-[#F6D62E] text-[16px] md:text-[24px]  text-[#ffffff] font-semibold font-poppins py-[6px] px-[40px] md:py-[12px] md:px-[48px] rounded-[300px]">
                Create
              </button>
            </div>
          </div>
          <div className="bg-img">
            <img
              src={hero_img}
              className="mx-auto lg:w-[366px] lg:h-[448px] md:w-[248px] w-[228px] h-[279px] md:ml-[69px] md:mt-[20px] lg:mt-0 lg:ml-0 md:h-[304px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <span className=" block md:hidden ">
        <span className="icons-bg1"></span>
        <span className="icons-bg2"></span>
      </span>
    </section>
  );
};

export default HeroSection;
