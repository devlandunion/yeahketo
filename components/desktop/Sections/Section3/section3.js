import React from "react"
import styles from "./style"

function Section3() {
  return (
    <>
      <style jsx>{styles}</style>
      <div id="section3">
        <div className="contentWrap">
          <p className="s3-hd1">HOW YEAH KETO WORKS</p>
          <p className="s3-hd2">Ketosis Helps Your Body Burn Fat For Energy! </p>
          <div className="s3-bg">
            <div className="s3-bg-lft">
              <p className="s3-p1">Traditional Diet</p>
              <img src="../../../../static/s3-img1.png" alt="..." className="s3-img1" />
              <p className="s3-p2">
                Carbs being an integral part of our daily diet breaks down into glucose to release
                energy. The excess glucose gets stored as fat in the adipose tissue, resulting in :
              </p>
              <ul className="s3-list1">
                <li>Gradual Weight Gain</li>
                <li>Rise In Blood Glucose Level</li>
                <li>Spike In Insulin Secretion</li>
                <li>Responsible For Fatigue</li>
              </ul>
              <p className="s3-p3">High Carbs Diet</p>
              <p className="s3-p4">Body Burns Glucose</p>
            </div>
            <div className="s3-bg-rgt">
              <p className="s3-p1" style={{ padding: "42px 62px 0 0" }}>
                Ketosis Diet
              </p>
              <img src="../../../../static/s3-img2.png" alt="..." className="s3-img2" />
              <p className="s3-p2">
                When a low carb, high fat diet is supplemented with <strong>Yeah Keto</strong>, it
                promptly triggers ketosis, oxidizing stored fat into energy efficient ketones :
              </p>
              <ul className="s3-list2">
                <li>Converts Fat Into Energy Molecules</li>
                <li>Drop In The Blood Glucose Level</li>
                <li>Lipase Releases Triglycerides</li>
                <li>Cholesterol Levels Are Under Check</li>
              </ul>
              <p className="s3-p5">High-Fat, Low-Carb Diet</p>
              <p className="s3-p6">Body Burns Dietary Fat</p>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div>
    //   <style jsx>{styles}</style>
    //   <div className="header">
    //     <p className="pink">HOW YEAH KETO WORKS</p>
    //     <p className="subheader">Ketosis Helps Your Body Burn Fat For Energy!</p>
    //   </div>
    //   <div className="content">
    //     <div className="left">
    //       <div className="head">
    //         <div className="head-left">No</div> <div className="head-right">Traditional diet</div>
    //       </div>
    //       <div className="image">
    //         <img
    //           alt="..."
    //           src="https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/s3-img1.png"
    //         />
    //       </div>
    //       <div className="description">
    //         Carbs being an integral part of our daily diet breaks down into glucose to release
    //         energy. The excess glucose gets stored as fat in the adipose tissue, resulting in :
    //       </div>
    //       <ul>
    //         <li>
    //           <div className="numbers">1</div>
    //           <div className="words">Gradual Weight Gain</div>
    //         </li>
    //         <li>
    //           <div className="numbers">2</div>
    //           <div className="words">Rise In Blood Glucose Level</div>
    //         </li>
    //         <li>
    //           <div className="numbers">3</div>
    //           <div className="words">Spike In Insulin Secretion</div>
    //         </li>
    //         <li>
    //           <div className="numbers">4</div>
    //           <div className="words">Responsible For Fatigue</div>
    //         </li>
    //       </ul>
    //     </div>
    //     <span className="dot"></span>
    //     <div className="right">
    //       <div className="head">
    //         <div className="head-left">Ketosis diet</div> <div className="head-right">Yes</div>
    //       </div>
    //       <div className="image">
    //         <img
    //           alt="..."
    //           src="https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/s3-img2.png"
    //         />
    //       </div>
    //       <div className="description">
    //         When a low carb, high fat diet is supplemented with Yeah Keto, it promptly triggers
    //         ketosis, oxidizing stored fat into energy efficient ketones :
    //       </div>
    //       <ul>
    //         <li>
    //           <div className="words">Converts Fat Into Energy Molecules</div>
    //           <div className="numbers">1</div>
    //         </li>
    //         <li>
    //           <div className="words">Drop In The Blood Glucose Level</div>
    //           <div className="numbers">2</div>
    //         </li>
    //         <li>
    //           <div className="words">Lipase Releases Triglycerides</div>
    //           <div className="numbers">3</div>
    //         </li>
    //         <li>
    //           <div className="words">Cholesterol Levels Are Under Check</div>
    //           <div className="numbers">4</div>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  )
}
export default Section3
