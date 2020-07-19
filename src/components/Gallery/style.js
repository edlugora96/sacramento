import styled from "styled-components"

export const Slider = styled.section`
  width: 100%;
  text-align: center;
  background-color: #fff;
  padding: 7rem;
  & > div,
  & > section {
    max-width: 700px;
    margin: 0 auto;
    position: relative;
  }
  & .slick-slider svg {
    display: block;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    top: calc(50% - 13px);
    transition: all 0.2s ease-in;
  }
  & .slick-slider:hover svg {
    opacity: 1;
  }
  & .slick-slider + .slick-slider {
    margin-top: 5px;
  }
`
export const SliderOverlay = styled.div`
  transition: opacity 0.3s linear;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.9);
  & .slick-slider svg {
    display: block;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    top: calc(50vh - 13px);
    transition: all 0.2s ease-in;
  }
  & .slick-slider:hover svg {
    opacity: 1;
  }
  & .slick-slide img {
    width: auto !important;
    height: 100vh !important;
    max-width: 80%;
    transform: translate(-50%, 0);
    left: 50% !important;
  }
`
export const ButtonCloseOverlay = styled.button`
  border: 0;
  cursor: pointer;
  margin: 0;
  display: flex;
  outline: 0;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;

  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;

  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  background-color: #e0e0e0;

  padding: 8px 22px;
  font-size: 0.9375rem;

  left: 50%;
  bottom: 25px;
  height: auto;
  z-index: 12;
  position: fixed;

  -webkit-appearance: button;

  &:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color: #d5d5d5;
  }

  & span {
    width: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
  }
`

export const ButtonOpenOverlay = styled.button`
  border: 0;
  cursor: pointer;
  margin: 0;
  display: flex;
  outline: 0;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;

  color: rgba(0, 0, 0, 0.87);
  width: 56px;
  height: 56px;
  padding: 0;
  font-size: 0.875rem;
  min-width: 0;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  min-height: 36px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 50%;
  letter-spacing: 0.02857em;
  text-transform: uppercase;

  top: 10px;
  right: 10px;
  z-index: 10;
  position: absolute;
  background-color: #fff;

  -webkit-appearance: button;

  &:hover {
    text-decoration: none;
    background-color: #d5d5d5;
  }

  &:active {
    box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2),
      0px 12px 17px 2px rgba(0, 0, 0, 0.14),
      0px 5px 22px 4px rgba(0, 0, 0, 0.12);
  }
  & > * {
    cursor: pointer;
  }
  & span {
    width: 21px;
    height: 21px;
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
    overflow: hidden;
  }
`
