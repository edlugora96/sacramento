import React from "react"
import Header from "../components/Header"
import SEO from "../components/seo"
import styled from "styled-components"
import { AnimateStaging } from "../components/AnimateComponent"
import { mediaQuery } from "../lib/utils"

const Section = styled.section`
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
  box-sizing: inherit;
  animation: _2EUva3a2rL1Pp_GQI0eHy- 0.5s ease-out both;
  background-color: #fff;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 65px 50px 40px 50px;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
  visibility: visible !important;
  animation-name: _2EUva3a2rL1Pp_GQI0eHy- !important;
  @media screen and (max-width: ${mediaQuery.phone}px) {
    padding: 1rem;
    display: block;
  }
  & img {
    max-width: 320px;
    width: 100%;
  }
  & p {
    font-size: 18px;
    line-height: 24px;
    margin: 0 0 1em;
  }
  & article {
    font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
    line-height: 1.4285em;
    color: rgba(0, 0, 0, 0.87);
    visibility: visible !important;
    box-sizing: inherit;
    display: block;
    font-size: 18px;
    margin-bottom: 40px;
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: transparent
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAHklEQVQYlWP4TyRgGLYKHzx48P/BgwdUVEi01fgAAGqmjQyPQc1nAAAAAElFTkSuQmCC)
      repeat;
    display: block;
  }
`

const AboutUs = () => {
  return (
    <>
      <Header
        degEffect
        image="https://propertysonoma.com/media/headers9-0570c7e949e7d10a946168158775dbd0.jpg"
      >
        <h2>KIRK AND PEGGY</h2>
      </Header>
      <SEO title="Meet the husband and wife real estate team, Kirk and Peggy Economos" />
      <Section>
        <AnimateStaging>
          <img src="https://propertysonoma.com/media/peggy-378b10927799968caf4f4e0eda30b40c.jpg" />
        </AnimateStaging>
        <article>
          <AnimateStaging>
            <h1 id="peggyeconomos">Peggy Economos</h1>
          </AnimateStaging>
          <AnimateStaging>
            <p>
              With 30 years of representing clients in selling and purchasing
              exceptional homes, Peggy Economos has earned the status of being
              one of the most successful and admired real estate professionals
              in the Bay Area.
            </p>
          </AnimateStaging>
          <AnimateStaging>
            <p>
              Success to Peggy is more than just the hundreds of millions of
              dollars of transactions she has closed. She has forged lifelong
              relationships with her customers based on dedication to their
              interests, a warm and friendly nature and unquestionable fair
              dealings. She is sophisticated and charming yet conveys a down to
              earth Midwest manner that values substance far more than pretense.
            </p>
          </AnimateStaging>
          <AnimateStaging>
            <p>
              Peggy was a founding member of the Pacific Union’s (now Compass’)
              Estates Division, a group of about 200 agents within the company
              that specialize in luxury properties. She completed nearly ten
              years as Director of the division that has put her at the
              forefront of luxury market properties, information, conditions and
              trends.
            </p>
          </AnimateStaging>
          <AnimateStaging>
            <p>
              Peggy has been ranked among the top selling real estate agents in
              San Francisco and the Bay Area for her entire career. In 1998 she
              was recognized by the San Francisco Chronicle as the city’s “Best
              Agent.” Throughout her career she has been recognized by the
              company as one of their very top producers.
            </p>
          </AnimateStaging>
          <AnimateStaging>
            <p>Contact Info:</p>
            <p>
              Number Phone: <a href="tel:415-271-6390">(415) 271-6390</a>
            </p>
            <p>DRE#: 00978773</p>
            <p>
              Email:{" "}
              <a href="mailto:Peggy.Economos@Compass.com">
                Peggy.Economos@Compass.com
              </a>
            </p>
          </AnimateStaging>
        </article>
      </Section>
      <Section>
        <article>
          <AnimateStaging>
            <h1 id="kirkeconomos">Kirk Economos</h1>
          </AnimateStaging>
          <AnimateStaging>
            <p>
              Kirk became licensed as California real estate agent in 1980. He
              has a remarkable breadth and depth of expertise and experience in
              many areas of the real estate industry. This includes:
            </p>
          </AnimateStaging>
          <ul>
            <li>
              <AnimateStaging>
                <p>
                  Commercial and residential real estate transactions that
                  include homes as well as industrial, commercial, hotel and
                  investment properties,…
                </p>
              </AnimateStaging>
            </li>
            <li>
              <AnimateStaging>
                <p>
                  Mortgage financing of commercial properties through major
                  insurance companies and banks, and…
                </p>
              </AnimateStaging>
            </li>
            <li>
              <AnimateStaging>
                <p>
                  Development, investment, and management of commercial real
                  estate projects…
                </p>
              </AnimateStaging>
            </li>
          </ul>
          <AnimateStaging>
            <p>
              Kirk is a Certified Commercial Investment Member, “CCIM”. In order
              to earn this qualification CCIM candidates must undergo years of
              rigorous qualification that includes both education and proven
              experience in the analysis and feasibility of real estate
              transactions and markets.
            </p>
          </AnimateStaging>
          <AnimateStaging>
            <p>
              There are only about 15,000 CCIMs worldwide and they are
              recognized as experts in investment and financial aspects of real
              estate.
            </p>
          </AnimateStaging>
          <AnimateStaging>
            <p>
              Kirk Economos is skilled in computer science and information
              technology. He is an accomplished photographer and has also worked
              professionally in graphic design, web design and advertising.
            </p>
          </AnimateStaging>
          <AnimateStaging>
            <p>Contact Info:</p>
            <p>
              Number Phone: <a href="tel:707-931-9841">(707) 931-9841</a>
            </p>
            <p>DRE#: 00649468</p>
            <p>
              Email:{" "}
              <a href="mailto:Kirk.Economos@Compass.com">
                Kirk.Economos@Compass.com
              </a>
            </p>
          </AnimateStaging>
        </article>
        <AnimateStaging>
          <img src="https://propertysonoma.com/media/kirk-e29cdc10863d900e447d184c1ddccd62.jpg" />
        </AnimateStaging>
      </Section>
    </>
  )
}

export default AboutUs
