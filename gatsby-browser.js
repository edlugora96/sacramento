import React from "react"
import Layout from "./src/components/Layout"
import { store } from "./src/lib/store"

const timer = {}

export const wrapRootElement = ({ element }) => <Layout>{element}</Layout>
export const onPreRouteUpdate = () => {
  store.startLoading()
}
export const onRouteUpdate = () => {
  timer.time ? clearTimeout(timer.time) : setTimeout(store.stopLoading, 100)
}
