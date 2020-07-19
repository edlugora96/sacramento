import React from "react"
import { LoadingPage } from "./style"
import { CSSTransition } from "react-transition-group"
import { observer } from "mobx-react"
import { useStore } from "../../lib/store"
const Loading = observer(() => {
  const { loading } = useStore()
  return (
    <CSSTransition in={loading} classNames="fade" unmountOnExit timeout={1000}>
      <LoadingPage>
        <img src="https://propertysonoma.com/media/logow-ddb9627d7439acdf7dd44996c1134ee6.png" />
      </LoadingPage>
    </CSSTransition>
  )
})

export default Loading
