import React, { useRef, useState } from "react"
import { AnimateComponent } from "../commonStyles"
import { useIsVisible } from "../../lib/hooks"

export const AnimateStaging = ({ children }) => {
  const element = useRef(null)
  const [start, setStart] = useState(false)
  useIsVisible({ element, disconnect: true, cb: setStart })
  // useIsVisible({ element, cb: setStart })
  return (
    <AnimateComponent start={start} ref={element}>
      {children}
    </AnimateComponent>
  )
}
