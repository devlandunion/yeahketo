import css from "styled-jsx/css"

export default css`
  .title {
    color: #6b2d92;
    font-family: "Montserrat";
    font-size: 44px;
    line-height: 45px;
    margin: 0;
    margin-top: 40px;
  }
  .subtitle {
    font-size: 34px;
    color: #2d2d2d;
    margin: 10px 0 0 0;
  }
  *{
    box-sizing: border-box;
  }
  .section-6 {
    width: 640px;
    margin: 0 auto;
    text-align: center;
    padding: 0 0 55px;
  }
  .section-6 .common-txt {
    color: #595959;
    font-size: 30px;
    margin: 0;
    padding: 14px 20px 20px 20px;
  }
  .section-6 .quality-img {
    padding: 10px 0;
    max-width: 100%;
  }
  .section-6 .list-done {
    padding: 0px;
    margin-block-end: 2em;
    margin-bottom: 41px;
  }
  .section-6 .list-done li {
    float: left;
    text-align: left;
    font-size: 32px;
    font-family: "Open Sans", sans-serif;
    border-bottom: 1px solid #e3e3e3;
    color: #4e1e6c;
    padding: 10px 0 10px 110px;
    width: 100%;
  }

  .section-6 .list-done li:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
  ul{
    float: left;
    width: 100%;
    text-align: left;
    list-style: none;
  }
  .block-img-bg {
    background: #551c73;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Montserrat";
    font-size: 33px;
    font-weight: bold;
    line-height: 34px;
    padding: 15px;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    word-spacing: -11px;
  }
  .brd-line{
    width: 100%;
  }
  li {
    font-size: 26px;
    text-align: left;
    color: #4e1e6c;
    padding: 0 0 0 38px;
    background: url("/static/s6-tike.png") no-repeat
    60px 14px;
  }
`

