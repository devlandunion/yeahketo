import css from "styled-jsx/css"

export default css`
  .why-choose {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .main-title {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 49px;
    line-height: 55px;
    text-align: center;
    color: #6b2d92;
    margin: 0 auto;
    padding: 34px 0 0 0;
  }

  .main-subtitle {
    font-family: "Montserrat", sans-serif;
    font-size: 35px;
    line-height: 33px;
    text-align: center;
    color: #2d2d2d;
    margin: 0 auto;
    padding: 9px 0 0 0;
    font-weight: bold;
  }

  .main-text {
    width: 1165px;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #2d2d2d;
    margin: 0 auto;
    padding: 33px 0 48px 0;
  }

  .box {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: -7px;
  }
  .logos{
    padding-right: 47px;
  }
  .keto {
    position: absolute;
  }

  .left {
    top: 50px;
    left: -10px;
    max-width: 198px;
  }

  .right {
    top: 50px;
    left: 189px;
    max-width: 198px;
    z-index: 1;
  }

  .center {
    top: 3px;
    left: 74px;
    z-index: 2;
  }

  .sub-box {
    background: url(https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s6-box.png)
      center top no-repeat;
    height: 391px;
    width: 802px;
    margin: 26px 0 0 226px;
    align-self: flex-end;
    justify-self: flex-end;
    z-index: 0;
  }

  ul {
    display: flex;
    height: 290px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: baseline;
    padding-left: 250px;
    list-style: none;
  }

  li {
    font-size: 26px;
    line-height: 48px;
    text-align: left;
    color: #4e1e6c;
    // margin: 6px 0 0 0;
    padding: 0 0 0 44px;
    position: relative;
  }

  li::before {
    content: ' ';
    padding-right: 40px;
    // padding-top: -10px;
    width: 20px;
    height: 30px;
    background-image: url('/static/s6-tk.png');
    background-repeat: no-repeat;
    position: absolute;
    top: 13px;
    left: 7px;
    // transform: translateY(-10%);
  }

  .sub-box-text {
    font-family: "Montserrat", sans-serif;
    display: flex;
    padding-left: 230px;
    width: 444px;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 26px;
    line-height: 40px;
    text-transform: uppercase;
    color: #fff;
  }
`
