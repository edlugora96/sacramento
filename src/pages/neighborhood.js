import React from "react"
import styled, { css } from "styled-components"
import { AnimateStaging } from "../components/AnimateComponent"
import Header from "../components/Header"
import headerImageNeighborhoodPage from "../assets/gallery/001.jpg"
import SEO from "../components/seo"
// import { NeighborhoodImage } from "../components/images"

const NeighborhoodView = styled.section`
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  max-width: 700px;
  transition: all 0.3s;
  padding-bottom: 20px;
`

const sectionCss = css`
  padding: 12px;
  color: rgba(0, 0, 0, 0.87);
  font-size: 1rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  letter-spacing: 0.00938em;
  margin: 0 0 1em;
  line-height: 1.4285em;
  margin-bottom: 0;
  text-align: justify;
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
    text-align: justify;
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
    text-align: justify;
  }
  & li {
    margin-bottom: 1rem;
  }
`

const Section = styled.section`
  ${sectionCss}
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
const I = styled.i`
  opacity: 0.5;
`

const NeighborhoodPage = () => {
  return (
    <>
      <SEO
        title="Neighborhood"
        description=": Presidio Heights, San Francisco’s relaxed, upscale family neighborhood that boasts luxury homes and premier shops and restaurants"
      />
      <Header degEffect image={headerImageNeighborhoodPage}>
        <h2>Neighborhood</h2>
      </Header>
      <NeighborhoodView>
        <AnimateStaging>
          <H2>Neighborhood</H2>
        </AnimateStaging>
        {/* <AnimateStaging>
          <Section>
            <NeighborhoodImage />
          </Section>
        </AnimateStaging> */}
        <AnimateStaging>
          <Section>
            <p>
              <h3>The San Francisco Neighborhood of Presidio Heights</h3>
              <h4>Inside Perspective</h4>
              <p>
                Presidio Heights is Pacific Heights without the pretension.
                While some of the grandest homes in the city are found in this
                neighborhood, including the cluster of mansions circled around
                the gated enclave of Presidio Terrace, Presidio Heights is very
                much a family-friendly community. You can find families with
                young kids picnicking in the Presidio or romping through the
                nearby Julius Kahn Playground. Browse our selection of Presidio
                Heights homes for sale.
              </p>
            </p>
          </Section>
        </AnimateStaging>
        <AnimateStaging>
          <Section>
            <p>
              <p>
                The older, established homes along the wide, quiet streets of
                Presidio Heights are mainly two-story, large, and complete with
                front and back yards. This is a primarily residential
                neighborhood, with nearby shopping to be found in the adjoining
                Laurel District.
              </p>
            </p>
          </Section>
        </AnimateStaging>
        <AnimateStaging>
          <Section>
            <p>
              <p>
                This is an ecumenical neighborhood. The stately dome of Temple
                Emanu-El, the Jewish synagogue is just around the corner from
                the Little Sisters of the Poor on Lake Street. Farther down
                California Street in Laurel Heights, the Jewish Community Center
                of San Francisco welcomes all to its first-rate health club and
                nightly performance series of dance, music, and theater. Across
                the street, Ella's is much loved for its unpretentious comfort
                food and weekend brunch. Upscale restaurants clustered on
                Sacramento Street include Spruce and Sociale. The intimate G
                Bar, oozing with ambiance, makes a great place to meet for
                martinis.
              </p>
            </p>
          </Section>
        </AnimateStaging>
        <Section>
          <AnimateStaging>
            <h3>Key Details</h3>
          </AnimateStaging>
          <ul>
            <li>
              <AnimateStaging>
                <b>THE NEIGHBORS</b>
                <p>
                  Successful tech moguls who enjoy a more refined sense of
                  living.
                </p>
              </AnimateStaging>
            </li>
            <li>
              <AnimateStaging>
                <b>WHAT TO EXPECT</b>
                <p>An upscale-yet-muted family environment.</p>
              </AnimateStaging>
            </li>
            <li>
              <AnimateStaging>
                <b>THE LIFESTYLE</b>
                <p>
                  Quiet and elegant, with close proximity to shopping and
                  dining.
                </p>
              </AnimateStaging>
            </li>
            <li>
              <AnimateStaging>
                <b>UNEXPECTED APPEAL</b>
                <p>
                  A high-end neighborhood removed from the buzz of the city.
                </p>
              </AnimateStaging>
            </li>
            <li>
              <AnimateStaging>
                <b>THE MARKET</b>
                <p>
                  This neighborhood has more than its share of eight-figure
                  homes and inventory can be hard to come by.
                </p>
              </AnimateStaging>
            </li>
            <li>
              <AnimateStaging>
                <b>YOU'LL FALL IN LOVE WITH</b>
                <p>
                  The opulent environment without the buzziness of a
                  world-famous neighborhood.
                </p>
              </AnimateStaging>
            </li>
          </ul>
        </Section>
        <Section>
          <AnimateStaging>
            <h3>Shops Near 3439 Sacramento St:</h3>
          </AnimateStaging>
          <AnimateStaging>
            <p>
              Home Goods, Interior Design, Jewelry, Art and Antiques, Clothing,
              Toys, Children Stores, Hardware, Cookware, Beauty Care, Cleaners
              and more.
            </p>
          </AnimateStaging>
        </Section>
        <Section>
          <AnimateStaging>
            <h3>Restaurants Near 3439 Sacramento St:</h3>
          </AnimateStaging>
          <AnimateStaging>
            <p>
              <b>
                Garibaldis Restaurant <br />
              </b>
              347 Presidio Ave <br />
              San Francisco, CA 94115 <br />
            </p>
          </AnimateStaging>
        </Section>
        <Section>
          <AnimateStaging>
            <p>
              <b>Sociale</b>
              <br />
              3665 Sacramento St
              <br />
              San Francisco, CA 94118
              <br />
            </p>
          </AnimateStaging>
        </Section>
        <Section>
          <AnimateStaging>
            <p>
              <b>
                Spruce <br />
              </b>
              3640 Sacramento St <br />
              San Francisco, CA 94118 <br />
            </p>
          </AnimateStaging>
        </Section>
        <Section>
          <AnimateStaging>
            <p>
              <b>Magic Flute Restaurant</b>
              <br />
              3673 Sacramento St
              <br />
              San Francisco, CA 94118
              <br />
            </p>
          </AnimateStaging>
        </Section>
        <Section>
          <AnimateStaging>
            <p>
              <b>Vixi Cucina Italiana</b>
              <br />
              3611 California St
              <br />
              San Francisco, CA 94118
              <br />
            </p>
          </AnimateStaging>
        </Section>
        <Section>
          <AnimateStaging>
            <p>
              <b>Sorrel</b>
              <br />
              3228 Sacramento St
              <br />
              San Francisco, CA 94115
              <br />
            </p>
          </AnimateStaging>
        </Section>
        <Section>
          <AnimateStaging>
            <p>
              <b>Smokin' Warehouse Barbecue</b>
              <br />
              3336 Sacramento St
              <br />
              San Francisco, CA 94118
              <br />
            </p>
          </AnimateStaging>
        </Section>
        <Section>
          <AnimateStaging>
            <I>
              Upscale, Luxury, Tech, Affluent, Mansions, Sophisticated,
              Exclusive
            </I>
          </AnimateStaging>
        </Section>
      </NeighborhoodView>
    </>
  )
}

export default NeighborhoodPage
