import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import PopularCollections from "./PopularCollections/PopularCollections";
import SellYourNFT from "./SellYourNFT/SellYourNFT";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SellYourNFT />
      <PopularCollections />
    </>
  );
};

export default Home;
