import styled from "styled-components"
import backgroundSection from "../../assets/contourbg.png"
import { Link as GatsbyLink } from "gatsby"

export const SectionLinkingBeauty = styled(GatsbyLink)`
  background-color:  ${({ dark }) => (dark ? "#000" : "#fff")} ;
  display: block;
  padding-bottom: 21px;
   ${({ dark }) => dark && `background-image:url(${backgroundSection});`} 
  color: ${({ dark }) => (dark ? "#fff" : "#000")} ;
  text-align: center;
  & h2 {
    margin-bottom: 0;
    margin-top: 0;
    padding: 20px 0;
    color: ${({ dark }) => (dark ? "#fff" : "#000")} ;
    z-index: 5;
    position: relative;
    text-align: center;
    font-size: 3rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.04;
    letter-spacing: 0em;
    margin: 0;
  }
  & svg {
    color: ${({ dark }) => (dark ? "#fff" : "rgba(0, 0, 0, 0.54);")} ;
  }
`

export const ArrowButton = styled.button`
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;

  flex: 0 0 auto;
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;

  color: #fff;

  -webkit-appearance: button;

  & > span {
    width: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
  }

  & svg {
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
  }
`
