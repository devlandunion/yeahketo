import css from "styled-jsx/css"

export default css`
  ul {
    list-style: none;
  }

  h2 {
    text-align: center;
    font-size: 39px;
    color: #ffffff;
    font-family: 'Montserrat';
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 6px;
    margin: 0;
  }

  .title-bg {
    width: 97%;
    font-family: 'Montserrat';
    font-size: 40px;
    color: #ffffff;
    font-weight: bold;
    display: flex;
    text-transform: uppercase;
    position: relative;
    margin: 31px 12px 0 12px;
  }
  .title-bg img {
    position: absolute;
    bottom: -20px;
    left: 37px;
    z-index: 9;
  }
  .title-bg .left {
    background: #ad441a;
    padding: 15px 28px;
    border-radius: 10px 0 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 33px;
  }
  .title-bg .right {
    background: #f26d0d;
    width: 100%;
    padding: 10px;
    border-radius: 0 10px 10px 0;
  }
  .title-bg.violet .left {
    background: #632981;
  }
  .title-bg.violet .right {
    background: #440863;
  }

  .section-3 .right h2 {
    padding: 0;
  }

  .vs {
    width: 100%;
  }
  .list-bg {
    margin-top: 15px;
    width: 619px;
    margin: 0 auto;
    padding: 0;
    height: 100%;
  }
  .pictures {
    max-width: 100%;
  }
  .title {
    font-size: 42px;
    color: #6b2d92;
    line-height: 45px;
    margin: 0px 20px 0 10px;
    font-family: 'Montserrat' !important;
    text-align: center;
  }
  .subtitle {
    font-size: 33px;
    color: #2d2d2d;
    margin-top: 10px;
    text-align: center;
    font-family: 'Montserrat';
  }
  .list-bg li {
    background: #ffede0;
    position: relative;
    line-height: 39px;
    margin-bottom: 20px;
    color: #2d2d2d;
    font-weight: 600;
    font-size: 30px;
    text-align: left;
    padding-left: 75px;
    white-space: nowrap;
  }
  .list-bg li span {
    background: #f26d0d;
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 100%;
    font-weight: 400;
    font-size: 36px;
    text-align: center;
    color: #fff;
  }
  .list-bg.violet li {
    background: #f0eaf3;
  }
  .list-bg.violet li span {
    background: #551c73;
  }
  .section-3 {
    padding: 35px 0 20px;
    width: 640px;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 130px;
  }
  .section-3 .subtitle {
    font-size: 32px;
    margin-bottom: 31px;
    margin-top: 13px;
  }
  .section-3 .p1 {
    font-size: 30px;
    color: #2d2d2d;
    padding: 8px 15px;
    line-height: 40px;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 15px;
  }
  .section-3 .p2 {
    float: left;
    width: 100%;
    font-weight: 500;
    font-family: 'Open Sans', sans-serif;
    font-size: 30px;
    line-height: 42px;
    text-transform: uppercase;
    text-align: center;
    color: #2d2d2d;
    margin: 0;
    padding: 7px 0 30px;
    box-sizing: border-box;
  }
  .section-3 .p2 span {
    font-size: 39px;
    color: #f26d0d;
    font-weight: 500;
    font-family: 'Open Sans', sans-serif;
  }
  .section-3 .p2.violet span {
    color: #551c73;
  }
  .s3-vs {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 34px;
  }
  .s3-vs-block {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 101px;
    width: 101px;
    border: 5px solid #cbcbcb;
    border-radius: 100%;
    font-weight: bold;
    font-size: 50px;
  }
  .s3-vs:after,
  .s3-vs:before {
    content: '';
    height: 4px;
    width: 265px;
    background-color: #cbcbcb;
  }

  .orange-img {
    margin-top: 14px;
  }

  .purple-img {
    margin-top: 14px;
  }
`
