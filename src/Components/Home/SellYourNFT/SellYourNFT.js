import React, { Fragment } from "react";
import { SellYourNFTdata } from "../../../data/data";
import titleIcon from '../../../Assets/Icons/titleIcon.png'

const SellYourNFT = () => {
  return (
    <Fragment>
      <section className="bg-[#1E2329] w-full overflow-x-hidden">
        <div className="max-w-[1200px] lg:mx-auto md:ml-[33px] md:mr-[88px] pt-[74px] pb-[64px] font-poppins">
          <div className="ml-[16px]" >
            <img src={titleIcon} alt="icon" />
            <h1 className="text-[#FFFFFF] w-[416px] font-semibold  mr-32 lg:ml-0 lg:mr-0 md:ml-0 md:mr-0 leading-[48px] text-[24px] md:text-[32px]">
              Create And Sell Your NFTs
            </h1>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 mx-[16px] lg:mx-0 md:mx-0 lg:mt-[56px] mt-[24px] gap-y-[24px] md:mt-[40px] lg:gap-x-[21px] md:gap-x-[79px]  md:gap-y-[32px]">
            {SellYourNFTdata.map((data) => (
              <div className="" key={data.id}>
                <div className="border-2 border-[#3E3E46] box-border rounded-full w-[80px] h-[80px] flex justify-center items-center">
                  <div className="bg-[#353B42] w-[64px] h-[64px] rounded-full flex justify-center items-center">
                    <img src={data.icon} alt="icon" />
                  </div>
                </div>

                <h4 className="mt-[16px] text-[#FFFFFF] w-[91px] text-[24px] leading-[36px] font-semibold mb-[8px]">
                  {data.name}
                </h4>
                <p className="text-[#BCBCBC] text-[15px] font-normal leading-[22px] w-full">
                  {data.description}
                </p>
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </Fragment>
  );
};

export default SellYourNFT;
