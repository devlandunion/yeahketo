import React from "react"
import Router from "next/router"
import styles from "./style"

function PromoButton() {

  return (
    <div id="super-puper-promo-button">
      <style jsx>{styles}</style>
      <a
        onClick={() => {
          Router.push("/mobile/shipping")
        }}
      >
        <img src="/static/button.png" alt="" />
      </a>
    </div>
  )
}

export default PromoButton
