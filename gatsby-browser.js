import React from "react"
import Layout from "./src/components/Layout"
import { store } from "./src/lib/store"

const timer = {}
let count = 1
export const wrapRootElement = ({ element }) => <Layout>{element}</Layout>
export const onPreRouteUpdate = () => {
  store.startLoading()
}
export const onRouteUpdate = () => {
  store.closeMenu()
  timer.time
    ? clearTimeout(timer.time)
    : setTimeout(store.stopLoading, count ? 2000 : 200)
  count = 0
}
