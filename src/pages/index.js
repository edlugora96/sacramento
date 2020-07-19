import React from "react"

import SEO from "../components/seo"
import Header from "../components/Header"
import Gallery from "../components/Gallery"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { AnimateStaging } from "../components/AnimateComponent"

const ImageGalleryGraphQLGatsby = props => {
  return (
    <Img
      // imgStyle={props?.thumbs ? { position: "" } : {}}
      // style={props?.thumbs ? { position: "" } : {}}
      alt={props.node.name}
      fluid={props.node.childImageSharp.fluid}
    />
  )
}

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Header siteTitle="3439Sacramento" />
      <AnimateStaging>
        <Gallery>
          {data.allFile.edges.map((file, index) => (
            <ImageGalleryGraphQLGatsby key={index} {...file} />
          ))}
        </Gallery>
      </AnimateStaging>
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
