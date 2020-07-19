import React from "react"
import { observer } from "mobx-react"
import { HamburgerMenu, Nav } from "./styles"
import { BeautyLink, Link } from "../commonStyles"
import { useStore } from "../../lib/store"

const Navbar = observer(() => {
  const { menuOpen, scroll, toggleMenu } = useStore()
  return (
    <Nav scrolled={scroll !== 0}>
      {!menuOpen ? (
        <HamburgerMenu onClick={toggleMenu}>
          <i></i>
        </HamburgerMenu>
      ) : (
        <div style={{ height: "36px", width: "35px" }}></div>
      )}
      <BeautyLink to="/">
        <span>Gallery</span>
      </BeautyLink>
      <BeautyLink to="/">
        <span>Features</span>
      </BeautyLink>
      <BeautyLink to="/"> </BeautyLink>
      <BeautyLink to="/map">
        <span>Map</span>
      </BeautyLink>
      <BeautyLink to="/">
        <span>Contact</span>
      </BeautyLink>
      <Link href="tel:4152716390">
        <span>(415) 271-6390</span>
      </Link>
    </Nav>
  )
})

export default Navbar
