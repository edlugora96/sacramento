import React from "react"
import { observer } from "mobx-react"
import { HamburgerMenu, Nav } from "./styles"
import { BeautyLink, Link } from "../commonStyles"
import { useStore } from "../../lib/store"

const Navbar = observer(() => {
  const { menuOpen, scroll, toggleMenu, notPhone, landscape } = useStore()
  return (
    <Nav scrolled={scroll !== 0} landscape={landscape}>
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
        </>
      )}

      <BeautyLink to="/"> </BeautyLink>

      {notPhone && (
        <>
          <BeautyLink to="/map">
            <span>Map</span>
          </BeautyLink>
          <BeautyLink to="/contact">
            <span>Contact</span>
          </BeautyLink>
          <Link href="tel:4152716390">
            <span>(415) 271-6390</span>
          </Link>
        </>
      )}
    </Nav>
  )
})

export default Navbar
