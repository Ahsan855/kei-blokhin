import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import LiveAuctions from "./LiveAuctions/LiveAuctions";
import PopularCollections from "./PopularCollections/PopularCollections";
import SellYourNFT from "./SellYourNFT/SellYourNFT";
// import SwiperLiveAuctions from "./SwiperLiveAuctions/SwiperLiveAuctions";
import TodayPicks from "./TodayPicks/TodayPicks";
import TopSellers from "./TopSellers/TopSellers";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SellYourNFT />
      <PopularCollections />
      <TodayPicks />
      <LiveAuctions />
      {/* <SwiperLiveAuctions /> */}
      <TopSellers />
    </>
  );
};

export default Home;
