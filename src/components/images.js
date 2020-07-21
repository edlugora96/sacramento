import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const NeighborhoodImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "270_4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
