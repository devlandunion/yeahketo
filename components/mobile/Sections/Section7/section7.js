import React from "react"
import styles from "./style"
import Slider from "react-slick"

const settings = {
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 8000,
  nextArrow: <SampleNextArrow className="nextBtn" />,
  prevArrow: <SamplePrevArrow className="prevBtn" />,
}

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <button
      type="button"
      style={{
        position: "absolute",
        right: "235px",
        top: "770px",
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
        top: "770px",
        left: "235px",
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
function Section7() {
  return (
    <div className="section-7">
      <style jsx>{styles}</style>
      <div className="header">
        <p className="pink">Real People. Real Results.</p>
        <p className="subheader">
          Experience Real Transformation
          <br /> WIth <b>Yeah Keto</b>!
        </p>
        <p className="common-txt">
          Don't take our word for it, find out how <b>Yeah Keto</b> has helped
          people lose weight &amp; look great!
        </p>
      </div>
      <div className="slider">
        <Slider {...settings}>
          <div className="slider-div">
            <li className="slide">
              <img
                src="https://yeahketo-funnel-prod.herokuapp.com/static/promo/mobile/images/images/s7-slide-img1.png"
                alt=""
                className="image"
              />
              <div className="clearall" />
              <p className="common-txt s7-common-txt cmn-itlic">
                <b>Yeah Keto</b> has helped me get the most out of my keto diet!
                I have not only lost an incredible amount of weight in just 4
                weeks but also feel more energetic and productive through the
                day!
              </p>
              <p className="slide-txt1">
                <span>- Erica J. </span> |{" "}
                <span className="slide-state">Los Angeles</span>
                <img
                  src="../../../../static/s2-star.png"
                  className="s7-star"
                  alt=""
                />
              </p>
            </li>
          </div>
          <div className="slider-div">
            <li className="slide">
              <img
                src="https://yeahketo-funnel-prod.herokuapp.com/static/promo/mobile/images/images/s7-slide-img2.png"
                alt=""
                className="image"
              />
              <div className="clearall" />
              <p className="common-txt s7-common-txt cmn-itlic">
                The Keto Diet was not working for me, but then my trainer asked
                me to give <b>Yeah Keto</b> a try and it has transformed my
                results since then! I am almost 4 dress sizes down and my
                overall fitness and energy levels are at their peak.
              </p>
              <p className="slide-txt1">
                <span>- Jane C.</span> |{" "}
                <span className="slide-state">New York</span>
                <img
                  src="../../../../static/s2-star.png"
                  className="s7-star"
                  alt=""
                />
              </p>
            </li>
          </div>
          <div className="slider-div">
            <li className="slide">
              <img
                src="https://yeahketo-funnel-prod.herokuapp.com/static/promo/mobile/images/images/s7-slide-img3.png"
                alt=""
                className="image"
              />
              <div className="clearall" />
              <p className="common-txt s7-common-txt cmn-itlic">
                If you are going to follow a Keto lifestyle, I recommend you
                supplement it with <b>Yeah Keto</b>. I have lost over 20lbs from
                the most stubborn fat pockets on my body and fit back into my
                favorite dresses!
              </p>
              <p className="slide-txt1">
                <span>- Cher N.</span> |{" "}
                <span className="slide-state">South Carolina</span>
                <img
                  src="../../../../static/s2-star.png"
                  className="s7-star"
                  alt=""
                />
              </p>
            </li>
          </div>
        </Slider>
      </div>
    </div>
  )
}
export default Section7
