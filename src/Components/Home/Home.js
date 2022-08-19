import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import PopularCollections from "./PopularCollections/PopularCollections";
import SellYourNFT from "./SellYourNFT/SellYourNFT";
import TodayPicks from "./TodayPicks/TodayPicks";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SellYourNFT />
      <PopularCollections />
      <TodayPicks/>
    </>
  );
};

export default Home;
