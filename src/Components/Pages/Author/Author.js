import React, { Fragment } from 'react';
import OurCreator from './OurCreator/OurCreator';
import TopSellers from '../../Home/TopSellers/TopSellers'



const Author = () => {
  return (
    <Fragment>
      <TopSellers/>
      <OurCreator/>
    </Fragment>

  );
};

export default Author;