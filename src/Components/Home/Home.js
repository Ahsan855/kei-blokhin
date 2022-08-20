import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import LiveAuctions from "./LiveAuctions/LiveAuctions";
import PopularCollections from "./PopularCollections/PopularCollections";
import SellYourNFT from "./SellYourNFT/SellYourNFT";
import TodayPicks from "./TodayPicks/TodayPicks";
import TopSellers from './TopSellers/TopSellers'

const Home = () => {
  return (
    <>
      <HeroSection />
      <SellYourNFT />
      <PopularCollections />
      <TodayPicks/>
      <LiveAuctions/>
      <TopSellers/>
    </>
  );
};

export default Home;
