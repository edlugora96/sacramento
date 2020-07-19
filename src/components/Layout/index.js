import React, { useEffect } from "react"
import "semantic-ui-css/semantic.min.css"
import { useStore, StoreProvider } from "../../lib/store"
import { Global } from "./styles"
import Navbar from "../Navbar"
import Footer from "../Footer"
import FooterMenu from "../FooterMenu"
import MainMenu from "../MainMenu"
import Loading from "../Loading"
import "./fonts.css"
import "./animations.css"

const handlerScroll = setScroll => setScroll(window.scrollY)

const Layout = ({ children }) => {
  const { setScroll, stopLoading } = useStore()
  useEffect(() => {
    const handler_scroll = handlerScroll.bind(null, setScroll)
    window.addEventListener("scroll", handler_scroll)
    window.addEventListener("load", handler_scroll)
    const fadeLoad = setTimeout(() => {
      stopLoading()
    }, 2000)
    return () => {
      clearTimeout(fadeLoad)
      window.removeEventListener("scroll", handler_scroll)
      window.removeEventListener("load", handler_scroll)
    }
  }, [])
  return (
    <>
      <Global />
      <div id="portal"></div>
      <Loading />
      <MainMenu />
      <Navbar />
      <main>{children}</main>
      <FooterMenu />
      <Footer />
    </>
  )
}

const LayoutProvider = ({ children }) => (
  <StoreProvider>
    <Layout>{children}</Layout>
  </StoreProvider>
)
export default LayoutProvider
