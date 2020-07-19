import React from "react"
import { observer } from "mobx-react"
import { HamburgerMenu, Nav } from "./styles"
import { BeautyLink, Link } from "../commonStyles"
import { useStore } from "../../lib/store"

const Navbar = observer(() => {
  const { scroll } = useStore()
  return (
    <Nav scrolled={scroll !== 0}>
      <HamburgerMenu>
        <i></i>
      </HamburgerMenu>
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
