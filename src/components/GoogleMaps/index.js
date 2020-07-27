import React from "react"
import GoogleMapReact from "google-map-react"
import { StaticGoogleMap, Marker } from "react-static-google-map"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const defaultProps = {
  center: {
    lat: 38.378329,
    lng: -122.526863,
  },
  zoom: 12,
}

const Mark = styled.div`
  background-color: #ea4335;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 2px #fff solid;
`

const GoogleMap = ({ center, zoom }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          googleMapKey
        }
      }
    }
  `)
  const lat = center && "lat" in center ? center.lat : defaultProps.center.lat
  const lng = center && "lng" in center ? center.lng : defaultProps.center.lng
  return (
    <section
      style={{
        maxHeight: "85vh",
        minHeight: "750px",
        height: "100vh",
        width: "100%",
      }}
    >
      {false && (
        <StaticGoogleMap
          size="600x600"
          zoom={zoom || defaultProps.zoom}
          apiKey={data.site.siteMetadata.googleMapKey}
        >
          <Marker location={lat + "," + lng} color="red" />
        </StaticGoogleMap>
      )}
      <GoogleMapReact
        bootstrapURLKeys={{ key: data.site.siteMetadata.googleMapKey }}
        defaultCenter={center || defaultProps.center}
        defaultZoom={zoom || defaultProps.zoom}
      >
        <Mark lat={lat} lng={lng} />
      </GoogleMapReact>
    </section>
  )
}

export default GoogleMap
