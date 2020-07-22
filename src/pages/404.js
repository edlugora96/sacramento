import React from "react"
import Header from "../components/Header"
import { NiceLink } from "../components/commonStyles"
import SEO from "../components/seo"
import image404 from "../assets/404.png"
const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Header degEffect image={image404}>
      <div>
        <h2>404 - Not fount</h2>
        <NiceLink white to="/">
          Go back to Home
        </NiceLink>
      </div>
    </Header>
  </>
)

export default NotFoundPage
