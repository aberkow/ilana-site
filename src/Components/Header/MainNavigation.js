import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import { StaticQuery, graphql } from 'gatsby';

const MainNavigation = () => (
  <StaticQuery
    query={
      graphql`
        query NavQuery {
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }
      `
    }
    render={ data => {
      const { allSitePage: { edges } } = data;
      console.log(edges)
        const listItems = edges.map((edge) => {
          const { node: { path } } = edge;
          console.log(path)
          return (
            <li>
              <Link to={path}>Name</Link>
            </li>
          )
        })
        return (
          <Fragment>
            <ul>{listItems}</ul>
          </Fragment>
        )
      }
    }
  />
)


// const MainNavigation = ({ data }) => (
//   <Fragment>
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/writings">Writings</Link>
//       </li>
//       <li>
//         <Link to="/contact">Contact</Link>
//       </li>
//     </ul>
//   </Fragment>
// )

export default MainNavigation;
