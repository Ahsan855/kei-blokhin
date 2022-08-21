import React, { Fragment } from "react";
import titleIcon from "../../../Assets/Icons/titleIcon.png";
import selector from "../../../Assets/Icons/selector.png";
import { TodayPicksData } from "../../../data/data";
import checkMark from "../../../Assets/Icons/checkMarkIcon.png";
import heart from "../../../Assets/Icons/heartIcon.png";

const TodayPicks = () => {
  return (
    <Fragment>
      <section className="today-picks w-full font-poppins overflow-x-hidden">
        <div className="max-w-[1200px] lg:mx-auto mx-[16px] md:mx-[32px] pt-[50px] md-pt-[90px] pb-[48px] md-pb-[72px] font-poppins">
          {/* Title Style */}
          <div className=" md:mt-[40] lg:mt-[80px] ">
            <img src={titleIcon} alt="icon" />
            <h1 className="text-[#FFFFFF] font-semibold  leading-[48px]  text-[24px] md:text-[32px]">
              Today's Picks
            </h1>
          </div>

          {/* Selector Button */}
          <div className="flex justify-between  my-[24px] lg:my-[40px] md:my-[32px] ">
            <div className=" md:flex  md:md:gap-x-[16px] ">
              <div>
                <button className="text-[16px] leading-[24px] font-semibold border-2 box-border rounded-[300px] border-[#3E3E46] w-[204px] h-[48px]  text-[#FFFFFF] flex items-center justify-center ">
                  All categories
                  <img className="ml-[12px]" src={selector} alt="selector" />
                </button>
              </div>
              <div className="mt-[16px] flex justify-center  md:mt-[0] mb-[24px] md:mb-[0]">
                <button className="text-[14px] md:text-[16px]  w-[163px] h-[48px] leading-[24px] font-semibold border-2 box-border rounded-[300px] border-[#3E3E46] md:py-[12px] md:px[32px] text-[#FFFFFF] flex items-center justify-center">
                  All items
                  <img className="ml-[12px]" src={selector} alt="selector" />
                </button>
                <button className=" block md:hidden  w-[163px] h-[48px] ml-2  md:mt-0 text-[14px] md:text-[16px] leading-[24px] font-semibold border-2 box-border rounded-[300px] border-[#3E3E46] py-[12px] px-[32px] text-[#FFFFFF] flex items-center justify-center">
                  Sort by
                  <img className="ml-[12px]" src={selector} alt="selector" />
                </button>
              </div>
            </div>

            <div className="md:block hidden">
              <button className="  w-[163px] h-[48px] mt-[65px]  md:mt-0 text-[14px] md:text-[16px] leading-[24px] font-semibold border-2 box-border rounded-[300px] border-[#3E3E46] md:py-[12px] md:px-[32px] text-[#FFFFFF] flex items-center justify-center">
                Sort by
                <img className="ml-[12px]" src={selector} alt="selector" />
              </button>
            </div>
          </div>

          {/* TodayPicks Card Style */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-[16px] lg:mx-0 md:mx-0 gap-[24px]">
            {TodayPicksData.map((data) => (
              <div
                className="border-2 rounded-[15px] border-[#3E3E46] p-[16px]"
                key={data.id}
              >
                <div className="">
                  <img src={data.img} alt="icon" />
                </div>

                <div className="flex justify-between items-center ">
                  <div>
                    <h4 className="mt-[18px] text-[#FFFFFF] text-[24px] leading-[36px] font-semibold">
                      {data.title}
                    </h4>
                  </div>
                  <div className="flex justify-center items-center mt-[21px]">
                    <img src={heart} alt="" />{" "}
                    <h5 className="text-[#FFFFFF] text-[20px] leading-[30px] font-normal ml-[8px] ">
                      {data.like}
                    </h5>
                  </div>
                </div>

                <div className="flex items-center">
                  <p className=" text-[#FFFFFF] text-[15px] font-medium leading-[22.5px]">
                    By
                    <span className=" ml-[7px]">{data.name}</span>
                  </p>
                  <img
                    className="w-[19.54px] h-[19.35px] ml-[10px]"
                    src={checkMark}
                    alt="checkMark"
                  />
                </div>

                <div>
                  <p className="text-[#BCBCBC] text-[12px] leading-[18px] font-normal mt-[16px] ">
                    Current Bid
                  </p>

                  <div className="flex justify-between ">
                    <div className=" flex-none lg:flex md:flex-none items-center">
                      <h3 className="text-[24px] text-[#FFFFFF] leading-[36px] font-semibold  ">
                        {data.price} ETH{" "}
                      </h3>
                      <h5 className="text-[#BCBCBC] text-[15px] inline-block font-normal leading-[22.5px] ml-[4px] ">
                        = $12.24
                      </h5>
                    </div>

                    <button className="border-[#3C84F7] box-border rounded-[300px] border-2 mt-[14px] py-[8px] px-[24px] text-[#FFFFFF] leading-[21px] text-[14px]">
                      Place Bid
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className=" text-center mb-[40px] mt-[32px] lg:mt-[64px] lg:mb-[72px]">
            <button className="py-[12px] px-[32px] today-piks-btn text-white rounded-[300px] box-border border-2 border-[#F6D62E] text-[16px] font-semibold leading-[24px]">
              Load More
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default TodayPicks;
