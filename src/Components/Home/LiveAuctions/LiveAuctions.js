import React, { Fragment } from 'react';
import titleIcon from '../../../Assets/Icons/titleIcon.png'
import checkMark from '../../../Assets/Icons/checkMarkIcon.png'
import { LiveAuctionsData } from '../../../data/data';
import heart from '../../../Assets/Icons/heartIcon.png' 
import leftRightIcon from '../../../Assets/Icons/left-right-icon.png'

const LiveAuctions = () => {
  return (
    <Fragment>
      <section className="bg-[#1E2329] w-full overflow-x-hidden">
        <div className="max-w-[1200px] lg:mx-auto mx-[16px] md:mx-[32px] py-[80px] font-poppins">
          {/* Title Style */}
          <div>
            <img src={titleIcon} alt="icon" />
            <h1 className="text-[#FFFFFF] font-semibold  leading-[48px]  text-[24px] md:text-[32px]">
              Live Auctions
            </h1>
          </div>

          {/* TodayPicks Card Style */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 mx-[16px] lg:mx-0 md:mx-0 gap-x-[32px] rounded-3xl liveAuctionsBorder p-[24px] mt-[48px] ">
            {LiveAuctionsData.map((data) => (
              <div className="" key={data.id}>
                <div className="flex items-center">
                  <p className=" text-[#FFFFFF] text-[15px] font-medium leading-[22.5px] ">
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
                  <img
                    className="rounded-[10px] my-[9px] "
                    src={data.img}
                    alt="icon"
                  />
                </div>

                <h4 className=" text-[#FFFFFF] text-[20px] leading-[30px] mt-[8px] font-semibold">
                  {data.title}
                </h4>

                <div className="mt-[8px]">
                  <p className="text-[#BCBCBC] text-[12px] leading-[18px] font-normal ">
                    Current Bid
                  </p>

                  <div className=" flex-none lg:flex md:flex-none items-center">
                    <h3 className="text-[20px] text-[#FFFFFF] leading-[30px] font-semibold  ">
                      4.89 ETH{" "}
                    </h3>
                    <h5 className="text-[#BCBCBC] text-[15px] font-normal leading-[22.5px] ml-[4px] ">
                      = $12.24
                    </h5>
                  </div>
                </div>

                <div className="flex justify-between items-center ">
                  <div className="flex justify-center items-center mt-[18px]">
                    <img src={heart} alt="heart" />{" "}
                    <h5 className="text-[#FFFFFF] text-[20px] leading-[30px] font-normal ml-[8px] ">
                      {data.like}
                    </h5>
                  </div>
                  <button className="border-[#3C84F7] box-border rounded-[300px] border-2 mt-[14px] py-[8px] px-[24px] text-[#FFFFFF] leading-[21px] text-[14px] ">
                    Place Bid
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-[24px] ">
            <img src={leftRightIcon} alt="leftRightIcon" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LiveAuctions;