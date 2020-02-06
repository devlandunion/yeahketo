import css from "styled-jsx/css"

export default css`
  section {
    text-align: center;
  }
  section .title {
    width: 100%;
    margin: 0;
    font-size: 28px;
    color: #333333;
    line-height: 38px;
    font-family: 'Montserrat';
    font-weight: bold;
    text-transform: uppercase;
  }
  section .subtitle {
    width: 100%;
    font-size: 50px;
    color: #521374;
    line-height: 38px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
  }

  .strip {
    background: url('../../../../static/s-strip.jpg') no-repeat center top;
    padding: 55px 0 0;
    width: 640px;
    padding: 50px 0 35px 0;
    background-size: 100% 100%;
    margin: 0 auto;
    font-family: "Open Sans" !important;
  }
  .strip.one {
    background: url('../../../../static/s4-strip.jpg') no-repeat center top;
  }
  .strip.two {
    background: url('../../../../static/s5-strip.jpg') no-repeat center top;
  }
  .strip.three {
    background: url('../../../../static/s6-strip.jpg') no-repeat center top;
  }
  .strip.four {
    background: url('../../../../static/s7-strip.jpg') no-repeat center top;
  }
  .strip .subtitle {
    color: #333333;
    font-family: 'Montserrat';
    font-size: 27px;
    line-height: 38px;
    text-transform: uppercase;
  }
  .strip .title {
    color: #521374;
    font-size: 50px;
    font-weight: bold;
    line-height: 38px;
    padding: 15px 0;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
  }
  .common-txt {
    color: #595959;
    padding: 0 10px;
    font-size: 30px;
    margin: 0;
  }
  .common-txt.brd {
    border-bottom: 1px solid #acacac;
  }
`
