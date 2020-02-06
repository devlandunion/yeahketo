import styles from "./style"
import React from "react"

function Loader() {
  return (
    <>
      <style jsx>{styles}</style>
      <div className="loader-wrap">
        <div className="loader" />
      </div>
    </>
  )
}

export default Loader
