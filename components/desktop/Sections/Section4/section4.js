import React from "react"
import styles from "./style"

function Section4() {
  return (
    <>
      <style jsx>{styles}</style>
      <section className="benefits">
        <p className="main-title">Benefits of Ketosis</p>
        <p className="main-subtitle">Enjoy Weight Loss & Beyond</p>
        <p className="main-text">
          <strong>Yeah Keto</strong> supplementation maximizes ketosis and supports more than just
          weight loss!
        </p>
        <div className="container">
          <ul className="left">
            <li className="benefit">
              <img
                alt="..."
                className="icon icon-left"
                width="82"
                height="82"
                src="https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s4-icon1.png"
              />
              <div className="text">
                <span className="title">Boosts energy &</span>
                <span className="sub-title">Performance</span>
                <p className="sub-text sub-text-left">
                  Replenishes energy stores giving
                  <br />you a surge of vitality & vigor.
                </p>
              </div>
              <div className="benefit-border border-left"></div>
            </li>
            <li className="benefit">
              <img
                alt="..."
                className="icon icon-left"
                width="82"
                height="82"
                src="https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s4-icon2.png"
              />
              <div className="text">
                <span className="title">Stimulates</span>
                <span className="sub-title">Fat burning</span>
                <p className="sub-text sub-text-left">
                  Induces natural ketosis, burning through the fat to release energy.
                </p>
              </div>
              <div className="benefit-border border-left"></div>
            </li>
            <li className="benefit">
              <img
                alt="..."
                className="icon icon-left"
                width="82"
                height="82"
                src="https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s4-icon3.png"
              />
              <div className="text">
                <span className="title">Healthy</span>
                <span className="sub-title">Sleep cycles</span>
                <p className="sub-text sub-text-left">
                  Helps you get a good nights rest, so you can wake up refreshed and energized.
                </p>
              </div>
            </li>
          </ul>
          <img
            alt="..."
            className="bottle"
            width="269"
            height="504"
            src="https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s1-btl1.png"
          />
          <ul className="right">
            <li className="benefit">
              <div className="text text-right">
                <span className="title">Enhances</span>
                <span className="sub-title">Focus & clarity</span>
                <p className="sub-text sub-text-right">
                  Ketosis also has a positive impact on cognitive health & performance.
                </p>
              </div>
              <img
                alt="..."
                className="icon icon-right"
                width="82"
                height="82"
                src="https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s4-icon4.png"
              />
              <div className="benefit-border border-right"></div>
            </li>
            <li className="benefit">
              <div className="text text-right">
                <span className="title">Improved</span>
                <span className="sub-title">Fitness levels</span>
                <p className="sub-text sub-text-right">
                  Fat loss & increased energy helps you stay more active and train better.
                </p>
              </div>
              <img
                alt="..."
                className="icon icon-right"
                width="82"
                height="82"
                src="https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s4-icon5.png"
              />
              <div className="benefit-border border-right"></div>
            </li>
            <li className="benefit">
              <div className="text text-right">
                <span className="title">Healthy</span>
                <span className="sub-title">Mood patterns</span>
                <p className="sub-text sub-text-right">
                  Unlike scratch diets, when in Ketosis you experience a healthy & elevated mood.
                </p>
              </div>
              <img
                alt="..."
                className="icon icon-right"
                width="82"
                height="82"
                src="https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s4-icon6.png"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
export default Section4
