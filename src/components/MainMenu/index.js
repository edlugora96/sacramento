import React from "react"
import { NiceBtn, BeautyLink } from "../commonStyles"
import { MainMenu } from "./style"
import { observer } from "mobx-react"
import { useStore } from "../../lib/store"
import { AnimateStaging } from "../AnimateComponent"

const Menu = observer(() => {
  const { menuOpen, toggleMenu, landscape } = useStore()
  return (
    <MainMenu menuOpen={menuOpen} landscape={landscape}>
      <nav>
        <AnimateStaging disconnect={false} delay={500}>
          <NiceBtn white onClick={toggleMenu}>
            Close
          </NiceBtn>
        </AnimateStaging>
        <AnimateStaging disconnect={false} delay={500}>
          <BeautyLink to="/">
            <span>Home</span>
          </BeautyLink>
        </AnimateStaging>
        <BeautyLink>
          <AnimateStaging disconnect={false} delay={500}>
            Kirk and Peggy
            <i></i>
          </AnimateStaging>
        </BeautyLink>

        <div>
          <BeautyLink to="/about-us">
            <span>About Kirk and Peggy</span>
          </BeautyLink>
          <BeautyLink to="/stats">
            <span>Kirk and Peggy stats</span>
          </BeautyLink>
        </div>
        <AnimateStaging disconnect={false} delay={500}>
          <BeautyLink to="/gallery">
            <span>Gallery</span>
          </BeautyLink>
        </AnimateStaging>

        <AnimateStaging disconnect={false} delay={500}>
          <BeautyLink to="/features">
            <span>Features</span>
          </BeautyLink>
        </AnimateStaging>
        <AnimateStaging disconnect={false} delay={500}>
          <BeautyLink to="/virtual-tour">
            <span>Virtual tour</span>
          </BeautyLink>
        </AnimateStaging>
        <AnimateStaging disconnect={false} delay={500}>
          <BeautyLink to="/contact">
            <span>Schedule a showing</span>
          </BeautyLink>
        </AnimateStaging>
        <AnimateStaging disconnect={false} delay={500}>
          <BeautyLink to="/neighborhood">
            <span>Neighborhood</span>
          </BeautyLink>
        </AnimateStaging>
        <AnimateStaging disconnect={false} delay={500}>
          <BeautyLink to="/map">
            <span>Map and directions</span>
          </BeautyLink>
        </AnimateStaging>
      </nav>
    </MainMenu>
  )
})

export default Menu
