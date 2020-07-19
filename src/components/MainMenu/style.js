import styled, { keyframes, css } from "styled-components"

export const menuAnimation = keyframes`
0% {
  opacity: 0;
  transform: scale(0.04) translateY(300%);
}
40% {
  transform: scale(0.04) translateY(0);
  transition: ease-out;
}
40% {
  transform: scale(0.04) translateY(0);
}
60% {
  opacity: 1;
  transform: scale(0.02) translateY(0px);
}
61% {
  transform: scale(0.04);
}
99.9% {
  height: 0;
  padding-bottom: 100%;
  border-radius: 100%;
}
100% {
  transform: scale(2);
  height: 100%;
  padding-bottom: 0;
  border-radius: 0;
}
`
export const menuAnimationCss = css`
  ${menuAnimation} 0.5s ease-out forwards;
`
export const MainMenu = styled.div`
  z-index: 8;
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background: rgba(0, 0, 0, 0.98);
    width: 100%;
    z-index: 7;
    height: 0;
    padding-bottom: 100%;
    border-radius: 100%;
    transform: scale(0.04) translateY(9999px);
    overflow: hidden;
  }
  ${({ menuOpen }) => menuOpen && `top: 0; `}

  &:before {
    animation: ${({ menuOpen }) => (menuOpen ? menuAnimationCss : "none")};
  }

  & nav {
    list-style: none;
    margin: 0;
    padding: 0;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    position: fixed;
    top: 115px;
    width: 100%;
    height: calc(100% - 117px);
    backface-visibility: hidden;
    perspective: 1000px;
    color: #fff;
    z-index: 7;
  }

  & nav a,
  & nav button {
    display: block;
    cursor: pointer;
    padding: 6px 20px;
    font-size: 18px;
    transition: opacity 0.5s ease-in-out;
    transition-delay: 5s;
  }
  & nav button {
    margin-left: 20px;
    padding: 7px;
  }
  & a + div {
    opacity: 0;
    position: absolute;
    transform: translate(-50%, -75%);
    left: 150px;
    transition: all 0.5s ease-in-out;
  }
  & a:hover + div {
    opacity: 1;
    transform: translate(5%, -75%);
  }
  & a + div:hover {
    opacity: 1;
    transform: translate(5%, -75%);
  }
`
