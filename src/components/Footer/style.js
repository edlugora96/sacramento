import styled from "styled-components"
import { mediaQuery } from "../../lib/utils"

export const Footer = styled.footer`
  background-color: #fff;
  position: relative;
  display: flex;
  padding: 65px 50px;
  flex-direction: column;
  & section:first-child {
    grid-area: sitemap;
    display: flex;
    flex-flow: column;
  }
  & section:last-child {
    grid-area: shareBtn;
  }
  & section:nth-child(2) {
    grid-area: address;
  }
  & * {
    line-height: 24px;
  }
  & section > div:first-child {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: ${mediaQuery.phone}px) {
    padding: 1rem;
  }
`
export const ContactSection = styled.section`
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 2fr minmax(250px, 360px) 1fr 1fr;
  grid-template-rows: 160px 1fr;
  grid-template-areas:
    "sitemap address company filla filla"
    "sitemap phone shareBtn filla filla";
  grid-column-gap: 1rem;
  @media screen and (max-width: ${mediaQuery.phone}px) {
    display: block;
  }
`
export const PhoneArea = styled.p`
  grid-area: phone;
  display: flex;
  flex-flow: column;
`

export const ShareBtnArea = styled.section`
  width: 100%;
  grid-area: shareBtn;
`

export const CompanyArea = styled.section`
  grid-area: company;
`
