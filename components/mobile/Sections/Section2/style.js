import css from "styled-jsx/css"

export default css`

  .header {
    width: 100%;
    padding-top: 40px;
    text-align: center;
  }
  .header .pink {
    color: #6b2d92;
    font-weight: bold;
    font-size: 43px;
    line-height: 45px;
    font-family: 'Montserrat';
    margin: 0;

  }
  .header .subheader {
    float: left;
    width: 100%;
    font-size: 35px;
    color: #2d2d2d;
    text-align: center;
    font-family: "Montserrat";
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 15px;
  }

  /* Start of slider */
  .slider {
    width: 80%;
    height: 780px;
    margin: 8px auto;
    padding: 20px 0 0 0;
  }
  .slide-txt1 {
    float: left;
    width: 100%;
    text-align: center;
    font-size: 30px;
    color: #2d2d2d;
    margin-top: 20px;
  }

  .slide-txt1 span {
    color: #ef7600;
  }
  .common-txt {
    float: left;
    width: 100%;
    text-align: center;
    font-size: 30px;
    color: #2d2d2d;
    line-height: 40px;
    margin-top: 36px;
    margin-bottom: 0;
  }

  .cmn-itlic {
    font-style: italic;
  }
  .slider-div {
    width: 100%;
    padding: 0 2.5%;
    background: white;
  }
  .slide {
    width: 95%;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .s2-star {
    padding-top: 36px;
  }
  
  .line {
    width: 100%;
    height: 12px;
    // margin-top: 60px;
    background-image: linear-gradient(to bottom, #e1e1e1 0%, transparent 100%);
  }

  ul {
    list-style: none;
  }
  .section-2 {
    text-align: center;
    height: auto;
    width: 640px;
    margin: 0 auto;
    padding: 0;
    position: relative;
    padding-bottom: 5px;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .section-2 .logo {
    margin: 0 0 30px 15px;
    max-width: 60vw;
  }
  .section-2 .bottle {
    position: absolute;
    top: 370px;
    left: 12px;
    z-index: 9;
  }
  .section-2 .right-block {
    max-width: 70.5%;
    margin-top: 60px;
  }
  .section-2 .p1 {
    color: #191919;
    font-size: 20px;
    line-height: 26px;
    margin: 10px 6px 0 0px;
  }
  text-align: center;
  .section-2 .p-border {
    background: url('../../../../static/s1-line.png')
      no-repeat -49px 21px;
    color: #2d2d2d;
    font-size: 26px;
    font-style: italic;
    letter-spacing: -1px;
    margin-top: 15px;
    padding: 0 0 0 14px;
  }
  .section-2 .list {
  }
  .section-2 .list li {
    background: url('../../../../static/s1-tike.png')
      no-repeat left 0px;
    clear: both;
    color: #1a1a1a;
    float: left;
    font-size: 30px;
    letter-spacing: -0.5px;
    line-height: 30px;
    padding: 0px 0px 13px 49px;
    text-align: left;
  }
  .section-2 .list li span {
    color: #ea6302;
    font-family: 'Montserrat', 'Open Sans', sans-serif;
    text-transform: uppercase;
  }
  .section-2 center {
    width: 100%;
  }
`
