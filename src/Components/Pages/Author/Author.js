import React, { Fragment } from 'react';
import OurCreator from './OurCreator/OurCreator';
import TopSellers from '../../Home/TopSellers/TopSellers'
import HeroAuthor from './HeroAuthor/HeroAuthor';



const Author = () => {
  return (
    <Fragment>
      {/* <TopSellers/> */}
      <HeroAuthor/>
      <OurCreator/>
    </Fragment>

  );
};

export default Author;