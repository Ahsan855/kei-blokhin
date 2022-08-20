import React from "react";
import checkMark from '../../../Assets/Icons/checkMarkIcon.png'
import titleIcon from '../../../Assets/Icons/titleIcon.png'
import { TopSellersData } from "../../../data/data";

const TopSellers = () => {
  return (
    <section className="bg-[#1E2329] w-full overflow-x-hidden">
      <div className="max-w-[1200px] lg:mx-auto md:mx-[32px] pt-[80px] pb-[51px] font-poppins">
        <div className="flex justify-between">
          <div>
            <img src={titleIcon} alt="icon" />
            <h1 className="text-[#FFFFFF] text-[24px] md:text-[32px] font-semibold leading-[48px]">
              Top Sellers
            </h1>
          </div>
          <button className="py-[12px] px-[32px] text-white rounded-[300px] box-border border-2 border-[#F6D62E] text-[16px] font-semibold leading-[24px]">
            Explore More
          </button>
        </div>

        {/*Top Seller Style */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 mx-[16px] lg:mx-0 md:mx-0 lg:mt-[56px] mt-[48px] gap-y-[24px] md:mt-[40px] lg:gap-x-[21px] md:gap-x-[79px]  md:gap-y-[32px] mb-[51px] ">
          {TopSellersData.map((data) => (
            <div
              className=" border-[#3E3E46] border-2 rounded-[15px] p-[16px] "
              key={data.id}
            >
              <div className="flex items-center ">
                <div className="">
                  <span>
                    <img src={checkMark} className="ml-14" alt="" />
                  </span>
                  <div className="">
                    <img className="mt-[-15px]" src={data.seller} alt="" />
                  </div>
                </div>
                <div className="ml-[16px] ">
                  <h1 className=" text-[#FFFFFF]">{data.name}</h1>
                  <p className="text-[#BCBCBC] text-[15px]">
                    <span className="text-[#FFFFFF]">{data.sold}</span> NFTs
                    sold
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-[#4B4B4B] border-b-[1px]" />
    </section>
  );
};

export default TopSellers;
