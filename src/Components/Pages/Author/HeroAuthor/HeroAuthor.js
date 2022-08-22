import React, { Fragment } from "react";
import titleIcon from "../../../../Assets/Icons/titleIcon.png";
import contactIcon from "../../../../Assets/Icons/Icon.png";

import { Link } from "react-router-dom";

const HeroAuthor = () => {
  return (
    <Fragment>
      <section className="bg-[#1E2329] w-full overflow-x-hidden">
        <div className="bg-bgImage bg-no-repeat bg-center bg-cover">
          <div className="lg:w-[1200px] lg:container lg:mx-auto mx-auto md:pt-[78px] pt-4 pb-4 pl-4 md:pl-[32px] md:pb-[48px]">
            <img src={titleIcon} alt="icon" />
            <h1 className="text-[#FFFFFF] font-semibold mb-3 md:mb-4  pt-[15px] leading-[48px] text-[32px]  lg:text-[48px] md:text-[40px] ">
              Author
            </h1>
            <div className="flex flex-row items-center">
              <Link to="/">
                <h2 className="text-[#BCBCBC] text-[20px] sm:text-[15px]">
                  Home
                </h2>
              </Link>
              <img
                src={contactIcon}
                className="w-[12px] h-[10px] mx-[14px]"
                alt=""
              />
              <h2 className="text-white text-[20px] sm:text-[15px]">Author</h2>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HeroAuthor;
