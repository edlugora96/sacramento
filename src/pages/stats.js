import React from "react"
import Header from "../components/Header"
import SEO from "../components/seo"
import styled from "styled-components"
import { AnimateStaging } from "../components/AnimateComponent"
import contourbg from "../assets/contourbg.png"

const Section = styled.section`
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  line-height: 1.4285em;
  box-sizing: inherit;
  display: block;
  position: relative;
  padding: 150px 0;
  background-color: #000;
  background-image: url(${contourbg});
  color: #fff;
  font-size: 18px;
  & article {
    max-width: 50%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    align-items: center;
  }
  & article section {
    height: 100%;
    padding: 2rem 1rem;
  }
  & article section:nth-child(2n) {
    border-left: 3px solid #fff;
  }
  & article section h3 {
    font-size: 30px;
  }
  & article section p {
    margin: 0;
  }
`

const SquarePoints = styled.div`
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  line-height: 1.4285em;
  color: #fff;
  font-size: 18px;
  box-sizing: inherit;
  position: absolute;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzJweCIgaGVpZ2h0PSI3MnB4IiB2aWV3Qm94PSIwIDAgNzIgNzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5kb3RzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Ik1haW4iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSIwMS4tSG9tZXBhZ2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjk4LjAwMDAwMCwgLTEwNzAuMDAwMDAwKSIgZmlsbD0iIzMwMzMzOSI+CiAgICAgICAgICAgIDxnIGlkPSIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAuMDAwMDAwLCAxMDcwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImRvdHMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExOTguMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMyIgY3g9IjIiIGN5PSIyIiByPSIyIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTMiIGN4PSIzNiIgY3k9IjIiIHI9IjIiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMyIgY3g9IjcwIiBjeT0iMiIgcj0iMiI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0zIiBjeD0iNzAiIGN5PSIzNiIgcj0iMiI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0zIiBjeD0iMiIgY3k9IjM2IiByPSIyIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTMiIGN4PSIzNiIgY3k9IjM2IiByPSIyIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTMiIGN4PSI3MCIgY3k9IjcwIiByPSIyIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTMiIGN4PSIyIiBjeT0iNzAiIHI9IjIiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMyIgY3g9IjM2IiBjeT0iNzAiIHI9IjIiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=)
    50% no-repeat;
  width: 72px;
  height: 72px;
  z-index: 0;
  left: ${({ left }) => (left ? "0" : "92%")};
  top: calc(100% - 155px);
`

const StatsTitle = styled.div`
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  line-height: 1.4285em;
  color: #fff;
  font-size: 18px;
  box-sizing: inherit;
  max-width: 50%;
  margin: 2rem auto;
  text-align: center;
`

const Stats = () => {
  return (
    <>
      <Header
        degEffect
        image="https://propertysonoma.com/media/headers4-25010e6ffc855f2562ab36ba939c2b68.jpg"
      >
        <h2>Kirk and Peggy Team Stats</h2>
      </Header>
      <SEO title="Success statistics for Kirk and Peggy Economos, a dynamic husband and wife real estate team." />
      <Section>
        <SquarePoints />
        <SquarePoints left />
        <AnimateStaging>
          <StatsTitle>
            <h1>Team Highlights</h1>
            <p>Kirk and Peggy Team Stats</p>
          </StatsTitle>
        </AnimateStaging>
        <article>
          <AnimateStaging>
            <h3>$550M+</h3>
            <p>Sales Volume</p>
          </AnimateStaging>
          <AnimateStaging>
            <h3>#23</h3>
            <p>
              Team Ranking in WSJ Top
              <br />
              1000 US Real Estate Agents
            </p>
          </AnimateStaging>
          <AnimateStaging>
            <h3>450+</h3>
            <p>Number of Transactions</p>
          </AnimateStaging>
          <AnimateStaging>
            <h3>#1</h3>
            <p>
              2011 Most Expensive Home
              <br />
              Sold in San Francisco $28M
            </p>
          </AnimateStaging>
          <AnimateStaging>
            <h3>#1</h3>
            <p>
              2013 Most Expensive Home
              <br />
              Sold in San Francisco $18M
            </p>
          </AnimateStaging>
          <AnimateStaging>
            <h3>#1</h3>
            <p>
              2014 Most Expensive Condo/Coop
              <br />
              Sold in San Francisco $10M
            </p>
          </AnimateStaging>
        </article>
        <AnimateStaging>
          <StatsTitle>
            <h1>COMPASS</h1>
            <p>Company Highlights</p>
          </StatsTitle>
        </AnimateStaging>
        <article>
          <AnimateStaging>
            <h3>11K+</h3>
            <p>Number of Compass agents nationwide</p>
          </AnimateStaging>
          <AnimateStaging>
            <h3>250+</h3>
            <p>Number of Compass ofﬁces</p>
          </AnimateStaging>
          <AnimateStaging>
            <h3>120+</h3>
            <p>Number of Compass markets</p>
          </AnimateStaging>
          <AnimateStaging>
            <h3>$45B+</h3>
            <p>Total sales volume to date</p>
          </AnimateStaging>
          <AnimateStaging>
            <h3>#1</h3>
            <p>
              Compass ranking of
              <br />
              national independent brokers
            </p>
          </AnimateStaging>
          <AnimateStaging>
            <h3>$6.4B</h3>
            <p>Our company valuation</p>
          </AnimateStaging>
          <AnimateStaging>
            <h3>1.9M+</h3>
            <p>
              Average monthly page views
              <br />
              on Compass.com
            </p>
          </AnimateStaging>
          <AnimateStaging>
            <h3>$900M+</h3>
            <p>Our total revenue to date</p>
          </AnimateStaging>
        </article>
      </Section>
    </>
  )
}

export default Stats
