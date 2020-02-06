import React from "react"
import styles from "./style"

function Modal({ isOpen = false, setIsOpen, children }) {
  return (
    <>
      {isOpen ? (
        <div className="modal" onClick={() => setIsOpen(false)}>
          <style jsx>{styles}</style>
          {children}
        </div>
      ) : null}
    </>
  )
}

export default Modal
