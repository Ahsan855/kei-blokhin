import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import PopularCollections from "./PopularCollections/PopularCollections";
import Sell_Your_NFT from "./SellYourNFT/SellYour_NFT";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Sell_Your_NFT/>
      <PopularCollections/>
    </>
  );
};

export default Home;
