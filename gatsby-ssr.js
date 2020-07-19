import React from "react"
import { useStaticRendering } from "mobx-react"
import Layout from "./src/components/Layout"

export const wrapRootElement = ({ element }) => {
  useStaticRendering(true)
  return <Layout>{element}</Layout>
}
