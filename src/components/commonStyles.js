import styled, { css } from "styled-components"
import { Link as GatsbyLink } from "gatsby"

const baseLinkStyles = css`
  color: ${props => (props.dark ? "#3e4247" : "#fff")};
  &:hover {
    color: ${props => (props.dark ? "#3e4247" : "#fff")};
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
    height: ${props => (props.dark ? "1px" : "2px")};
    width: 0;
    background: ${props => (props.dark ? "#ccc" : "#fff")};
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
  ${baseLinkStyles}
`

export const Link = styled.a`
  ${baseLinkStyles}
`
export const NiceBtn = styled.button`
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
    "background-color: rgba(0,0,0,0.4); border: 1px solid rgba(0,0,0,0.3);"}
  &:hover{
      background-color: #fff;
      color: #000;
      border: 1px solid #000;
  }

`
