import styled from "styled-components"
import { mediaQuery } from "../../lib/utils"

export const ContactMoreInfoView = styled.div`
  grid-area: contact;
  display: grid;
  grid-template-columns: 1fr 2fr;
  & * {
    color: #000 !important;
    @media screen and (max-width: ${mediaQuery.phone}px) {
      margin-bottom: 1rem;
    }
  }
  @media screen and (max-width: ${mediaQuery.phone}px) {
    display: block;
  }
`
