import styles from "./style"
import React, { useState } from "react"
import Modal from "../.././universall/Modal"
import { TermsAndConditions } from "../../universall/Terms"
import { PrivacyPolicy } from "../../universall/Privacy"
import { RefundPolicy } from "../../universall/Refund"

function Footer() {
  const [termsIsOpen, setTermsIsOpen] = useState(false)
  const [privacyIsOpen, setPrivacyIsOpen] = useState(false)
  const [refundIsOpen, setRefundIsOpen] = useState(false)

  return (
    <>
      <style jsx>{styles}</style>
      <div className="footer">
        <Modal isOpen={termsIsOpen} setIsOpen={setTermsIsOpen} title={"Terms and Conditions"}>
          <TermsAndConditions />
        </Modal>
        <Modal isOpen={privacyIsOpen} setIsOpen={setPrivacyIsOpen} title={"Privacy Policy"}>
          <PrivacyPolicy />
        </Modal>
        <Modal isOpen={refundIsOpen} setIsOpen={setRefundIsOpen} title={"Customer Care"}>
          <RefundPolicy />
        </Modal>
        <div>
          <p>
            This product has not been evaluated by the FDA. This product is not intended to diagnose,
            treat, cure or prevent any disease.
          </p>
          <p>
            Results in description and testimonials may not be typical results and individual results
            may vary.
          </p>
          <p>
            This product intended to be used in conjunction with a healthy diet and regular exercise.
          </p>
          <p>
            Consult your physician before starting any diet, exercise program, and taking any diet
            pill to avoid any health issues.
          </p>
          <p>Images above are dramatizations.</p>
        </div>
        <div className="footer-links">
          <a onClick={() => setTermsIsOpen(true)}> Terms & Conditions </a> |
          <a onClick={() => setPrivacyIsOpen(true)}> Privacy Policy </a>|
          <a onClick={() => setRefundIsOpen(true)}> Customer Care </a>
        </div>
        <div>2019 © Yeah Keto</div>
      </div>
    </>
  )
}
export default Footer
