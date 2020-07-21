import { useEffect, useState } from "react"
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

export const useInputValues = (initial, schema, trigger) => {
  const [value, setValue] = useState(initial)
  const [error, setError] = useState(false)
  const [firstFocus, setFirstFocus] = useState(false)
  useEffect(() => {
    if ((schema && firstFocus) || trigger) {
      setError(schema.validate(value).error?.details[0].message)
    }
  }, [value, trigger, firstFocus])

  const onChange = (e, val) => {
    setValue(e ? e.target.value : val)
  }
  const onFocus = (e, val) => {
    setFirstFocus(true)
    setValue(e ? e.target.value : val)
  }
  return { value, onChange, error, onFocus }
}
