import React from "react"
import Header from "../components/Header"
import headerImageMapPage from "../assets/gallery/270_13.jpg"
import GoogleMaps from "../components/GoogleMaps"
import { AnimateStaging } from "../components/AnimateComponent"
import SEO from "../components/seo"
import { Card } from "semantic-ui-react"
import styled from "styled-components"

const MapView = styled.div`
  position: relative;
  & > div {
    top: 5rem !important;
    left: 5rem !important;
    position: absolute !important;
    z-index: 3;
  }
`

const Map = ({ data }) => {
  console.log(data)

  return (
    <>
      <Header degEffect image={headerImageMapPage}>
        <h2>Map and directions</h2>
      </Header>
      <SEO title="Map" />
      <AnimateStaging>
        <br />
        <MapView>
          <Card header="Direction" />
          <GoogleMaps zoom={16} center={{ lat: 37.74685, lng: -122.46334 }} />
        </MapView>
        <br />
      </AnimateStaging>
    </>
  )
}

export default Map
