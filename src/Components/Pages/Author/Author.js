import React, { Fragment } from "react";
import OurCreator from "./OurCreator/OurCreator";
import HeroAuthor from "./HeroAuthor/HeroAuthor";
import AuthorTopSeller from "./AuthorTopSeller/AuthorTopSeller";

const Author = () => {
  return (
    <Fragment>
      <HeroAuthor />
      <AuthorTopSeller />
      <OurCreator />
    </Fragment>
  );
};

export default Author;
