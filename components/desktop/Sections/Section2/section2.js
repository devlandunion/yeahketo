import React from "react"
import styles from "./style"

function Section2() {
  return (
    <div>
      <style jsx>{styles}</style>
      <div className="header">
        <p className="pink">The Proof In Results</p>
        <p className="subheader">Join The Keto Lifestyle & Lose Up To 1 lb per day!</p>
      </div>
      <ul className = "pictures-section">
        <li className="picture">
          <img alt="..." src="../../../../static/s2-t1.png" />
          <p className="content">
          Stubborn belly fat was a major concern for me. Experienced an incredible transformation
          within a month of using <b>Yeah Keto</b>.
          </p>
          <p className="author">
            <span>- Susie P.</span> | Nevada
          </p>
        </li>
        <li className="picture">
          <img alt="..." src="../../../../static/s2-t2.png" />
          <p className="content">
          Supplementing <b>Yeah Keto</b> with a keto diet was the perfect recipe for shedding those extra
          pounds I gained while pregnant. I feel more energetic than ever!
          </p>
          <p className="author">
            <span>- Taylor R.</span> | Montreal
          </p>
        </li>
        <li className="picture">
          <img alt="..." src="../../../../static/s2-t3.png" />
          <p className="content">
          My ankle fracture stalled my workouts for a month making me gain 20lbs! My physician
          recommended <b>Yeah Keto</b> & trust me it worked wonders!
          </p>
          <p className="author">
            <span>- Roxanne N.</span> | Texas
          </p>
        </li>
      </ul>
    </div>
  )
}
export default Section2
