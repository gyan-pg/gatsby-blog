import React from "react"
import { Link } from "gatsby"
import "../styles/header.scss"

const Header = () => {
  return (
    <header>
      <Link to="/">
        <p className="logo">
          <span className="logo_accent1">S</span>ample
          <span className="logo_accent2">B</span>log
        </p>
      </Link>
    </header>
  )
}

export default Header
