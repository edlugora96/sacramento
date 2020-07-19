import React from "react"

import SEO from "../components/seo"
import Header from "../components/Header"
import Gallery from "../components/Gallery"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Header siteTitle="3439Sacramento" />
      {
        <Gallery>
          {props => {
            console.log(data)
            return data?.allFile.edges.map(file => (
              <div onClick={() => props?.setOpenOverlay(true)}>
                <Img
                  alt={file.node.name}
                  fluid={file.node.childImageSharp.fluid}
                />
              </div>
            ))
          }}
        </Gallery>
      }
      <h1>New listing...</h1>
      <h2>Building...</h2>
      <p>Welcome to your new site 3439Sacramento.</p>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allFile(limit: 7) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 3200, webpQuality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
