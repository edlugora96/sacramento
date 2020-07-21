import React from "react"
import styled from "styled-components"
import { AnimateStaging } from "../components/AnimateComponent"
import Header from "../components/Header"
import headerImageNeighborhoodPage from "../assets/gallery/270_22.jpg"
import SEO from "../components/seo"
import { NeighborhoodImage } from "../components/images"

const NeighborhoodView = styled.section`
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  max-width: 700px;
  transition: all 0.3s;
  padding-bottom: 20px;
`

const Section = styled.section`
  padding: 12px;
  & h3 {
    color: rgba(0, 0, 0, 0.87);
    letter-spacing: 0.00938em;
    font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
    line-height: 1.28571429em;
    margin: calc(2rem - 0.14285714em) 0 1rem;
    font-weight: 700;
    padding: 0;
    font-size: 1.28571429rem;
    margin-top: 0;
  }
  & p {
    color: rgba(0, 0, 0, 0.87);
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    letter-spacing: 0.00938em;
    margin: 0 0 1em;
    line-height: 1.4285em;
    margin-bottom: 0;
  }
`

const H2 = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  padding: 32px 12px;
  z-index: 5;
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
`

const NeighborhoodPage = () => {
  return (
    <>
      <SEO title="Neighborhood" />
      <Header degEffect image={headerImageNeighborhoodPage}>
        <h2>Neighborhood</h2>
      </Header>
      <NeighborhoodView>
        <AnimateStaging>
          <H2>Neighborhood</H2>
        </AnimateStaging>
        <AnimateStaging>
          <Section>
            <NeighborhoodImage />
          </Section>
        </AnimateStaging>
        <AnimateStaging>
          <Section>
            <p>
              <h3>The San Francisco Neighborhood of Forest Hill</h3>
              <p>
                Built upon a hillside that developer Adolph Sutro planted as
                forest just west of Twin Peaks in the 19th century, Forest Hill
                today is a community of some 650 homes located in the geographic
                heart of San Francisco. There are many outstanding attractions
                nearby. Golden Gate Park, the San Francisco Zoo, and the Golden
                Gate National Recreation Area provide for outdoor enjoyment,
                while the DeYoung Museum, Stern Grove Music Festival, UCSF, and
                California Academy of Sciences offer cultural and intellectual
                opportunities.
              </p>
            </p>
          </Section>
        </AnimateStaging>
        <AnimateStaging>
          <Section>
            <p>
              <p>
                The landscaped and heavily tree-lined streets follow the hill’s
                contours presenting charming scenes of natural beauty that open
                up here and there to spectacular vistas which may include the
                Pacific Ocean, the San Francisco Bay, or the Golden Gate Bridge.
                Homes representing many architectural styles from Cotswold
                Cottage to California Modern can be found side by side,
                harmoniously linked by the plants, trees, and gardens. Forest
                Hill is just blocks from the charming shops, restaurants and
                businesses of West Portal Avenue, and less than a mile from both
                the Chinese markets of Irving Street and the eclectic shops and
                restaurants of the Inner Sunset. Union Square and the Financial
                District are just 20 minutes away on the MUNI from the Forest
                Hill or West Portal stations. Nearby 19th Avenue provides easy
                access to the Peninsula and San Francisco Airport to the south,
                and to the counties of Marin, Sonoma, Napa and Mendocino to the
                north.
              </p>
            </p>
          </Section>
        </AnimateStaging>
      </NeighborhoodView>
    </>
  )
}

export default NeighborhoodPage
