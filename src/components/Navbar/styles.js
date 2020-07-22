import styled from "styled-components"
import logoNavbar from "../../assets/logoNavbar.png"
import { mediaQuery } from "../../lib/utils"

export const Nav = styled.nav`
  position: ${({ landscape }) => (landscape ? "absolute" : "fixed")} ;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({ landscape }) => (landscape ? "4" : "9")} ;
  padding: 25px;
  transition: all 0.5s ease;
  display: grid;
  grid-template-columns: 35px 1.3fr 1.3fr minmax(50px, 550px) 1fr 1fr 2fr;
  grid-column-gap: 1rem;
  justify-items: center;
  align-items: center;
  max-height: 116px;
  background-size: 20rem;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.25);
  background-image: url(${logoNavbar});
  & > * {
    text-decoration: none;
    color: #fff;
    max-height: 36px;
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
  }
  ${({ scrolled }) =>
    scrolled &&
    `
    background-color: #000;
    padding: 20px;
    `}
  @media screen and (max-width: ${mediaQuery.phone}px) {
    grid-template-columns: 35px 1fr;
    padding: 20px;
    background-size: 14rem;
  }
`

export const HamburgerMenu = styled.span`
  &,
  & * {
    cursor: pointer;
  }
  i {
    background-color: #fff;
    border-radius: 3px;
    content: "";
    display: block;
    height: 4px;
    margin: 4px 0;
    width: 100%;
    max-width: 35px;
    transition: all 0.2s ease-in-out;
  }
  &:before,
  &:after {
    background-color: #fff;
    border-radius: 3px;
    content: "";
    display: block;
    height: 4px;
    margin: 4px 0;
    width: 100%;
    max-width: 35px;
    transition: all 0.2s ease-in-out;
  }
`
