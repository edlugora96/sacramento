import React from "react"
import styled from "styled-components"
import Iframe from "react-iframe"
import { AnimateStaging } from "../components/AnimateComponent"
import Header from "../components/Header"
import headerImageVirtualTourPage from "../assets/gallery/011.jpg"
import SEO from "../components/seo"
import { mediaQuery } from "../lib/utils"

const VirtualTourView = styled.section`
  width: 100%;
  text-align: center;
  background-color: #fff;
  padding: 7rem;
  & iframe {
    margin: auto;
  }
  @media screen and (max-width: ${mediaQuery.phone}px) {
    padding: 0;
  }
`

const VirtualTourPage = ({ data }) => {
  return (
    <>
      <SEO title="Virtual Tour" />
      <Header degEffect image={headerImageVirtualTourPage}>
        <h2>VirtualTour</h2>
      </Header>
      <VirtualTourView>
        <AnimateStaging>
          <Iframe
            width="853"
            height="480"
            url="https://my.matterport.com/show/?m=pPCjjLczu6J"
            frameBorder="0"
            allowFullScreen
            allow="xr-spatial-tracking"
          ></Iframe>
        </AnimateStaging>
      </VirtualTourView>
    </>
  )
}

export default VirtualTourPage
