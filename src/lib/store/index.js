import React from "react"
import { useLocalStore } from "mobx-react"
import { observable, action, computed } from "mobx"
import { mediaQuery } from "../utils"
export const store = observable(
  {
    menuOpen: false,
    toggleMenu() {
      store.menuOpen = !store.menuOpen
    },
    closeMenu() {
      store.menuOpen = false
    },
    openMenu() {
      store.menuOpen = true
    },
    currentMainSlide: 0,
    setCurrentMainSlide(index) {
      store.currentMainSlide = index
    },
    scroll: 0,
    setScroll(scroll) {
      store.scroll = scroll
    },
    loading: true,
    startLoading() {
      store.loading = true
    },
    stopLoading() {
      store.loading = false
    },
    windowWidth: 0,
    windowHeight: 0,

    setWindowSize(size) {
      store.windowWidth = size.width
      store.windowHeight = size.height
    },

    get landscape() {
      if (store.windowWidth > store.windowHeight && store.phone) {
        return true
      }
      return false
    },

    get getDevice() {
      if (store.windowWidth <= mediaQuery.phone) {
        return "phone"
      } else if (
        store.windowWidth > mediaQuery.phone &&
        store.windowWidth <= mediaQuery.tablet
      ) {
        return "tablet"
      } else if (store.windowWidth > mediaQuery.tablet) {
        return "desktop"
      }
      /*
        320px.
        480px.
        600px.
        768px.
        900px.
        1024px.
        1200px.
      */
    },
    get notPhone() {
      return store.getDevice !== "phone"
    },
    get phone() {
      return store.getDevice === "phone"
    },
  },
  {
    toggleMenu: action,
    closeMenu: action,
    openMenu: action,
    setScroll: action,
    startLoading: action,
    stopLoading: action,
    setCurrentMainSlide: action,
    setWindowSize: action,
    getDevice: computed,
    notPhone: computed,
    phone: computed,
    landscape: computed,
  }
)

export const createStore = () => store

export const StoreContext = React.createContext(null)

export const StoreProvider = ({ children }) => {
  const stored = useLocalStore(createStore)
  return (
    <StoreContext.Provider value={stored}>{children}</StoreContext.Provider>
  )
}

export const useStore = () => {
  const store = React.useContext(StoreContext)
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.")
  }
  return store
}
