import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import PopularCollections from "./PopularCollections/PopularCollections";
import SellYourNFT from "./SellYourNFT/SellYourNFT";
import TodayPicks from "./TodayPicks/TodayPicks";
import TopSellers from "./TopSellers/TopSellers";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SellYourNFT />
      <PopularCollections />
      <TodayPicks />
      <TopSellers />
    </>
  );
};

export default Home;
