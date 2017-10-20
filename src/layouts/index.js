import React from 'react'
import PropTypes from 'prop-types'
import Link, { navigateTo } from 'gatsby-link'
import Helmet from 'react-helmet'

import { HeaderWrapper, SiteName, SiteWrapper } from '../utils/styles';

const Header = () => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <HeaderWrapper>
      <SiteName 
        onClick={ () => navigateTo('/') }>
          Rabbi Ilana Garber 
      </SiteName>
      <ul style={{
        listStyleType: 'none',
        color: 'white',
        margin: '10px 0 0 0'
      }}>
        <li style={{ display: 'inline-block' }}>
          <Link to="/"
            style={{
              textDecoration: 'none'
            }}>
              Home
            </Link>
        </li>
        < li style={
          {
            display: 'inline-block'
          }
        } >
          <Link to="/writings" style={{
            textDecoration: 'none',
            marginLeft: '20px'
          }}>
            Writings
          </Link>
        </li>
        < li style = {
          {
            display: 'inline-block',
            marginLeft: '20px'
          }
        } >
          <Link to="/contact" 
          style={{
            textDecoration: 'none',
          }}>
            Contact
          </Link>
        </li>
      </ul>
    </HeaderWrapper>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Rabbi Ilana Garber"
      meta={[
        { name: 'description', content: 'Rabbi Ilana Garber' },
        { name: 'keywords', content: 'Ilana Garber, Rabbi, author, teacher, educator, pastoral counseling, lifecycle events, fragile x syndrome',
          name: 'robots', content: 'index, follow' },
      ]}
    />
    <Header />
      <SiteWrapper className="site-wrapper">
        {children()}
      </SiteWrapper>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

//   < li style = {
//           {
//   display: 'inline-block'
// }
//         } >
//   <Link to="/about" style={{
//     textDecoration: 'none',
//     margin: '0 20px'
//   }}>
//     About
//           </Link>
//         </li >
