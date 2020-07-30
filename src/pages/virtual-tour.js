import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Iframe from "react-iframe"
import { AnimateStaging } from "../components/AnimateComponent"
// import Header from "../components/Header"
// import headerImageVirtualTourPage from "../assets/gallery/011.jpg"
import SEO from "../components/seo"
import { mediaQuery } from "../lib/utils"
import { useStore, store } from "../lib/store"
import { useWindowSize } from "../lib/hooks"
import { observer } from "mobx-react"

const VirtualTourView = styled.section`
  width: 100%;
  text-align: center;
  background-color: #fff;
  padding: 7rem;
  & iframe {
    margin: auto;
  }
  @media screen and (max-width: ${mediaQuery.phone}px) {
    padding: 7rem 0;
  }
  & section > div {
    display: flex;
  }
`

const VirtualTourPage = () => {
  const { makeDark } = useStore()
  const [iframeSizes, setIframeSizes] = useState({ width: 853, height: 480 })
  const iframeRef = useRef(null)
  const parentIframeRef = useRef(null)
  const whRelation = 853 / 480
  useEffect(() => {
    makeDark()
  }, [])
  useWindowSize({
    element: parentIframeRef,
    cb: ({ height, width }) => {
      const newHeight = width / whRelation
      let size = {
        width: newHeight > height ? height * whRelation : width,
        height: newHeight > height ? height : newHeight,
      }
      // if (width > height) {
      //   size = {
      //     width: height * whRelation,
      //     height,
      //   }
      // }
      setIframeSizes(size)
    },
  })
  return (
    <>
      <SEO title="Virtual Tour" />
      {/* <Header degEffect image={headerImageVirtualTourPage}>
        <h2>VirtualTour</h2>
      </Header> */}
      <VirtualTourView>
        <AnimateStaging>
          <div style={{ height: "calc(100vh - 8rem)" }} ref={parentIframeRef}>
            <iframe
              ref={iframeRef}
              width={iframeSizes.width}
              height={iframeSizes.height}
              src=" https://my.matterport.com/show/?m=pPCjjLczu6J "
              frameborder="0"
              allowfullscreen
              allow="xr-spatial-tracking"
            ></iframe>
          </div>
        </AnimateStaging>
      </VirtualTourView>
    </>
  )
}

export default VirtualTourPage
