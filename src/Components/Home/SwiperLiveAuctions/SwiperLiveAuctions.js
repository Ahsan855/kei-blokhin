import React, { Fragment } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../../Styles/Style.css";

// import required modules
import { Navigation, Pagination } from "swiper";
import { LiveAuctionsData } from "../../../data/data";
import checkMark from "../../../Assets/Icons/checkMarkIcon.png";
import heart from "../../../Assets/Icons/heartIcon.png";

const SwiperLiveAuctions = () => {
  return (
    <Fragment>
      <section className="bg-[#1E2329] w-full overflow-x-hidden font-poppins">
        <div className="max-w-[1200px] lg:mx-auto mx-[16px] md:mx-[32px] py-[80px] font-poppins">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {/* TodayPicks Card Style */}

            {LiveAuctionsData.map((data) => (
              <SwiperSlide className="" key={data.id}>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Fragment>
  );
};

export default SwiperLiveAuctions;
