import React from "react"
import styled from "styled-components"
import { AnimateStaging } from "../components/AnimateComponent"
import Header from "../components/Header"
import headerImageFeaturesPage from "../assets/gallery/021.jpg"
import SEO from "../components/seo"

const H2 = styled.h2`
  color: rgba(0, 0, 0, 0.87);
  margin: 0;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: center;
  padding: 20px 0;
  z-index: 5;
  position: relative;
  margin-top: 0;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  width: 100%;
  position: relative;
  font-size: medium;
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);
  }
`
const ContentGrid = styled.div`
  color: #000;
  font-size: medium;
  width: 100%;
  flex-wrap: wrap;
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  max-width: 500px;
  grid-template-columns: 1fr 1fr;
`

const ContentCell = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  & > * {
    padding: 20px 2px;
    z-index: 5;
    position: relative;
  }
`

const P = styled.p`
  z-index: 5;
  position: relative;
  grid-column: 1 / span 2;
  margin: 0 -1rem;
  text-align: justify;
  & > * {
    padding: 2.5px 0;
  }
`

const MoreInfo = styled.p`
  line-height: 1.4285em;
  width: 100%;
  max-width: 460px;
  margin-bottom: 0;
  position: relative;
  z-index: -1;
  & i {
    width: 100%;
    display: block;
    font-size: 15px;
    text-align: left;
  }
`

const FeaturesPage = () => {
  return (
    <>
      <SEO title="Features" />
      <Header degEffect image={headerImageFeaturesPage}>
        <h2>Features</h2>
      </Header>
      <div>
        <H2>
          <br />
          <AnimateStaging>Features</AnimateStaging>
        </H2>
        <Grid>
          <div>
            <ContentGrid>
              <ContentCell>
                <AnimateStaging>
                  <div>Bedrooms: </div>
                </AnimateStaging>
                <AnimateStaging>
                  <div> 3</div>
                </AnimateStaging>
              </ContentCell>
              <ContentCell>
                <AnimateStaging>
                  <div>Bathrooms: </div>
                </AnimateStaging>
                <AnimateStaging>
                  <div> 2</div>
                </AnimateStaging>
              </ContentCell>
              <ContentCell>
                <AnimateStaging>
                  <div>Home: </div>
                </AnimateStaging>
                <AnimateStaging>
                  <div> 1,942 sq. ft.</div>
                </AnimateStaging>
              </ContentCell>
              <ContentCell>
                <AnimateStaging>
                  <div>Parking Spaces: </div>
                </AnimateStaging>
                <AnimateStaging>
                  <div> 2</div>
                </AnimateStaging>
              </ContentCell>
              <P>
                <br />
                <AnimateStaging>
                  Unit #401 at 3439 Sacramento St, is a sophisticated home that
                  offers exciting interior design and an outstanding floorplan.
                  Located on the top floor of a refined, 9-unit property which
                  was built in 2000, it is perfectly situated in San Francisco’s
                  desirable Presidio Heights neighborhood.
                  <br />
                  <br />
                </AnimateStaging>

                <AnimateStaging>
                  In 2018 and 2019, prominent New York interior-designer, Lisa
                  Kanning, transformed this already contemporary and chic condo
                  into a tour-de-force of proportional balance, clean lines,
                  contrasts of texture and discerning attention to detail. The
                  3-bedroom, 2-bath, highly functional floor plan features
                  generous room sizes, high vaulted ceilings, exquisite finishes
                  and the natural light of walls of windows and skylights. The
                  home includes a gourmet kitchen with premier appliances, an
                  ensuite master bedroom with a bathroom offering dual vanities,
                  a soaking-tub and a walk-in shower, and an elegant dining
                  room, living room area with ribbon flame fireplace.
                  <br />
                  <br />
                </AnimateStaging>

                <AnimateStaging>
                  This exceptional property is complimented by an in-unit washer
                  / dryer; storage area; and interior access, 2-car, tandem
                  parking with elevator service.
                  <br />
                  <br />
                </AnimateStaging>
              </P>
            </ContentGrid>
          </div>
          <MoreInfo>
            <AnimateStaging>
              <i>
                Exciting Design, Outstanding Floorplan, Wonderful Neighborhood
              </i>
            </AnimateStaging>
            <br />
            <br />
          </MoreInfo>
        </Grid>
      </div>
    </>
  )
}

export default FeaturesPage
