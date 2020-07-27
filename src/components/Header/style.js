import styled from "styled-components"
import imageDefault from "../../assets/kirkpeggylulu.png"
import { mediaQuery } from "../../lib/utils"

export const Header = styled.header`
  background-color: #000;
  position: relative;
  min-height: 100vh;
  & > div > h2 {
    display: block;
    color: #fff;
    text-align: left;
    margin: 10px 0 15px;
    font-size: 45px;
    margin-left: 115px;
    margin-bottom: 2.5rem;
  }
`

export const HeaderMoreInfo = styled.div`
  bottom: 0;
  position: absolute;
  display: grid;
  z-index: 5;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  left: 0;
  & > * {
    align-items: center;
    padding: 30px 50px;
    font-size: 18px;
    color: #fff;
    @media screen and (max-width: ${mediaQuery.phone}px) {
      padding-left: 10px !important;
      padding-right: 10px !important;
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
  }
  & > *:first-child {
    padding-left: 64px;
    padding-right: 36px;
    transition: background 0.5s;
    display: grid;
    background-color: ${({ scrolled }) =>
      scrolled ? "#000" : "rgba(0, 0, 0, 0.3)"};
  }
  & > *:first-child div > span {
    border-right: 1px solid #fff;
    margin-right: 1rem;
    padding-right: 1rem;
  }
  & > *:first-child div > span:last-child {
    border-right: 0;
  }
  & > *:last-child {
    transition: all 0.5s;
    background-color: ${({ scrolled }) =>
      scrolled ? "#fff" : "rgba(255, 255, 255, 0.5)"};
    display: grid;
    grid-column-gap: 1rem;
    align-items: center;
  }
  & > *:last-child a,
  & > *:last-child a:hover {
    color: #000;
  }
  @media screen and (max-width: ${mediaQuery.phone}px) {
    display: block;
    position: static;
  }
`

export const HeaderBackground = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  background-color: #000;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ image }) => image || imageDefault});
`

export const BackgroundOpacity = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  ${({ degEffect }) =>
    degEffect
      ? `
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 50%;
  background: linear-gradient( 180deg, transparent, rgba(0, 0, 0, 0.4) 68%, rgba(0, 0, 0, 0.65) 86%, rgba(0, 0, 0, 0.95) );
  bottom: 0;
  
  `
      : `
  top: 0;
  background-color: #000;
  opacity: 0.4;
  
  `}
`

export const Hero = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  justify-items: flex-start;
  align-items: end;
  color: #fff;
  text-align: center;
  padding-bottom: 100px;
  padding-left: 64px;
  z-index: 3;
  text-align: left;
  @media screen and (max-width: ${mediaQuery.phone}px) {
    padding-left: 30px;
    padding-bottom: 30px;
  }
  & > h2 {
    @media screen and (max-width: ${mediaQuery.phone}px) {
      margin-left: 0 !important;
      font-size: 40px !important;
    }
  }
  & div > h1 {
    font-weight: 100;
  }
  & div > h3 {
    padding-bottom: 3rem;
  }
`
