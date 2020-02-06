import css from "styled-jsx/css"

export default css`
  .header {
    padding: 0;
    // margin: 0 40px 0 40px;
    text-align: center;
  }
  .header .pink {
    color: #6b2d92;
    font-weight: bold;
    font-size: 44px;
    line-height: 55px;
    font-family: 'Montserrat' !important;
    margin: 0px;
    padding-top: 35px;
    margin-bottom: 5px;
  }
  .header .subheader {
    font-family: 'Montserrat' !important;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    text-align: center;
    color: #2d2d2d;
    margin: 0 auto;
    padding: 4px 0 0 0;
  }

  /* Start of slider */
  .slider {
    width: 100%;
    height: 870px;
    margin: 20px auto;
  }

  .slide-txt1 {
    float: left;
    width: 100%;
    text-align: center;
    font-size: 30px;
    color: #2d2d2d;
    margin-top: 19px;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slide-txt1 span {
    color: #ef7600;
  }

  .common-txt {
    width: 96%;
    font-size: 30px;
    color: #2d2d2d;
    line-height: 40px;
    text-align: center;
    margin: 15px auto 47px auto;
  }

  .slider .common-txt {
    margin: 35px 0 0 0;
    padding: 0 25px;
  }

  .cmn-itlic {
    font-style: italic;
  }

  .slider-div {
    width: 100%;
    padding: 0 2.5%;
    background: white;
  }
  // .image {
  //   transform: scale(0.9);
  // }
  .slide {
    width: 95%;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .s7-star {
    display: block;
    margin: 0 0 0 20px;
  }
  .slide-txt1 span.slide-state {
    color: #2d2d2d;
  }

  .section-7 {
    width: 640px;
    margin: 0 auto;
  }
`
