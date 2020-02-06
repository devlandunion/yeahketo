import React from "react"
import styles from "./style"

function Modal({ isOpen = false, setIsOpen, children, title = "" }) {
  return (
    <>
      {isOpen ? (
        <>
          <div className="modal" onClick={() => setIsOpen(false)}>
            <div
              className="modalBody"
              onClick={e => {
                e.stopPropagation()
              }}
            >
              <div className="modalContent">
                <div className="modalHeader">
                  <h1>{title}</h1>
                  <button className="closeModal" onClick={() => setIsOpen(false)}>
                    <svg
                      viewport="0 0 20 20"
                      width="20"
                      height="20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="1" y1="20" x2="20" y2="1" stroke="black" strokeWidth="2"></line>
                      <line x1="1" y1="1" x2="20" y2="20" stroke="black" strokeWidth="2"></line>
                    </svg>
                  </button>
                </div>
                {children}
              </div>
            </div>
            <style jsx>{styles}</style>
          </div>
          <div className="modalBackground" />
        </>
      ) : null}
    </>
  )
}

export default Modal
