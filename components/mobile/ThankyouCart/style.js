import css from "styled-jsx/css"

export default css`
  * {
    font-family: "Open Sans", sans-serif;
  }
  .header {
    font-weight: bold;
    font-size: 34px;
    line-height: 38px;
    color: #1a254f;
    text-align: center;
    padding-bottom: 5px;
    margin-top: 20px;
  }
  .thanks {
    font-size: 27px;
    line-height: 35px;
    color: #000;
    text-align: center;
    width: 100%;
  }
  .date {
    font-weight: 700;
    color: #6b2d92;
  }
  .subheader {
    font-size: 18px;
    line-height: 26px;
    width: 690px;
    margin: auto;
    text-align: center;
    color: #202020;
  }
  .order-reciept {
    color: #3a3a3c;
    font-size: 32px;
    line-height: 34px;
    font-weight: bold;
    text-align: left;
    text-transform: uppercase;
    margin: 15px 10px;
  }
  .cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .params {
    width: 100%;
  }
  .left {
    width: 100%;
  }
  .item-orderd {
    margin: 0 10px;
  }
  .head-item-orderd {
    margin-top: 70px;
    color: #3a3a3c;
    font-size: 26px;
    line-height: 30px;
    font-weight: 600;
  }
  .item {
    background: white;
    display: flex;
    height: 92px;
  }
  .item-image {
    border: 2px solid #f1f1f1;
    height: 88px;
    width: 92px;
    text-align: center;
    display: flex;
  }
  .item-image img {
    /* box-sizing: border-box; */
    max-width: 100%;
    max-height: 88px;
    margin: auto;
  }

  .item-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .item-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    font-weight: 700;
    font-size: 27px;
    line-height: 39px;
    color: #6b2d92;
    text-align: left;
  }
  .item-count {
    color: #545454;
    margin: 3px 0 0;
    font-weight: 400;
  }
  .item-price {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    font-weight: 700;
    color: #6b2d92;
    font-size: 20px;
    line-height: 23px;
    padding-top: 20px;
  }
  .total-price {
    width: 100%;
    font-weight: 700;
    color: #6b2d92;
  }
  .total-price hr {
    margin: 0 10px;
  }
  .data-info strong {
    font-weight: 700;
    font-size: 22px;
    line-height: 23px;
    margin-right: 10px;
  }
  .data-info {
    color: #2d2d2d;
    font-size: 20px;
    line-height: 28px;
    margin-left: 10px;
  }
  .total-item {
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    color: #6b2d92;
    margin: 10px;
  }
  .total-item span {
    font-size: 24px;
    font-weight: bold;
  }
  .total-word {
    font-size: 24px;
    line-height: 39px;
    color: #2d2d2d;
  }
  .free {
    color: #1a254f;
    padding-bottom: 5px;
    font-weight: 600;
    font-weight: bold;
  }
  .right {
    width: 100%;
    padding: 1px 10px 24px;
    display: flex;
    flex-direction: column;
    background: #f8f8f8;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
  }
  .info {
    width: 100%;
    color: #2d2d2d;
    font-size: 21px;
    line-height: 24px;
  }
  .title-info {
    width: 180px;
    font-weight: 600;
    margin: 5px 0px;
  }
  .content-info {
    margin-top: 3px;
    width: 250px;
  }
  .item-info {
    display: flex;
    justify-content: flex-start;
  }

  .shipping-text {
    font-size: 27px;
    font-family: "Open Sans", sans-serif;
    line-height: 39px;
    color: #545454;
    margin-bottom: 50px;
  }

  .shipping-price {
    float: right;
  }

  .shipping-price,
  .item-price {
    font-size: 24px;
    line-height: 39px;
  }
`
