import React from "react"

import SEO from "../components/seo"
import Header from "../components/Header"
import Gallery from "../components/Gallery"
import SectionLinking from "../components/landing/SectionLinking"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { AnimateStaging } from "../components/AnimateComponent"
import headerBackground from "../assets/gallery/028.jpg"

const ImageGalleryGraphQLGatsby = props => {
  return <Img alt={props.node.name} fluid={props.node.childImageSharp.fluid} />
}

const Hero = () => (
  <div>
    <h1>
      3439 Sacramento St
      <br /> Unit #401
      <br /> San Francisco, CA 94118
    </h1>
    <h3>$ 3,350,000</h3>
    <br />
  </div>
)

const MoreInfo = () => (
  <>
    <div>
      <div>
        <span>3 Bedrooms</span>
        <span>2 Baths</span>
        <span>1,942 sq. ft.</span>
        <span>2 Parking Spaces</span>
      </div>
    </div>
    <div>
      <Link to="/features">
        <span>
          Spectacular Design, Outstanding Floor Plan, Wonderful Neighborhood
        </span>
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
        <SectionLinking to="/virtual-tour" title="Virtual tour" />
      </AnimateStaging>
      <AnimateStaging>
        <SectionLinking dark to="/neighborhood" title="Neighborhood" />
      </AnimateStaging>
      <AnimateStaging>
        <SectionLinking to="/map" title="Map and Directions" />
      </AnimateStaging>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allFile(limit: 7, sort: { fields: relativePath }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 3200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
