import React, { Fragment } from 'react';
import Header from './Header/Header';
// import Link, { navigateTo } from 'gatsby-link';

const Layout = ({ children }) => (
  <div className="site-wrapper">
    <Header />
    {children}
  </div>
)

export default Layout;