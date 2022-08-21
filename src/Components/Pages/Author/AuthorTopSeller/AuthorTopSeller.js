import React, { Fragment } from "react";
import { AuthorTopSellersData } from "../../../../data/data";
import checkMark from "../../../../Assets/Icons/checkMarkIcon.png";
import leftRightIcon from "../../../../Assets/Icons/left-right-icon.png";

const AuthorTopSeller = () => {
  return (
    <Fragment>
      <section className="bg-[#1E2329] w-full overflow-x-hidden">
        <div className="max-w-[1200px] lg:mx-auto md:mx-[32px] pt-[80px] pb-[51px] font-poppins">
          <div className="pl-[16px] md:pl-0">
            <h1 className="text-[#FFFFFF] text-[24px] md:text-[36px] font-semibold ">
              Top Sellers
            </h1>

            <p className=" text-[15px] md:text-[20px] w-[284px] md:w-[476px] text-[#FFFFFF]  font-normal mt-[24px] ">
              Discover Collections, get Equipment, or find assets to build your
              own unique Experiences.
            </p>
          </div>

          {/* Author Top Seller Style */}

          <div className="grid lg:grid-cols-4 md:grid-cols-2 mx-[16px] lg:mx-0 md:mx-0 lg:mt-[56px] mt-[48px] gap-[24px] md:mt-[40px] mb-[51px] ">
            {AuthorTopSellersData.map((data) => (
              <div
                className=" border-[#3E3E46] border-2 rounded-[15px] "
                key={data.id}
              >
                <div>
                  <div className="px-[93px] py-[16px] ">
                    <div>
                      <img src={checkMark} className="ml-20" alt="" />
                    </div>
                    <div>
                      <img
                        className="mt-[-15px] w-[96px] h-[96px] "
                        src={data.seller}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="text-center ">
                    <h1 className=" text-[#FFFFFF] mb-[4px] ">{data.name}</h1>
                    <p className="text-[#BCBCBC] text-[15px] mb-[24px] ">
                      <span className="text-[#FFFFFF]">{data.sold}</span> NFTs
                      sold
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-[32px] ">
            <img src={leftRightIcon} alt="leftRightIcon" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AuthorTopSeller;
