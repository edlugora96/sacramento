import React from "react"
import Header from "../components/Header"
import headerImageContactPage from "../assets/gallery/270_26.jpg"
import GoogleMaps from "../components/GoogleMaps"
import { AnimateStaging } from "../components/AnimateComponent"
import ContactForm from "../components/ContactForm"
import ContactMoreInfo from "../components/ContactMoreInfo"
import SEO from "../components/seo"
import styled from "styled-components"

const ContactView = styled.div`
  position: relative;
  & > div {
    padding: 1rem !important;
    top: 3rem !important;
    left: 0 !important;
    position: absolute !important;
    z-index: 3;
    max-width: 500px;
  }
  & > div > div {
    width: auto !important;
  }
`

const Contact = ({ data }) => {
  return (
    <>
      <Header degEffect image={headerImageContactPage}>
        <h2>Schedule a Showing - Contact</h2>
      </Header>
      <SEO title="Schedule a Showing - Contact" />
      <br />
      <AnimateStaging>
        <ContactView>
          <div>
            <ContactForm />
            <ContactMoreInfo />
          </div>
          <GoogleMaps zoom={14} />
        </ContactView>
      </AnimateStaging>
      <br />
    </>
  )
}

export default Contact
