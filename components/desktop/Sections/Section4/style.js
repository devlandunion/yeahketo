import css from "styled-jsx/css"

export default css`
  * {
    font-family: 'Open Sans', sans-serif;
  }
  .main-text {
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #2d2d2d;
    margin: 0 auto;
    padding: 33px 0 13px 0;
  }
  .main-subtitle {
    font-size: 35px;
    line-height: 33px;
    text-align: center;
    color: #2d2d2d;
    margin: 0 auto;
    padding: 9px 0 0 0;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
  }
  .main-title {
    font-size: 49px;
    line-height: 55px;
    text-align: center;
    color: #6b2d92;
    margin: 0 auto;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
  }
  .bottle {
    position: relative;
    bottom: -44px;
    max-width: 259px;
  }
  .benefits {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
  }

  .container {
    display: flex;
  }
  .left {
    display: flex;
    flex-direction: column;
  }
  .right {
    display: flex;
    flex-direction: column;
    padding-left: 15px;
  }

  .benefit {
    display: flex;
    position: relative;
  }

  .benefit-border {
    position: absolute;
    bottom: 0;
    width: 400px;
    border-bottom: 2px dotted #e5e2e7;
    z-index: -1;
  }

  .border-left {
    left: 109px;
  }

  .border-right {
    right: 109px;
  }

  .text {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    box-sizing: border-box;
  }

  .text-right {
    align-items: flex-end;
  }

  .sub-text-right {
    text-align: right;
    // padding-left: 30px;
  }

  .sub-text-left {
    text-align: left;
    // padding-right: 38px;
  }

  .title {
    padding-top: 10px;
    color: #4e1e6c;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 27.6px;
    line-height: 32px;
  }

  .sub-title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 26px;
    line-height: 32px;
    color: #2d2d2d;
  }

  .sub-text {
    margin-top: 10px;
    font-size: 18px;
    line-height: 25px;
    color: #2d2d2d;
    font-weight: 400;
    text-transform: none;
    width: 320px;
    padding-bottom: 5px;
    max-width: 337px;
    box-sizing: border-box;
  }

  .icon-left {
    padding: 29px 25px 0 0;
  }
  .icon-right {
    padding: 29px 0 0 25px;
    // margin-left: 20px;
  }

  .left {
    padding-left: 0;
    padding-right: 15px;
    box-sizing: border-box;
  }
`
