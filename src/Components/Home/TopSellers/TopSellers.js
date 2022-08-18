import React from "react";
import verify from "../../../Assets/Icons/Group 46.png";
import squire from "../../../Assets/Icons/Group 59.png";
import seller1 from "../../../Assets/Images/Rectangle 26 (4).png";
import seller2 from "../../../Assets/Images/Rectangle 26 (6).png";
import seller3 from "../../../Assets/Images/Rectangle 26 (2) (2).png";
import seller4 from "../../../Assets/Images/Rectangle 26 (3).png";

const TopSellers = () => {
  return (
    <div className="bg-[#1E2329] overflow-x-hidden">
      <div className="lg:max-w-[1200px] overflow-hidden lg:h-[360px] mx-auto">
        <div className="flex justify-between pt-20 pb-20">
          <div>
            <img src={squire} alt="" />
            <h1 className="text-white text-[32px] font-semibold">
              Top Sellers
            </h1>
          </div>

          <button className="py-3 px-8 text-white border border-[#F6D62E] text-md rounded-full font-semibold">
            Explore More
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative w-[282px] h-[96px] mx-auto flex border-[#3E3E46] border-[1px] rounded-2xl">
            <div className="my-4 ml-4">
              <span>
                <img src={verify} className="ml-14" alt="" />
              </span>
              <div className="grid w-32 h-32">
                <img className="mt-[-15px]" src={seller1} alt="" />
              </div>
            </div>
            <div className="ml-[-40px]">
              <h1 className="mt-5 text-xl mb-1 font-[500] text-white">
                Andy Hermawan
              </h1>
              <p className="text-[#BCBCBC] text-[15px] mb-5">
                <span className="text-white">345</span> NFTs sold
              </p>
            </div>
          </div>
          <div className="relative w-[282px] h-[96px] mx-auto flex border-[#3E3E46] border-[1px] rounded-2xl">
            <div className="my-4 ml-4">
              <span>
                <img src={verify} className="ml-14" alt="" />
              </span>
              <div className="grid w-32 h-32">
                <img className="mt-[-15px]" src={seller2} alt="" />
              </div>
            </div>
            <div className="ml-[-40px]">
              <h1 className="mt-5 text-xl mb-1 font-[500] text-white">
                Alexander Shat...
              </h1>
              <p className="text-[#BCBCBC] text-[15px] mb-5">
                <span className="text-white">202</span> NFTs sold
              </p>
            </div>
          </div>
          <div className="relative w-[282px] h-[96px] mx-auto flex border-[#3E3E46] border-[1px] rounded-2xl">
            <div className="my-4 ml-4">
              <span>
                <img src={verify} className="ml-14" alt="" />
              </span>
              <div className="grid w-32 h-32">
                <img className="mt-[-15px]" src={seller3} alt="" />
              </div>
            </div>
            <div className="ml-[-40px]">
              <h1 className="mt-5 text-xl mb-1 font-[500] text-white">
                Milad Fakurian
              </h1>
              <p className="text-[#BCBCBC] text-[15px] mb-5">
                <span className="text-white">157</span> NFTs sold
              </p>
            </div>
          </div>
          <div className="relative w-[282px] h-[96px] mx-auto flex border-[#3E3E46] border-[1px] rounded-2xl">
            <div className="my-4 ml-4">
              <span>
                <img src={verify} className="ml-14" alt="" />
              </span>
              <div className="grid w-32 h-32">
                <img className="mt-[-15px]" src={seller4} alt="" />
              </div>
            </div>
            <div className="ml-[-40px]">
              <h1 className="mt-5 text-xl mb-1 font-[500] text-white">
                Aldi Sigun
              </h1>
              <p className="text-[#BCBCBC] text-[15px] mb-5">
                <span className="text-white">157</span> NFTs sold
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#4B4B4B] border-b-[1px]" />
    </div>
  );
};

export default TopSellers;
