import React from "react"
import { SectionLinkingBeauty, ArrowButton } from "./style"
const SectionLinking = props => {
  return (
    <SectionLinkingBeauty {...props}>
      <div>
        <h2>{props.title || "I need a title"}</h2>
        <ArrowButton tabindex="0" type="button">
          <span>
            <svg
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="presentation"
            >
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
            </svg>
          </span>
        </ArrowButton>
      </div>
    </SectionLinkingBeauty>
  )
}

export default SectionLinking
