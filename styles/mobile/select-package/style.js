import css from "styled-jsx/css"

export default css`
  #container {
    display: flex;
    flex-direction: column;
  }

  .img-resp {
    width: 100%;
    padding: 2% 0;
    border-bottom: 1px solid #f4f4f4;
  }

  p.chk-toptxt1 {
    margin-block-start: 0.4em;
    margin-block-end: 0.3em;
    font-size: 30px;
    font-family:'Open Sans', sans-serif;
    font-weight: 900;
    text-align: center;
  }

  .pack1-prod {
    padding: 4px 0 0px;
    max-width: 479px;
    max-height: 267px;
  }

  .slct-box1 {
    width: 98%;
    margin: 0 auto 20px;
    border: 1px solid #651d85;
    border-radius: 12px;
    text-align: center;
    background: #fff;
  }

  .slct-mid {
    text-align: center;
    background: #651d85;
    border-radius: 10px 10px 0 0;
    padding: 0;
  }

  .seclt-txt1 {
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 32px;
    font-weight: bold;
    margin: 0;
    padding: 4px 0;
    text-transform: uppercase;
  }

  .seclt-txt2 {
    background: #43075e;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 30px;
    font-weight: bold;
    margin: 0;
    padding: 3px 0;
    text-transform: uppercase;
  }

  .select-mid-sec {
    background: #651d85;
    border-radius: 0 0 8px 8px;
    padding: 8px 0 13px 0;
  }

  .seclt-reg-txt {
    font-size: 20px;
    font-family: "Open Sans", sans-serif;
    line-height: 24px;
    color: #fff;
    text-align: center;
    margin: 0 auto;
  }

  .seclt-reg-txt span {
    position: relative;
  }

  .seclt-reg-txt span::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 2px;
    background: #e70414;
    transform: rotate(-10deg);
    bottom: 12px;
  }

  .seclt-reg-txt span img {
    position: absolute;
    top: 10px;
    left: 0px;
    height: 30px;
    width: 100%;
    display: none;
  }

  .seclt-txt1 span {
    color: #fff000;
  }

  .p5-pkgchk {
    padding: 2px 0 1px;
  }

  .prc-details-txt1 {
    color: #fff;
    display: inline-block;
    font-family:'Open Sans',sans-serif;
    font-size: 55px;
    font-weight: bold;
    margin: 0;
  }

  .prc-details-txt2 {
    font-size: 23px;
    font-family: 'Open Sans', sans-serif;
    display: inline-block;
    color: #fff;
    font-weight: normal;
    margin: 0;
  }

  .s-mid-txt2 {
    font-size: 22px;
    font-family: Montserrat,'Open Sans',sans-serif;
    color: #f26d0d;
    text-transform: uppercase;
    margin: 0;
    margin-top: 5px;
  }

  .s-mid-txt3 {
    // font-size: 16px;
    font-family: "Open Sans", sans-serif;
    color: #fff;
    margin: 10px 0 15px 0;
    text-transform: uppercase;
  }

  .link-container-5 img {
    text-align: center;
    width: 95%;
  }
`
