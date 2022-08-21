import React, { Fragment } from 'react';
import titleIcon from "../../../../Assets/Icons/titleIcon.png" ;

const HeroAuthor = () => {
  return (
    <Fragment>
      <section className="bg-[#1E2329] w-full overflow-x-hidden">
        {/* Hero Section Style */}
        <div className="bg-bgImage w-[1920px] h-[280px]  bg-no-repeat bg-center bg-cover">
          <div className="max-w-[1200px] mx-auto">
            <img src={titleIcon} alt="icon" />
            <h1 className="text-[#FFFFFF] text-[48px] font-semibold leading-[72px] absolute mt-[88px] mb-[118px] ">
              Author
            </h1>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HeroAuthor;