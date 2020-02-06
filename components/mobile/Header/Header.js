import React from "react"
import styles from "./style"

const Header = ({ logo, text }) => (
  <>
    <style jsx>{styles}</style>
    <header className="header">
      <img width="640" height="88" className="header-logo" src={logo} />
      <p className="header-text">{text}</p>
    </header>
  </>
)

export default Header
