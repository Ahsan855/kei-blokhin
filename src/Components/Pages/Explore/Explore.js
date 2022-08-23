import React, { Fragment } from "react";
import titleIcon from "../../../Assets/Icons/titleIcon.png";
import { ExploreData } from "../../../data/data";
import checkMark from "../../../Assets/Icons/checkMarkIcon.png";
import heart from "../../../Assets/Icons/heartIcon.png";
import selector from "../../../Assets/Icons/selector.png";
import contactIcon from "../../../Assets/Icons/Icon.png";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <Fragment>
      <section className="bg-[#1E2329] overflow-x-hidden">
        <div className="bg-bgImage bg-no-repeat bg-center bg-cover">
          <div className="lg:w-[1200px] lg:container lg:mx-auto mx-auto md:pt-[78px] pt-4 pb-4 pl-4 md:pl-[32px] md:pb-[48px]">
            <img src={titleIcon} alt="icon" />
            <h1 className="text-[#FFFFFF] font-semibold mb-3 md:mb-4  pt-[15px] leading-[48px] text-[32px]  lg:text-[48px] md:text-[40px] ">
              Explore
            </h1>
            <div className="flex flex-row items-center">
              <Link to="/">
                <h2 className="text-[#BCBCBC] text-[20px] sm:text-[15px]">
                  Home
                </h2>
              </Link>
              <img
                src={contactIcon}
                className="w-[12px] h-[10px] mx-[14px]"
                alt=""
              />
              <h2 className="text-white text-[20px] sm:text-[15px]">Explore</h2>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] lg:mx-auto mx-[16px] md:mx-[32px] pt-[32px] md-pt-[48px] pb-[40px] md-pb-[64px] font-poppins">
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
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-[16px] md:mx-[32px] gap-[24px]">
            {ExploreData.map((data) => (
              <div
                className="border-2 rounded-[15px] border-[#3E3E46] flex justify-center items-center p-[16px]"
                key={data.id}
              >
                <div>
                  <div className="">
                    <img src={data.img} alt="icon" />
                  </div>

                  <div className="flex justify-between items-center ">
                    <div>
                      <h4 className="mt-[8px] text-[#FFFFFF] md:text-[15px] font-semibold">
                        {data.title}
                      </h4>
                    </div>
                    <div className="flex  items-center mt-[11px]">
                      <div>
                        <img
                          className="w-[16px] h-[16px] "
                          src={heart}
                          alt="heart"
                        />
                      </div>
                      <div>
                        <h5 className="text-[#FFFFFF] text-[16px] md:text-[13px]  font-medium ml-[4px] w-[29px] h-[24px] ">
                          220
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <p className=" text-[#FFFFFF] text-[15px] md:text-[10px] font-normal leading-[22.5px]">
                      By Andy Hermawan
                    </p>
                    <img
                      className="w-[19.54px] md:w-[13px] md:h-[13px] h-[19.35px] ml-[10px] md:ml-[5px]"
                      src={checkMark}
                      alt="checkMark"
                    />
                  </div>

                  <div>
                    <p className="text-[#BCBCBC] md:text-[10px] leading-[18px] font-normal mt-[12px] ">
                      Current Bid
                    </p>

                    <div className="flex justify-between ">
                      <div>
                        <h3 className="md:text-[15px] text-[#FFFFFF] font-semibold  ">
                          4.89 ETH{" "}
                        </h3>
                        <h5 className="text-[#BCBCBC] md:text-[12px] font-normal leading-[22.5px] ">
                          = $12.24
                        </h5>
                      </div>

                      <div>
                        <button className="border-[#3C84F7] box-border rounded-[300px] border-2 py-[8px] px-[24px] md:px-[20px] md:py-[6px] text-[#FFFFFF] text-[16px] md:text-[10px] ">
                          Place Bid
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className=" text-center mt-[64px] mb-[72px]  ">
            <button className="py-[12px] px-[122px] md:px-[48px] text-[#FFFFFF] rounded-[300px] box-border border-2 border-[#F6D62E] text-[16px] md:text-[24px] font-semibold leading-[24px]">
              Load More
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Explore;
