import React from "react"
import styled from "styled-components"
import Gallery from "../components/Gallery"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { AnimateStaging } from "../components/AnimateComponent"
import Header from "../components/Header"
import headerImageGalleryPage from "../assets/gallery/270_21.jpg"
import SEO from "../components/seo"
const ImageGalleryGraphQLGatsby = props => {
  return <Img alt={props.node.name} fluid={props.node.childImageSharp.fluid} />
}

const GalleryView = styled.section`
  width: 100%;
  text-align: center;
  background-color: #fff;
  padding: 7rem;
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
          <Gallery>
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
    allFile {
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
