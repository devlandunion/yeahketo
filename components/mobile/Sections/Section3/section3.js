import React from "react"
import styles from "./style"

function Section3() {
  return (
    <div className="section-3">
      <style jsx>{styles}</style>
      <h1 className="title">HOW YEAH KETO WORKS</h1>
      <h1 className="subtitle">
        Ketosis Helps Your Body Burn Fat <br /> For Energy!
      </h1>
      <div className="title-bg">
        <img
          src="../../../../static/s3-bg-arrow.png"
          alt=""
        />
        <div className="left">no</div>
        <div className="right"><h2>Traditional Diet</h2></div>
      </div>
      <img
        src="../../../../static/s3-trad-img.png"
        alt=""
        className="orange-img"
      />
      <p className="p1">
        Carbs being an integral part of our daily diet breaks down into glucose
        to release energy. The excess glucose gets stored as fat in the adipose
        tissue, resulting in :
      </p>
      <ul className="list-bg">
        <li>
          <span>1</span>Gradual Weight Gain
        </li>
        <li>
          <span>2</span>Rise In Blood Glucose Level
        </li>
        <li>
          <span>3</span>Spike In Insulin Secretion
        </li>
        <li>
          <span>4</span>Responsible For Fatigue
        </li>
      </ul>
      <p className="p2">
        <span>High Carbs Diet</span>
        <br />
        BODY BURNS GLUCOSE
      </p>
      <div className="s3-vs">
        <div className="s3-vs-block">VS</div>
      </div>
      <div className="title-bg violet">
        <img
          className="pictures"
          src="../../../../static/s3-bg-arrow1.png"
          alt=""
        />
        <div className="left">yes</div>
        <div className="right"><h2>Ketosis Diet</h2></div>
      </div>
      <img
        src="../../../../static/s3-ketos-img.png"
        alt=""
        className="purple-img"
      />
      <p className="p1">
        When a low carb, high fat diet is supplemented with <b>Yeah Keto</b>, it
        promptly triggers ketosis, oxidizing stored fat into energy efficient
        ketones:
      </p>
      <ul className="list-bg violet">
        <li><span>1</span>Converts Fat Into Energy Molecules</li>
        <li><span>2</span>Drop In The Blood Glucose Level</li>
        <li><span>3</span>Lipase Releases Triglycerides</li>
        <li><span>4</span>Cholesterol Levels Are Under Check</li>
      </ul>
      <p className="p2 violet">
        <span>High-Fat, Low-Carb Diet</span>
        <br />
        Body Burns Dietary Fat
      </p>
    </div>
  )
}
export default Section3
