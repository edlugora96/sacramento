import styled, { css, keyframes } from "styled-components"
import { Link as GatsbyLink } from "gatsby"

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`

export const animation = css`
  ${fadeInUp} 0.5s ease-out both;
`

export const AnimateComponent = styled.section`
  animation: ${({ start }) => (start ? animation : "none")};
  visibility: ${({ start }) => (start ? "visible" : "hidden")};
`

const linkCss = css`
  color: ${({ dark }) => (dark ? "#3e4247" : "#fff")};
  &:hover {
    color: ${({ dark }) => (dark ? "#3e4247" : "#fff")};
  }
  &:hover span:after {
    width: 100%;
  }
  & span {
    cursor: pointer;
    position: relative;
  }
  & span:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: ${({ dark }) => (dark ? "1px" : "2px")};
    width: 0;
    background: ${({ dark }) => (dark ? "#ccc" : "#fff")};
    transition: all 0.5s ease;
  }
  ${({ outline }) =>
    outline &&
    `
    &:hover span:before {
      width: 100%;
    }
    & span:after {
      top: calc(100% + 1px);
      width: 100%;
      height: 2px;
    }
    & span:before {
      top: calc(100% + 1px);
      content: '';
      position: absolute;
      left: 0;
      bottom: 1px;
      height: 2px;
      width: 0;
      background: #3e4247;
      transition: all .5s ease;
      z-index: 2;
  }`}
`

export const BeautyLink = styled(GatsbyLink)`
  ${linkCss}
`

export const Link = styled.a`
  ${linkCss}
`

export const BeautyButton = styled.button`
  ${linkCss}
`

export const niceCss = css`
  max-width: fit-content;
  max-width: max-content;
  display: flex;
  border-radius: 0;
  outline: none;
  height: auto ;
  margin-bottom: 3px;
  margin-right: 5px;
  border: 1px solid #000;
  background-color: ${({ active }) => (active ? "#fff" : "#000")};
  padding: 15px 18px;
  color: ${({ active }) => (active ? "#000" : "#fff")} ;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  transition: all 0.3s ease-in;
  ${({ normal }) => normal && "font-size: 16px;"}
  ${({ smallX2 }) => smallX2 && "padding: 7px;"}
  ${({ smallX1 }) => smallX1 && "padding: 14px;"}
  ${({ alternative }) =>
    alternative &&
    `background-color: rgba(0,0,0,0.4); 
    border: 1px solid rgba(0,0,0,0.3) ;`}
  ${({ white }) =>
    white &&
    `
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  `}
  &:hover{
      background-color: #fff;
      color: #000;
      border: 1px solid #000;
  }
`

export const NiceBtn = styled.button`
  ${niceCss}
`
export const NiceLink = styled(GatsbyLink)`
  ${niceCss}
`
