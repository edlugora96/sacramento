import React from "react"
import { FooterMenu } from "./style"
import { NiceLink } from "../commonStyles"

const FootMenu = ({
  menu = [
    { name: "Home", href: "/" },
    { name: "Map and directions", href: "/" },
    { name: "Features", href: "/" },
  ],
}) => (
  <FooterMenu>
    <div>
      {menu.map(item => (
        <NiceLink alternative white smallX2 to={item.href}>
          {item.name}
        </NiceLink>
      ))}
    </div>
  </FooterMenu>
)

export default FootMenu
