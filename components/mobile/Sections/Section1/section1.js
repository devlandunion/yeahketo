import React from "react"
import styles from "./style"

function Section1() {
  return (
    <div className="section-1">
      <style jsx>{styles}</style>
      <img
        className="bottle"
        src="../../../../static/s1-bottle.png"
        alt=""
      />
      <div className="right-block">
        <img
          src="../../../../static/logo.png"
          alt=""
          className="logo"
        />
        <img
          className="logo-lose"
          src="../../../../static/heading-txt.png"
          alt=""
        />
        <p className="p1">
          <b>Yeah Keto</b> triggers and maintains the state of ketosis, burning
          fat for energy!
        </p>
        <p className="p-border">Yeah Keto Helps You With</p>
        <ul className="list">
          <li>
            <span>RAPID</span> <br /> Ketogenic Weight Loss
          </li>
          <li>
            <span>INSTANT</span>
            <br />
            Energy Boost
          </li>
          <li>
            <span>APPETITE</span>
            <br />
            Suppression
          </li>
          <li>
            <span>OPTIMAL</span>
            <br />
            Metabolic Rate
          </li>
        </ul>
      </div>
      <center>
        <img
          src="../../../../static/s1-seal-img.png"
          alt=""
        />
      </center>
    </div>
  )
}
export default Section1
