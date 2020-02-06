import React from "react"
import styles from "./style"

const PromoToUpperBtn = ({ submitting, text }) => (
  <>
    <style jsx>{styles}</style>

    <div className="bottom">
      <span className="secure-256">
        <span className="secure-icon">lock</span>
        Secure 256 Bit Encrypted Connection
      </span>
      <button className="btn" type="submit" disabled={submitting}>
        {text}
      </button>
      <img src="../../../static/mobile-shipping-logos.png" />
    </div>
  </>
)

export default PromoToUpperBtn
