import styled from "styled-components"

export const Footer = styled.footer`
  background-color: #fff;
  position: relative;
  display: grid;
  padding: 65px 50px;
  & div:first-child {
    grid-area: sitemap;
    display: flex;
    flex-flow: column;
  }
  & * {
    line-height: 24px;
  }
  & div > div:first-child {
    margin-bottom: 1rem;
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
