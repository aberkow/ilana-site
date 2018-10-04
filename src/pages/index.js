import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../Components/Layouts';

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Fragment>
      <Layout>
      <h1>Welcome!</h1>
      <Img fluid={data.file.childImageSharp.fluid} />
      <div>
        <p>
          Since August 2005, I've served the community of <a href="https://www.bethelwesthartford.org/">Beth El Temple in West Hartford Connecticut</a>. I graduated from the Jewish Theological Seminary in New York, with a bachelor’s degree in Talmud (2000), a master’s degree in Jewish education (2003), and rabbinic ordination (2005). I also received a bachelor’s degree in religion from Barnard College (2000), writing a thesis entitled, “Can One be an Observant Jew and a Practicing Buddhist?” (<Link to="/contact">You'll have to chat with me to find the answer!</Link>)
        </p>
      </div>
      </Layout>
    </Fragment>
  )
}

export default IndexPage

export const pageQuery = graphql`
query IndexQuery {
  file(relativePath: { eq: "headshot.jpg"}) {
    childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
    }
  }
}
`;