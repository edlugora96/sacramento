import React from "react"
import { observer } from "mobx-react"
import { HamburgerMenu, Nav } from "./styles"
import { BeautyLink, Link } from "../commonStyles"
import { useStore } from "../../lib/store"

const Navbar = observer(() => {
  const {
    menuOpen,
    scroll,
    toggleMenu,
    notPhone,
    landscape,
    navbarDark,
  } = useStore()
  return (
    <Nav scrolled={scroll !== 0} landscape={landscape} navbarDark={navbarDark}>
      {!menuOpen ? (
        <HamburgerMenu onClick={toggleMenu}>
          <i></i>
        </HamburgerMenu>
      ) : (
        <div style={{ height: "36px", width: "35px" }}></div>
      )}

      {notPhone && (
        <>
          <BeautyLink to="/gallery">
            <span>Gallery</span>
          </BeautyLink>
          <BeautyLink to="/features">
            <span>Features</span>
          </BeautyLink>
          <BeautyLink to="/virtual-tour">
            <span>Virtual tour</span>
          </BeautyLink>
        </>
      )}

      <BeautyLink to="/"> </BeautyLink>

      {notPhone && (
        <>
          <BeautyLink to="/neighborhood">
            <span>Neighborhood</span>
          </BeautyLink>
          <BeautyLink to="/map">
            <span>Map</span>
          </BeautyLink>
          <BeautyLink to="/contact">
            <span>Contact</span>
          </BeautyLink>
        </>
      )}
    </Nav>
  )
})

export default Navbar
