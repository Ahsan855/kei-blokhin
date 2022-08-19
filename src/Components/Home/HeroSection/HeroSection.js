import React from "react";

import hero_img from "../../../Assets/Images/hero_img.png";



const HeroSection = () => {
  return (
    <section className="bg-[black] h-auto pb-[39px] pt-[134px] w-full overflow-x-hidden ">
      <div className=" mx-auto flex justify-center items-center  hero-bg">
        <div className="grid grid-cols-2 justify-center gap-x-[200px]">
          <div className="text-red-200 w-[476px] font-poppins">
            <h2 className="font-semibold text-[#FFFFFF] text-[48px]">
              Welcome to the{" "}
            </h2>
            <h2 className="font-semibold text-[#FFFFFF] text-[48px]">
              NFT Marketplace
            </h2>
            <p>
              Discover Collections, get Equipment, or find assets to build your
              own unique Experiences.
            </p>
            <div>
              <button>Explore</button>
              <button>Create</button>
            </div>
          </div>
          <div>
            <img src={hero_img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
