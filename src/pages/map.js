import React from "react"
import Header from "../components/Header"
import headerImageMapPage from "../assets/gallery/009.jpg"
import GoogleMaps from "../components/GoogleMaps"
import { AnimateStaging } from "../components/AnimateComponent"
import SEO from "../components/seo"
import { Card } from "semantic-ui-react"
import styled from "styled-components"
import { mediaQuery } from "../lib/utils"

const MapView = styled.div`
  position: relative;
  & > div {
    top: 5rem !important;
    left: 5rem !important;
    position: absolute !important;
    z-index: 3;
    @media screen and (max-width: ${mediaQuery.phone}px) {
      top: 0rem !important;
      left: 0.5rem !important;
      position: relative !important;
    }
  }
`

const Map = () => {
  return (
    <>
      <Header degEffect image={headerImageMapPage}>
        <h2>Map and directions</h2>
      </Header>
      <SEO title="Map" />
      <AnimateStaging>
        <br />
        <MapView>
          <Card
            header="Direction"
            description="West on Sacramento St from Presidio Blvd, 1.5 blocks on the South-side of the street"
          />
          <GoogleMaps zoom={18} center={{ lat: 37.787816, lng: -122.44945 }} />
        </MapView>
        <br />
      </AnimateStaging>
    </>
  )
}

export default Map
