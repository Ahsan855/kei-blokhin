import React, { Fragment } from 'react';
import titleIcon from '../../../assets/images/icon/titleIcon.png'

const PopularCollections = () => {
  return (
    <Fragment>
      <section className="bg-[#1E2329]">
        <div>
          <div className="flex justify-between pt-20 pb-20">
            <div>
              <img src={titleIcon} alt="icon" />
              <h1 className="text-white text-[32px] font-semibold">
                Popular Collections
              </h1>
            </div>

            <button className="py-3 px-8 text-white border border-[#F6D62E] text-md rounded-full font-semibold">
              Explore More
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PopularCollections;