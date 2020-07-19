import React from "react"

import SEO from "../components/seo"
import Header from "../components/Header"
import Gallery from "../components/Gallery"
import SectionLinking from "../components/landing/SectionLinking"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { AnimateStaging } from "../components/AnimateComponent"

const ImageGalleryGraphQLGatsby = props => {
  return <Img alt={props.node.name} fluid={props.node.childImageSharp.fluid} />
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
      <AnimateStaging>
        <SectionLinking dark to="/" title="Features" />
      </AnimateStaging>
      <AnimateStaging>
        <SectionLinking to="/" title="Neighborhood" />
      </AnimateStaging>
      <AnimateStaging>
        <SectionLinking dark to="/" title="Map and Directions" />
      </AnimateStaging>
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
