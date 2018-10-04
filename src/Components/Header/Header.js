import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import MainNavigation from './MainNavigation';

const Header = () => (
  <Fragment>
    <h1>
      <Link to="/">
        Rabbi Ilana Garber
      </Link>
    </h1>
    <MainNavigation />
  </Fragment>
)

export default Header;