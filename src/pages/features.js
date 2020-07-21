import React from "react"
import styled from "styled-components"
import { AnimateStaging } from "../components/AnimateComponent"
import Header from "../components/Header"
import headerImageFeaturesPage from "../assets/gallery/270_18.jpg"
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
  padding: 20px;
  z-index: 5;
  position: relative;
  grid-column: 1 / span 2;
  & > * {
    padding: 2.5px 0;
  }
`

const MoreInfo = styled.p`
  margin: 0 0 1em;
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
                  <div> 4</div>
                </AnimateStaging>
              </ContentCell>
              <ContentCell>
                <AnimateStaging>
                  <div>Bathrooms: </div>
                </AnimateStaging>
                <AnimateStaging>
                  <div> 3 Full, 1 Half</div>
                </AnimateStaging>
              </ContentCell>
              <ContentCell>
                <AnimateStaging>
                  <div>Home: </div>
                </AnimateStaging>
                <AnimateStaging>
                  <div> 3,620 sq. ft.</div>
                </AnimateStaging>
              </ContentCell>
              <ContentCell>
                <AnimateStaging>
                  <div>Lot: </div>
                </AnimateStaging>
                <AnimateStaging>
                  <div> 9,186 sq. ft.</div>
                </AnimateStaging>
              </ContentCell>
              <P>
                <AnimateStaging>
                  270 Castenada Avenue is a respectfully maintained and
                  upgraded, 1916 Forest Hill Home designed by renowned architect
                  Bernard Maybeck. <br />
                </AnimateStaging>
                <AnimateStaging>
                  Its architectural detail is a beautiful blend of English grand
                  hall, castle turret, massive fireplace, angled roof lines,
                  hand-hewn and hand-crafted detail, and elegant Japanese
                  influences. All of these features honoring the principles of
                  the Arts and Crafts movement that celebrated substance,
                  contemplation and essence over superficiality. <br />
                </AnimateStaging>
                <AnimateStaging>
                  No words can do justice describing this marvelous home. This
                  is a property that can be both a wonderful place to live and a
                  powerful inspiration. A once in a lifetime opportunity. <br />
                </AnimateStaging>
                <AnimateStaging>
                  270 Castenada Avenue is a prominent hilltop location with
                  commanding views, incredible natural rock formations, massive
                  Cypress trees and outstanding landscaping. <br />
                </AnimateStaging>
              </P>
            </ContentGrid>
          </div>
          <MoreInfo>
            <AnimateStaging>
              <i>*Per Tax Records</i>
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
