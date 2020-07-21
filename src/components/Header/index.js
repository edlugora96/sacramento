import React from "react"
import { observer } from "mobx-react"
import {
  Header,
  HeaderBackground,
  BackgroundOpacity,
  Hero,
  HeaderMoreInfo,
} from "./style"
import { useStore } from "../../lib/store"

const Head = observer(({ children, image, degEffect }) => {
  const isHero = typeof children === "object" && "Hero" in children
  const isMoreInfo = typeof children === "object" && "MoreInfo" in children
  const { scroll } = useStore()

  return (
    <Header>
      <HeaderBackground image={image} />
      <BackgroundOpacity degEffect={degEffect} />
      <Hero>{isHero ? children.Hero() : children}</Hero>
      {isMoreInfo && (
        <HeaderMoreInfo scrolled={scroll !== 0}>
          {children.MoreInfo()}
        </HeaderMoreInfo>
      )}
    </Header>
  )
})

export default Head
