import React, { Fragment } from 'react';
import { OurCreatorData } from '../../../../data/data';
import checkMark from '../../../../Assets/Icons/checkMarkIcon.png'

const OurCreator = () => {
  return (
    <Fragment>
      <section className="bg-[#1E2329] w-full overflow-x-hidden">
        <div className="max-w-[1200px] lg:mx-auto md:mx-[32px] pt-[81px] pb-[80px] font-poppins">
          
          <h1 className="text-[#FFFFFF] text-[24px] md:text-[32px] mb-[24px] font-semibold leading-[54px]">
            Our Creator
          </h1>

          <div className="flex justify-between">
            <div>
              <p className="text-[#FFFFFF] text-[20px] font-normal leading-[30px]">
                Our main utility token that allows you to buy and sell <br />{" "}
                LANDS and ASSETS in The Sandbox metaverse.
              </p>
            </div>
            <button className="py-[12px] px-[32px] text-[#FFFFFF] rounded-[300px] box-border border-2 border-[#F6D62E] text-[16px] font-semibold leading-[24px]">
              Explore More
            </button>
          </div>

          {/*Single Card Style */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 mx-[16px] lg:mx-0 md:mx-0 lg:mt-[56px] mt-[48px] gap-y-[24px] md:mt-[40px] lg:gap-x-[21px] md:gap-x-[79px]  md:gap-y-[32px]  ">
            {OurCreatorData.map((data) => (
              <div
                className=" border-[#3E3E46] border-2 rounded-[15px] p-[16px] "
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
                    <h1 className=" text-[#FFFFFF]">
                      {data.name}
                    </h1>
                    <p className="text-[#BCBCBC] text-[15px]">
                      <span className="text-[#FFFFFF]">{data.sold}</span> NFTs sold
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 mt-[18px] ">
                  {data.collection.map((img) => (
                    <img className="w-[96px] h-[96px]" src={img} alt="icon" />
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