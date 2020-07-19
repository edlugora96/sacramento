import styled from "styled-components"

export const LoadingPage = styled.div`
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  justify-items: center;
  align-items: center;
  z-index: 999999;
  & img {
    max-width: 320px;
  }
  transition: opacity 1s linear;
`
