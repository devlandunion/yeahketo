import React from "react"
import styles from "./style"
import Slider from "react-slick"

const settings = {
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 8000,
  arrows: true,
  nextArrow: <SampleNextArrow className="nextBtn sliderBtn" />,
  prevArrow: <SamplePrevArrow className="prevBtn sliderBtn" />,
}

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <button
      type="button"
      style={{
        position: "absolute",
        right: "175px",
        top: "678px",
        width: "73px",
        height: "73px",
        padding: "0",
        outline: "none",
        border: "none",
        zIndex: "9",
        cursor: "pointer",
        background:
          "url('https://yeahketo.com/static/promo/mobile/images/images/next.png') no-repeat left center",
      }}
      onClick={onClick}
    ></button>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <button
      type="button"
      style={{
        position: "absolute",
        width: "73px",
        top: "678px",
        left: "173px",
        height: "73px",
        padding: "0",
        outline: "none",
        border: "none",
        zIndex: "9",
        cursor: "pointer",
        background:
          "url('https://yeahketo.com/static/promo/mobile/images/images/prev.png')",
      }}
      onClick={onClick}
    ></button>
  )
}
function Section2() {
  return (
    <div className="section-2">
      <style jsx>{styles}</style>
      <div className="header">
        <p className="pink">The Proof In Results</p>
        <p className="subheader">
          Join The Keto Lifestyle & Lose Up<br></br>To 1 lb per day!
        </p>
      </div>
      <div className="slider">
        <Slider {...settings}>
          <div className="slider-div">
            <li className="slide">
              <img
                src="https://yeahketo.com/static/promo/mobile/images/images/s2-slide-img1.png"
                alt=""
              />
              <div className="clearall" />
              <img
                src="https://yeahketo.com/static/promo/mobile/images/images/s2-star.png"
                className="s2-star"
                alt=""
              />
              <p className="common-txt cmn-itlic">
                Stubborn belly fat was a major concern for me. Experienced an
                incredible transformation within a month of using{" "}
                <b>Yeah Keto</b>.
              </p>
              <p className="slide-txt1">
                <span>- Susie P. </span> | Nevada
              </p>
            </li>
          </div>
          <div className="slider-div">
            <li className="slide">
              <img
                src="https://yeahketo.com/static/promo/mobile/images/images/s2-slide-img2.png"
                alt=""
              />
              <div className="clearall" />
              <img
                src="https://yeahketo.com/static/promo/mobile/images/images/s2-star.png"
                className="s2-star"
                alt=""
              />
              <p className="common-txt cmn-itlic">
                Supplementing <b>Yeah Keto</b> with a keto diet was the perfect
                recipe for shedding those extra pounds I gained while pregnant.
                I feel more energetic than ever!
              </p>
              <p className="slide-txt1">
                <span>- Taylor R. </span> | Montreal
              </p>
            </li>
          </div>
          <div className="slider-div">
            <li className="slide">
              <img
                src="https://yeahketo.com/static/promo/mobile/images/images/s2-slide-img3.png"
                alt=""
              />
              <div className="clearall" />
              <img
                src="https://yeahketo.com/static/promo/mobile/images/images/s2-star.png"
                className="s2-star"
                alt=""
              />
              <p className="common-txt cmn-itlic">
                My ankle fracture stalled my workouts for a month making me gain
                20lbs! My physician recommended <b>Yeah Keto</b> &amp; trust me
                it worked wonders!
              </p>
              <p className="slide-txt1">
                <span>- Roxanne N.</span> | Texas
              </p>
            </li>
          </div>
        </Slider>
      </div>
      <div className="line"></div>
    </div>
  )
}
export default Section2
