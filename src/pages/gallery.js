import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Gallery from "../components/Gallery"
import { AnimateStaging } from "../components/AnimateComponent"
import Header from "../components/Header"
import headerImageGalleryPage from "../assets/gallery/017.jpg"
import SEO from "../components/seo"
import { mediaQuery } from "../lib/utils"
const ImageGalleryGraphQLGatsby = props => {
  return <Img alt={props.node.name} fluid={props.node.childImageSharp.fluid} />
}

const GalleryView = styled.section`
  width: 100%;
  text-align: center;
  background-color: #fff;
  padding: 7rem;
  @media screen and (max-width: ${mediaQuery.phone}px) {
    padding: 0;
  }
`

const GalleryPage = ({ data }) => {
  return (
    <>
      <SEO title="Gallery" />
      <Header degEffect image={headerImageGalleryPage}>
        <h2>Gallery</h2>
      </Header>
      <GalleryView>
        <AnimateStaging>
          <Gallery style={{ height: "100vh" }}>
            {data.allFile.edges.map((file, index) => (
              <ImageGalleryGraphQLGatsby key={index} {...file} />
            ))}
          </Gallery>
        </AnimateStaging>
      </GalleryView>
    </>
  )
}

export default GalleryPage

export const query = graphql`
  query {
    allFile(limit: 27, sort: { fields: relativePath }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 3200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
