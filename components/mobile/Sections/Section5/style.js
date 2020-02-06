import css from "styled-jsx/css"

export default css`
  .title {
    color: #6b2d92;
    font-family: "Montserrat";
    font-size: 43px;
    line-height: 45px;
    margin: 0;
  }
  .subtitle {
    font-size: 32px;
    color: #2d2d2d;
    margin: 0;
    margin-top: 10px;
    font-family: 'Montserrat';
    padding: 0;
  }
  .subtitle2 {
    font-size: 33px;
  }
  .subtitle3 {
    font-size: 33px;
    margin-top: 6px;
  }
  .common-txt {
    font-size: 30px;
    color: #2d2d2d;
    line-height: 40px;
    padding: 0px 10px;
  }
  .common-txt.brd {
    margin-bottom: 0;
  }
  .shema-img{
    max-width: 100%;
  }
  .section-5 {
    position: relative;
    text-align: center;
    width: 640px;
    margin: 0 auto;
    background: url('../../../../static/section-5.jpg')
      no-repeat center top;
    padding: 40px 0 0 0;
  }
  .section-5 .block-img {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .section-5 .block-img .left-img {
    margin: 38px 0 0 28px;
  }
  .section-5 .block-img .center-img {
    position: absolute;
    top: 188px;
    left: 293px;
  }
  .section-5 .common-txt {
    padding: 0px 12px 0;
    margin-bottom: 20px;
  }
  .section-5 .common-txt.brd {
    padding: 0 10px 22px;
    margin: 0;
    margin-top: 7px;
  }
  .section-treatment {
    text-align: center; 
  }
  .section-treatment__img-wrap {
    display: flex;
    align-items: flex-start;
    background: url("../../img/section-5.jpg") no-repeat; 
  }
  .section-treatment__img-wrap img:nth-child(1) {
    margin: 18px 0 0 28px; 
  }
  .section-treatment__img-wrap img:nth-child(2) {
    margin-top: 28px;
    transform: translateX(-10px); 
  }
  .section-treatment__label {
    font-size: 30px;
    color: #2d2d2d; 
  }
  .section-treatment__question-title {
    font-family: "Montserrat", sans-serif;
    font-size: 34px;
    font-weight: bold;
    margin-bottom: 20px; 
  }
  .section-treatment__question-text {
    margin-top: 20px;
    font-size: 30px;
    line-height: 40px; 
  }
  .section-treatment__diagram {
    width: 170px;
    height: 170px;
    overflow: hidden;
    border-radius: 50%;
    position: relative;
    background: #4e1e6c; 
  }
  .section-treatment__diagram-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px; 
    padding-bottom: 15px;
  }
  .section-treatment__diagram-history .history__list {
    text-align: left;
    font-weight: bold;
    font-size: 30px;
    letter-spacing: -1px;
    line-height: 45px;
    padding-left: 25px; 
  }
  .section-treatment__diagram-history .history__list-elem {
    display: flex;
    align-items: center;
    list-style: none; 
  }
  .section-treatment__diagram-history .history__list-elem div {
    height: 16px;
    width: 16px;
    border-radius: 100%;
    margin-right: 10px;
    background-color: #000; 
  }
  .section-treatment__diagram-history .history__list-elem:nth-child(1) div {
    background: #4e1e6c; 
  }
  .section-treatment__diagram-history .history__list-elem:nth-child(2) div {
    background: #975cbb; 
  }
  .section-treatment__diagram-history .history__list-elem:nth-child(3) div {
    background: #f26d0d; 
  }
  .section-treatment__diagram-sector-first {
    width: 50%;
    height: 50%;
    position: absolute;
    left: 50%;
    top: 0;
    transform-origin: left;
    background: #975cbb; 
  }
  .section-treatment__diagram-sector-second {
    width: 50%;
    height: 50%;
    position: absolute;
    left: 50%;
    top: 0;
    background: #f26d0d;
    transform: skew(108deg) rotate(0deg);
    transform-origin: left bottom; 
  }

`
