import React from "react"
import styles from "./style"

function Section5() {
  return (
    <div className="content">
      <style jsx>{styles}</style>
      <div className="images">
        <img
          alt="..."
          className="img1"
          src="https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/s5-seal.png"
        />
        <img
          alt="..."
          className="img2"
          src="https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/s1-btl1.png"
        />
      </div>
      <div className="description">
        <div>
          <p className="header">The Science Behind</p>
          <p className="subheader">How Yeah Keto Works To Burn Fat</p>
          <p className="descr">
            The optimal concentration of Beta-Hydroxybutyrate (BHB) in <b>Yeah Keto </b>
            triggers nutritional ketosis. This metabolic reaction oxidizes
            excess fat to release energy efficient ketones, enabling rapid
            weight loss.
          </p>
          <div className="flex">
            <div className="flex-wrapper">
              <p className="subheader_little">
                Macronutrient Ratio In Keto Diet
              </p>
              <p className="descr no-border">
                In an ideal Keto diet, 70 to 75 percent of your total calories
                come from fat, 20 to 25 percent come from protein and 5 to 10
                percent come from carbs.
              </p>
              <hr></hr>
              <p className="subheader_little--second">How Do You Get Into Ketosis?</p>
              <p className="descr no-border">
                Replacing fat with carbohydrates initiates ketosis in the body,
                releasing BHB ketones. They float around in your blood and get
                converted into energy molecules as and when required.
              </p>
            </div>
            <div>
              <img
                alt="..."
                src="https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/s5-right-img.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Section5
