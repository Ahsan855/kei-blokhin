import React, { Fragment } from "react";
import { OurCreatorData } from "../../../../data/data";
import checkMark from "../../../../Assets/Icons/checkMarkIcon.png";

const OurCreator = () => {
  return (
    <Fragment>
      <section className="bg-[#1E2329] relative w-full overflow-x-hidden">
        <div className="max-w-[1200px] lg:mx-auto md:mx-[32px] lg:pt-[83px] pb-[80px] font-poppins">
          <h1 className="text-[#FFFFFF] pl-[16px] md:pl-0 text-[24px] md:text-[32px] mb-[14px] md:mb-[24px] font-semibold leading-[54px]">
            Our Creator
          </h1>

          <div className="flex justify-between">
            <div className="pl-[16px] md:pl-0 w-[284px] md:w-[506px]">
              <p className="text-[#FFFFFF] text-[15px] md:text-[20px] font-normal leading-[30px]">
                Our main utility token that allows you to buy and sell LANDS and
                ASSETS in The Sandbox metaverse.
              </p>
            </div>
            <button className="py-[12px] px-[32px] author-btn text-white rounded-[300px] box-border border-2 border-[#F6D62E] text-[16px] font-semibold leading-[24px]">
              Explore More
            </button>
          </div>

          {/*Single Card Style */}
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-[16px] md:mx-[32px]  lg:mt-[56px] mt-[48px] gap-[24px] md:mt-[40px]  ">
            {OurCreatorData.map((data) => (
              <div
                className=" border-[#3E3E46] border-2 rounded-[15px] p-[16px] sm:w-full w-[328px] mx-auto "
                key={data.id}
              >
                <div className="flex items-center ">
                  <div className="">
                    <span>
                      <img src={checkMark} className="ml-14" alt="" />
                    </span>
                    <div className="">
                      <img className="mt-[-15px]" src={data.user} alt="" />
                    </div>
                  </div>
                  <div className="ml-[16px] ">
                    <h1 className=" text-[#FFFFFF]">{data.name}</h1>
                    <p className="text-[#BCBCBC] text-[15px]">
                      <span className="text-[#FFFFFF]">{data.sold}</span> NFTs
                      sold
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 mt-[18px] ">
                  {data.collection.map((img) => (
                    <img className="md:w-[96px] md:h-[96px] sm:w-[118px] sm:h-[118px] w-[113px] h-[113px] " src={img} alt="icon" />
                  ))}
                </div>
                
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurCreator;
