import React, { useState } from "react"
import styles from "./style"
import Modal from "../.././universall/Modal"
import { TermsAndConditions } from "../../universall/Terms"
import { PrivacyPolicy } from "../../universall/Privacy"
import { RefundPolicy } from "../../universall/Refund"

function Footer({ isText = true }) {
  const [termsIsOpen, setTermsIsOpen] = useState(false)
  const [privacyIsOpen, setPrivacyIsOpen] = useState(false)
  const [refundIsOpen, setRefundIsOpen] = useState(false)

  return (
    <>
      <style jsx>{styles}</style>
      <footer className="bottom_footer">
        <Modal isOpen={termsIsOpen} setIsOpen={setTermsIsOpen} title={"Terms and Conditions"}>
          <TermsAndConditions />
        </Modal>
        <Modal isOpen={privacyIsOpen} setIsOpen={setPrivacyIsOpen} title={"Privacy Policy"}>
          <PrivacyPolicy />
        </Modal>
        <Modal isOpen={refundIsOpen} setIsOpen={setRefundIsOpen} title={"Customer Care"}>
          <RefundPolicy />
        </Modal>
        {isText && (
          <div>
            <p>
              This product has not been evaluated by the FDA. This product is not intended to
              diagnose, treat, cure or prevent any disease. Results in description and testimonials
              may not be typical results and individual results may vary. This product intended to
              be used in conjunction with a healthy diet and regular exercise. Consult your
              physician before starting any diet, exercise program, and taking any diet pill to
              avoid any health issues. Images above are dramatizations.
            </p>
          </div>
        )}

        <ul>
          <li onClick={() => setTermsIsOpen(true)}>TERMS & CONDITIONS</li>
          <li>|</li>
          <li onClick={() => setPrivacyIsOpen(true)}>PRIVACY POLICY</li>
          <li>|</li>
          <li onClick={() => setRefundIsOpen(true)}>CUSTOMER CARE</li>
        </ul>
        <span className="copyright">2019 © Yeah Keto</span>
      </footer>
    </>
  )
}
export default Footer
