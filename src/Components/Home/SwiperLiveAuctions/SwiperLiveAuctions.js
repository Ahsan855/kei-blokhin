import React, {Fragment } from "react";
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
import checkMark from '../../../Assets/Icons/checkMarkIcon.png';
import heart from '../../../Assets/Icons/heartIcon.png';



const SwiperLiveAuctions = () => {
  return (
    <Fragment>
      <section className="bg-[#1E2329] w-full overflow-x-hidden">
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
                hello shahadat
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </Fragment>
  );
};

export default SwiperLiveAuctions;