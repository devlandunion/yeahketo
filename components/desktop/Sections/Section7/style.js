import css from "styled-jsx/css"

export default css`
  /*======================start section7====================*/

  li {
    list-style: none;
  }
  .s7-hd1 {
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 49px;
    line-height: 55px;
    text-align: center;
    color: #6b2d92;
    margin: 0 auto;
    padding: 41px 0 0 0;
  }

  .s7-p1 {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #2d2d2d;
    margin: 0 auto;
    padding: 33px 0 0 0;
  }

  ul.s7-list {
    display: flex;
    justify-content: space-between;
    margin: 36px 0 0 0;
    padding: 0;
  }

  ul.s7-list li {
    width: 350px;
    text-align: center;
  }

  ul.s7-list li:nth-child(2) {
    margin: 0 0 0 40px;
  }

  ul.s7-list li:nth-child(3) {
    margin: 0 0 0 60px;
  }

  .s7-t1 {
    display: block;
    margin: 0 auto 0 auto;
  }

  .s7-list-p1 {
    font-size: 18px;
    line-height: 25px;
    font-style: italic;
    margin: 0 auto;
    padding: 18px 0 0 0;
    color: #2d2d2d;
    text-align: center;
    width: 350px;
  } 
  }

  .s7-list-p2 {
    font-size: 13px;
    line-height: 22px;
    margin: 0 auto;
    padding: 30px 0 0 0;
    color: #2d2d2d;
  }

  .s7-list-p2 span {
    font-size: 17px;
    color: #ef7600;
  }

  .s7-stars {
    margin: 0 0 0 25px;
  }

  .s4-hd2 {
    font-family: "Montserrat", sans-serif;
    font-size: 35px;
    line-height: 33px;
    text-align: center;
    color: #2d2d2d;
    margin: 0 auto;
    padding: 9px 0 0 0;
    font-weight: bold;
  }
`
