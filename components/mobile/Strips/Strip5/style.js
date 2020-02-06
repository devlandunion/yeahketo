import css from "styled-jsx/css"

export default css`
  section {
    text-align: center;
    padding: 55px 0 43px;
  }
  section .title {
    width: 100%;
    margin: 0;
    font-size: 28px;
    color: #333333;
    line-height: 38px;
    font-family: "Montserrat";
    font-weight: bold;
    text-transform: uppercase;
  }
  section .subtitle {
    width: 100%;
    font-size: 50px;
    color: #521374;
    line-height: 38px;
    letter-spacing: -1px;
    font-weight: bold;
    text-transform: uppercase;
    // padding: 5px 0;
    margin: 0;
  }

  .strip {
  background: url("../../../../static/s-strip.jpg") no-repeat center top;
  padding: 55px 0 0px;
  width: 640px;
    margin: 0 auto;}
  .strip.one {
    background: url("../../../../static/s4-strip.jpg") no-repeat center top; }
  .strip.two {
    background: url("../../../../static/s5-strip.jpg") no-repeat center top; }
  .strip.three {
    background: url("../../../../static/s6-strip.jpg") no-repeat center top; }
  .strip.four {
    background: url("../../../../static/s7-strip.jpg") no-repeat center top;
    height: 265px;
    padding: 55px 0px 75px;

  }
  .strip .subtitle {
    color: #333333;
    font-family: "Montserrat";
    font-size: 28px;
    line-height: 38px;
    text-transform: uppercase; }

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
    font-size: 30px;
    line-height: 40px;
    margin: 0;
    padding: 0 10px;
  }
  .common-txt.brd {
    border-bottom: 1px solid #acacac;
  }
`
