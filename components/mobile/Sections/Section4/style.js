import css from "styled-jsx/css"

export default css`
  .main-text {
    width: 100%;
    text-align: center;
    font-size: 30px;
    color: #595959;
    line-height: 40px;
    margin-top: 22px;
    margin-bottom: 21px;
    max-width: 600px;
  }
  .main-subtitle {
    float: left;
    width: 100%;
    font-size: 33px;
    line-height: 33px;
    text-align: center;
    color: #2d2d2d;
    margin: 0 auto;
    padding: 12px 0 0 0;
    font-weight: bold;
  }
  .main-title {
    font-size: 46px;
    line-height: 55px;
    text-align: center;
    color: #6b2d92;
    margin: 0 auto;
    font-weight: bold;
  }

  .container {
    margin-top: 43px;
  }
  .bottle {
    max-width: 269px;
    max-height: 504px;
    margin: auto;
  }
  .benefits {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 31px;
  }
  .text {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 86%;
    margin: auto;
    text-align: center;
  }
  .title {
    color: #4e1e6c;
    font-size: 35px;
    font-weight: bold;
    line-height: 35px;
    padding-top: 18px;
    width: 100%;
    text-transform: uppercase;
  }

  .sub-title {
    color: #2d2d2d;
    font-weight: bold;
    font-size: 35px;
    line-height: 35px;
    text-transform: uppercase;
  }

  .sub-text {
    margin-top: 10px;
    font-size: 29px;
    line-height: 40px;
    color: #717171;
    font-weight: 400;
    text-transform: none;
    letter-spacing: 0.5px;
    word-wrap: break-word;
    padding-bottom: 20px;
  }
  .img {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img::after {
    content: '';
    height: 0;
    position: absolute;
    left: 0;
    width: 640px;
    border-top: 3px dotted #CBBFD2;
    z-index: -1;
  }
  .benefits {
    width: 640px;
    margin: 0 auto;
  }
`
