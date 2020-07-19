import React, { useState } from "react"
import Slick from "react-slick"

import { Slider, SliderOverlay } from "./style"
import ReactDOM from "react-dom"
import { BtnOpenOverlay, BtnCloseOverlay } from "./Buttons"
import { AnimateStaging } from "../AnimateComponent"

const mainSlider = {
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
  autoplay: true,
  dots: false,
  arrows: true,
  asNavFor: ".thumbs-single-property",
  prevArrow: `<svg style="left: 0; transform: rotateZ(180deg);" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#fff" d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>`,
  nextArrow: `<svg style="right: 0;" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#fff" d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>`,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        adaptiveHeight: false,
      },
    },
  ],
}

const optsThumbnails = {
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: ".slider-single-property",
  dots: false,
  arrows: false,
  focusOnSelect: true,
}
const attrThumbnails = {
  assNavFor: { attr: { className: "thumbs-single-property" } },
  thumbs: true,
}

const overlayOptions = {
  dots: true,
  arrows: true,
  asNavFor: ".thumbs-single-property",
  prevArrow: `<svg style="left: 0; transform: rotateZ(180deg);" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#fff" d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>`,
  nextArrow: `<svg style="right: 0;" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#fff" d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>`,
}

const OverlaySlick = ({ setOpenOverlay, children }) => {
  // const classes = useStyles();
  console.log(document.querySelector("#portal"))
  return ReactDOM.createPortal(
    <SliderOverlay>
      <Slick
      // dark
      // opts={overlayOptions}
      // attr={{ className: styles.slider }}
      // position="fixed"
      // zIndex={10}
      >
        {children}
      </Slick>
      <BtnCloseOverlay onClick={() => setOpenOverlay(false)} />
    </SliderOverlay>,
    document.querySelector("#portal")
  )
}
const Gallery = ({ children }) => {
  const [openOverlay, setOpenOverlay] = useState(false)
  return (
    <Slider>
      <AnimateStaging>
        {openOverlay && (
          <OverlaySlick setOpenOverlay={setOpenOverlay}>
            {children()}
          </OverlaySlick>
        )}
        <BtnOpenOverlay onClick={() => setOpenOverlay(true)} />
        <Slick
        // opts={mainSlider}
        // attr={{ className: "slider-single-property" }}
        >
          {children({ setOpenOverlay })}
        </Slick>
        <Slick
        // {...attrThumbnails}
        // opts={optsThumbnails}
        // attr={{ className: "thumbs-single-property" }}
        >
          {children()}
        </Slick>
      </AnimateStaging>
    </Slider>
  )
}

export default Gallery
