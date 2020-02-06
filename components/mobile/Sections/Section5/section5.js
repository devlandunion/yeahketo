import React from "react"
import styles from "./style"

function Section5() {
  return (
    <div className="section-5">
      <style jsx>{styles}</style>
      <h1 className="title">The Science Behind</h1>
      <h1 className="subtitle">How Yeah Keto Works To Burn Fat</h1>
      <div className="block-img">
        <img
          className="left-img"
          src="../../../../static/s5-bottle.png"
          alt=""
        />
        <img
          className="center-img"
          src="../../../../static/clinically-proven-seal.png"
          alt=""
        />
      </div>

      <p className="common-txt">
        The optimal concentration of Beta-Hydroxybutyrate (BHB) in{" "}
        <b>Yeah Keto</b> triggers nutritional ketosis. This metabolic reaction
        oxidizes excess fat to release energy efficient ketones, enabling rapid
        weight loss.
      </p>
      <img
        className="shema-img"
        src="../../../../static/s5-grl-img.png"
        alt=""
      />
      <h1 className="subtitle subtitle2">How Do You Get Into Ketosis?</h1>
      <p className="common-txt brd" style={{borderBottom: "1px solid #acacac", marginBottom: "30px"}}>
        Replacing fat with carbohydrates initiates ketosis in the body,
        releasing BHB ketones. They float around in your blood and get converted
        into energy molecules as and when required.
      </p>

      <div className="section-treatment__diagram-wrap">
        <div className="section-treatment__diagram">
          <div className="section-treatment__diagram-sector-first" />
          <div className="section-treatment__diagram-sector-second" />
        </div>
        <div className="section-treatment__diagram-history">
          <ul className="history__list">
            <li className="history__list-elem">
              <div/>
              FAT
            </li>
            <li className="history__list-elem">
              <div/>
              PROTEIN
            </li>
            <li className="history__list-elem">
              <div/>
              CARBS
            </li>
          </ul>
        </div>
      </div>

      <h1 className="subtitle subtitle3">Macronutrient Ratio In Keto Diet</h1>
      <p className="common-txt brd">
        In an ideal Keto diet, 70 to 75 percent of your total calories come from
        fat, 20 to 25 percent come from protein and 5 to 10 percent come from
        carbs.
      </p>
    </div>
  )
}
export default Section5
