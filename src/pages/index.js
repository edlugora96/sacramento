import React from "react"

import SEO from "../components/seo"
import Header from "../components/Header"
import Gallery from "../components/Gallery"
import SectionLinking from "../components/landing/SectionLinking"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { AnimateStaging } from "../components/AnimateComponent"
import headerBackground from "../assets/headerBackground.jpg"

const ImageGalleryGraphQLGatsby = props => {
  return <Img alt={props.node.name} fluid={props.node.childImageSharp.fluid} />
}

const Hero = () => (
  <div>
    <h1>3439 Sacramento</h1>
    <h3>$ 4,250,000</h3>
    <br />
  </div>
)

const MoreInfo = () => (
  <>
    <div>
      <div>
        <span>4 Bedrooms</span>
        <span>3 Full Baths</span>
        <span>1 Half Bath</span>
        <span>3,620 sq. ft.</span>
      </div>
    </div>
    <div>
      <Link to="/features">
        <span>Masterfully Designed and Inspired</span>
      </Link>
    </div>
  </>
)

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Header image={headerBackground}>{{ MoreInfo, Hero }}</Header>
      <AnimateStaging>
        <Gallery>
          {data.allFile.edges.map((file, index) => (
            <ImageGalleryGraphQLGatsby key={index} {...file} />
          ))}
        </Gallery>
      </AnimateStaging>
      <AnimateStaging>
        <SectionLinking dark to="/features" title="Features" />
      </AnimateStaging>
      <AnimateStaging>
        <SectionLinking to="/neighborhood" title="Neighborhood" />
      </AnimateStaging>
      <AnimateStaging>
        <SectionLinking dark to="/map" title="Map and Directions" />
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
