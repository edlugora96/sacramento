import React from "react"
import {
  Header,
  HeaderBackground,
  BackgroundOpacity,
  Hero,
  HeaderMoreInfo,
} from "./style"
const Head = () => (
  <>
    <Header>
      <HeaderBackground />
      <BackgroundOpacity />
      <Hero>
        <div>
          <h1>3439 Sacramento</h1>
          <h3>$ 4,250,000</h3>
          <br />
        </div>
      </Hero>
      <HeaderMoreInfo>
        <div>
          <div>
            <span>4 Bedrooms</span>
            <span>3 Full Baths</span>
            <span>1 Half Bath</span>
            <span>3,620 sq. ft.</span>
          </div>
        </div>
        <div>
          <a>
            <span>Masterfully Designed and Inspired</span>
          </a>
        </div>
      </HeaderMoreInfo>
    </Header>
  </>
)

export default Head
