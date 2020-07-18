import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import "semantic-ui-css/semantic.min.css"

import { Global } from "./styles"
import Navbar from "../Navbar"
import Footer from "../Footer"
import "./fonts.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Global />
      <Navbar />

      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
