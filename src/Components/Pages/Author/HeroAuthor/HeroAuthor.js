import React, { Fragment } from "react";
import titleIcon from "../../../../Assets/Icons/titleIcon.png";
import contactBread from "../../../../Assets/Images/_breadcrumbs.png";

const HeroAuthor = () => {
  return (
    <Fragment>
      <section className="bg-[#1E2329] w-full overflow-x-hidden">
        <div className="bg-bgImage bg-no-repeat bg-center bg-cover">
          <div className="lg:w-[1200px] mx-auto md:pt-[78px] pt-4 pb-4 pl-4 md:pl-[32px] md:pb-[48px]">
            <img src={titleIcon} alt="icon" />
            <h1 className="text-[#FFFFFF] font-semibold mb-3 md:mb-4  pt-[15px] leading-[48px] text-[32px]  lg:text-[48px] md:text-[40px] ">
              Explore
            </h1>
            <img
              src={contactBread}
              className="sm:h-[23px] sm:w-[131px]"
              alt=""
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HeroAuthor;
