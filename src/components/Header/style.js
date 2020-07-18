import styled from "styled-components"
import headerBackground from "../../assets/headerBackground.jpg"

export const Header = styled.header`
  background-color: #000;
  position: relative;
  min-height: 100vh;
  max-height: 100vh;
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
  }
  & > *:first-child {
    padding-left: 64px;
    padding-right: 36px;
    transition: background 0.5s;
    display: grid;
    background-color: rgba(0, 0, 0, 0.3);
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
    background-color: rgba(255, 255, 255, 0.5);
    display: grid;
    grid-column-gap: 1rem;
    align-items: center;
  }
  & > *:last-child a,
  & > *:last-child a:hover {
    color: #000;
  }
`

export const HeaderBackground = styled.div`
  min-height: 100vh;
  background-color: #000;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${headerBackground});
`

export const BackgroundOpacity = styled.div`
  background-color: #000;
  opacity: 0.4;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Hero = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: flex-start;
  align-items: end;
  color: #fff;
  text-align: center;
  padding-bottom: 100px;
  padding-left: 64px;
  z-index: 3;
  text-align: left;
`
