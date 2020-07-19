import React, { useState, useEffect } from "react"
import Slick from "react-slick"
import { Slider, SliderOverlay } from "./style"
import ReactDOM from "react-dom"
import { BtnOpenOverlay, BtnCloseOverlay } from "./Buttons"
import { observer } from "mobx-react"
import { useStore } from "../../lib/store"
import { CSSTransition } from "react-transition-group"

const PrevArrow = props => (
  <svg
    {...props}
    style={{ left: 0, transform: " rotateZ(180deg)" }}
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
  >
    <path
      fill="#fff"
      d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
    />
  </svg>
)
const NextArrow = props => (
  <svg
    {...props}
    style={{ right: 0 }}
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
  >
    <path
      fill="#fff"
      d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
    />
  </svg>
)

const OverlaySlick = observer(({ openOverlay, setOpenOverlay, children }) => {
  const { currentMainSlide } = useStore()
  return ReactDOM.createPortal(
    <CSSTransition
      in={openOverlay}
      classNames="fade-in-out"
      unmountOnExit
      timeout={300}
    >
      <SliderOverlay>
        <Slick
          initialSlide={currentMainSlide}
          dots={false}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
        >
          {children}
        </Slick>
        <BtnCloseOverlay onClick={() => setOpenOverlay(false)} />
      </SliderOverlay>
    </CSSTransition>,
    document.querySelector("#portal")
  )
})
const Gallery = ({ children }) => {
  const [openOverlay, setOpenOverlay] = useState(false)
  const [loadOverlay, setLoadOverlay] = useState(false)
  const [mainSlider, setMainSlider] = useState(null)
  const [thumbsSlider, setThumbsSlider] = useState(null)
  const { currentMainSlide, setCurrentMainSlide } = useStore()
  useEffect(() => {
    setLoadOverlay(true)
  }, [])
  return (
    <Slider>
      <div>
        {loadOverlay && (
          <OverlaySlick
            openOverlay={openOverlay}
            setOpenOverlay={setOpenOverlay}
          >
            {children}
          </OverlaySlick>
        )}

        <BtnOpenOverlay onClick={() => setOpenOverlay(true)} />
        <Slick
          initialSlide={currentMainSlide}
          autoplay={true}
          ref={mainSliderRef => setMainSlider(mainSliderRef)}
          asNavFor={thumbsSlider}
          dots={false}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
          beforeChange={(current, next) => setCurrentMainSlide(next)}
        >
          {children}
        </Slick>
        <Slick
          initialSlide={currentMainSlide}
          ref={thumbsSliderRef => setThumbsSlider(thumbsSliderRef)}
          asNavFor={mainSlider}
          slidesToShow={7}
          arrows={false}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {children}
        </Slick>
      </div>
    </Slider>
  )
}

export default Gallery
