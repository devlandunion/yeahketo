import css from "styled-jsx/css"

export default css`
  .content {
    margin-top: 174px;
    margin-left: 302px;
    display: flex;
    justify-content: flex-start;
  }
  .content img {
    width: 159px;
    height: 310px;
  }
  .description {
    max-width: 1165px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .pink {
    font-weight: bold;
    font-size: 67px;
    line-height: 60px;
    color: #521374;
    padding: 0;
    margin: 0 0 0 -3px;
  }
  .header {
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    letter-spacing: -1px;
    color: #333333;
    text-transform: uppercase;
    font-family: 'Montserrat';
    margin: 10px 0px 0 0px;
  }
  .descr {
    font-size: 20px;
    line-height: 26px;
    width: 700px;
    color: #191919;
    max-width: 520px;
    margin-top: 13px;
  }
  .bold {
    font-size: 20px;
    line-height: 26px;
    text-align: left;
    color: #191919;
  }
  @keyframes pulse {
    0% {
      opacity: 0.8;
      transform: scale(0.9);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      // opacity: 0.8;
      transform: scale(0.9);
    }
  }
`
