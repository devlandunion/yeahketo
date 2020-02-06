import css from "styled-jsx/css"

export default css`
  /*======================start section3====================*/

  li {
    list-style: none;
  }
  div#section3 {
    height: 828px;
    min-width: 1165px;
  }

  .s3-hd1 {
    font-family: 'Montserrat';
    font-size: 48px;
    line-height: 47px;
    text-align: center;
    color: #6b2d92;
    margin: 0 auto;
    padding: 2px 0 0 0;
    font-weight: bold;
  }

  .s3-hd2 {
    font-family: 'Montserrat';
    font-size: 34.5px;
    line-height: 33px;
    text-align: center;
    color: #2d2d2d;
    margin: 0 auto;
    padding: 14px 0 0 0;
    font-weight: bold;
  }

  .s3-bg {
    background: url('../../../../static/s3-bg.png') center top no-repeat;
    margin: 30px auto 0 auto;
    position: relative;
    height: 696px;
  }

  .s3-bg-lft,
  .s3-bg-rgt {
    float: left;
    width: 567px;
  }

  .s3-bg-rgt {
    margin: 0 0 0 31px;
  }

  .s3-p1 {
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 35px;
    color: #fff;
    line-height: 40px;
    text-align: center;
    margin: 0 auto;
    padding: 42px 0 0 52px;
    text-transform: uppercase;
  }

  .s3-img1 {
    display: block;
    margin: 18px auto 0 auto;
  }

  .s3-img2 {
    display: block;
    margin: 33px auto 14px auto;
  }

  .s3-p2 {
    font-size: 18px;
    color: #2d2d2d;
    line-height: 26px;
    text-align: center;
    margin: 9px auto 0 auto;
    padding: 0 10px;
  }

  ul.s3-list1 {
    margin: 36px 0 0 38px;
  }

  ul.s3-list2 {
    margin: 36px 74px 0 0;
  }

  ul.s3-list1 li,
  ul.s3-list2 li {
    font-weight: 600;
    font-size: 17px;
    line-height: 27px;
    text-align: left;
    color: #191919;
    margin: 0 0 12px 0;
  }

  ul.s3-list2 li {
    text-align: right;
  }

  .s3-p3,
  .s3-p5 {
    font-size: 20px;
    line-height: 22px;
    text-align: center;
    color: #f26d0d;
    position: absolute;
    width: 100px;
    font-weight: 500;
    text-transform: uppercase;
    top: 473px;
    left: 475px;
  }

  .s3-p5 {
    color: #551c73;
    font-size: 19px;
    left: 586px;
    width: 120px;
  }

  .s3-p4,
  .s3-p6 {
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #2d2d2d;
    position: absolute;
    width: 100px;
    text-transform: uppercase;
    top: 559px;
    left: 475px;
  }

  .s3-p6 {
    left: 593px;
  }
  /* .header {
    text-align: center;
  }
  .header .pink {
    color: #6b2d92;
    font-weight: bold;
    font-size: 50px;
    line-height: 55px;
    font-family: 'Montserrat';
    margin: 0px;
  }
  .header .subheader {
    font-family: 'Montserrat';
    font-size: 36px;
    line-height: 33px;
    text-align: center;
    color: #2d2d2d;
    margin: 0 auto;
    padding: 9px 0 0 0;
    font-weight: bold;
  }
  .content {
    position: relative;
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
  }

  .left,
  .right {
    width: 567px;
  }

  .head {
    display: flex;
    justify-content: space-around;
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 36px;
    color: #fff;
    width: 87%;
    margin: auto;
    text-align: center;
    padding: 10px;
    border-radius: 20px;
    text-transform: uppercase;
  }
  .left .head {
    background-color: #f36c24;
  }
  .right .head {
    background-color: #632a7d;
  }
  .image {
    display: flex;
    justify-content: center;
  }
  .image {
    height: 240px;
  }
  .description {
    height: 100px;
  }
  ul {
    list-style-type: none;
  }
  li {
    font-weight: 600;
    font-size: 17px;
    line-height: 27px;
    text-align: left;
    margin: 0 20px 12px 0;
  }
  .numbers {
    color: white;
    padding: 2px;
  }
  .words {
    color: white;
  }
  .left li {
    display: flex;
  }
  .right li {
    display: flex;
  }
  .left .numbers {
    background: #e96e15;
    filter: contrast(2.5);
    padding: 0px 10px;
    font-size: 20px;
  }
  .right .numbers {
    background: #3e0652;
    filter: contrast(2);
    padding: 0px 10px;
    font-size: 20px;
  }
  .left .words {
    background: #c45300;
    filter: contrast(1);
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
  }
  .right .words {
    width: 100%;
    background: #3e0652;
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
  }

  .description {
    font-size: 18px;
    color: #2d2d2d;
    line-height: 26px;
    text-align: center;
    margin: 9px auto 0 auto;
    padding: 0 10px;
  }

  .dot {
    position: absolute;
    height: 110px;
    width: 110px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    top: -3%;
  }

  .dot::after {
    content: ' ';
    position: absolute;
    height: 100px;
    width: 100px;
    background-color: #fff;
    border-radius: 50%;
    top: 4%;
    right: 4%;
  }

  .dot::before {
    content: 'VS';
    position: absolute;
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 50px;
    z-index: 1;
    top: 22%;
    left: 20%;
  } */
`
