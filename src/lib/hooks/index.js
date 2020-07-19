import { useEffect } from "react"

export const useIsVisible = ({
  element,
  disconnect,
  cb = () => {},
  on = true,
  doit = true,
}) => {
  useEffect(() => {
    if (typeof window !== "undefined" && doit) {
      Promise.resolve(
        typeof window.IntersectionObserver !== "undefined"
          ? window.IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        const observer = new window.IntersectionObserver(entries => {
          const { isIntersecting } = entries[0]
          cb(false)
          if (isIntersecting) {
            cb(true)
            if (disconnect) {
              observer.disconnect()
            }
          }
        })
        observer.observe(element.current)
      })
    }
  }, [element, typeof window, on])
}
