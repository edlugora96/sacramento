import React from "react"
import { useLocalStore } from "mobx-react"
import { observable, action } from "mobx"

export const store = observable(
  {
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
  },
  {
    setScroll: action,
    startLoading: action,
    stopLoading: action,
    setCurrentMainSlide: action,
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
