import { useEffect } from "react"
export const useIsVisible = ({
  element,
  disconnect,
  cb = () => {},
  on = true,
  doit = true,
  delay,
}) => {
  useEffect(() => {
    if (typeof window !== "undefined" && doit) {
      Promise.resolve(
        typeof window.IntersectionObserver !== "undefined"
          ? window.IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        const timer = {}
        const observer = new window.IntersectionObserver(entries => {
          const { isIntersecting } = entries[0]
          cb(false)
          if (isIntersecting) {
            timer.timeOut && clearTimeout(timer.timeOut)
            if (delay) {
              timer.timeOut = setTimeout(() => {
                console.log("muestarte Prro")
                cb(true)
                timer.timeOut && clearTimeout(timer.timeOut)
              }, delay)
            } else {
              cb(true)
            }
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
