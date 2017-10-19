import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// import './index.css'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Rabbi Ilana Garber
        </Link>
      </h1>
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
        < li style = {
          {
            display: 'inline-block'
          }
        } >
          <Link to="/about" style={{
            textDecoration: 'none',
            margin: '0 20px'
          }}>
            About
          </Link>
        </li>
        < li style = {
          {
            display: 'inline-block'
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
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Rabbi Ilana Garber"
      meta={[
        { name: 'description', content: 'Rabbi Ilana Garber' },
        { name: 'keywords', content: 'Ilana Garber, Rabbi, author, teacher, educator, pastoral counseling, lifecycle events, fragile x syndrome' },
      ]}
    />
    <Header />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
