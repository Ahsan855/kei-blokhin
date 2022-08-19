import React from "react";

import hero_img from "../../../Assets/Images/hero_img.png";

const HeroSection = () => {
  return (
    <section className=" hero bg-[#0e0d0d] h-auto pb-[39px] pt-[38px] w-full overflow-x-hidden ">
      <div className=" mx-auto flex justify-center items-center  hero-bg">
        <div className="grid grid-cols-2 justify-between gap-x-[200px]">
          <div className=" ml-[170px] font-poppins mx-auto pt-10">
            <h2 className="font-semibold text-[#FFFFFF] text-[40px] w-[] lg:text-[48px]">
              Welcome to the{" "}
            </h2>
            <h2 className="font-semibold text-[#FFFFFF] text-[40px]  lg:text-[48px]">
              NFT Marketplace
            </h2>
            <p
              className="text-[20px] pt-[25px] text-[#FFFFFF] font-normal"
              style={{ lineHeight: "30px" }}
            >
              Discover Collections, get Equipment, or find assets to build your
              own unique Experiences.
            </p>
            <div className="pt-[60px]">
              <button
                style={{ lineHeight: "36px" }}
                className="bg-[#3C84F7] text-[24px]  text-[#ffffff] font-semibold font-poppins py-[12px] px-[48px] rounded-[300px]"
              >
                Explore
              </button>
              <button className=" border-[2px] ml-[16px] border-[#F6D62E] text-[24px]  text-[#ffffff] font-semibold font-poppins py-[12px] px-[48px] rounded-[300px]">
                Create
              </button>
            </div>
          </div>
          <div>
            <img src={hero_img} className="w-[366px] h-[448px]" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
