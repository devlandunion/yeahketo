import css from "styled-jsx/css"

export default css`
  * {
    font-family: 'Open Sans', sans-serif;
  }
  .total {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
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
    text-align: center;
  }
  .cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #f1f1f1;
    padding: 46px 35px 30px 35px;
    margin: 30px 20px;
  }
  .params {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .left {
    width: 60%;
    padding-right: 15px;
  }
  .item-orderd {
    margin-top: 50px;
  }
  .head-item-orderd {
    margin-top: 45px;
    color: #3a3a3c;
    font-size: 26px;
    line-height: 30px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .item {
    background: white;
    display: flex;
    height: 92px;
    max-width: 515px;
    margin-right: 0;
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
    border: 2px solid #f1f1f1;
    width: 100%;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
  }
  .item-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    color: #3a3a3c;
    font-size: 20px;
    line-height: 23px;
  }
  .item-count {
    color: #8d8d8d;
    margin: 3px 0 0;
  }
  .item-price {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    color: #3a3a3c;
    font-size: 20px;
    line-height: 23px;
    padding-right: 20px;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
  }
  .total-price {
    width: 280px;
    margin-top: 20px;
    margin-right: 10px;
    float: right;
  }
  .data-info strong {
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    margin-right: 15px;
  }
  .data-info {
    color: #3a3a3c;
    font-size: 20px;
    line-height: 23px;
  }
  .total-item {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    line-height: 30px;
  }
  .free {
    color: #1a254f;
    padding-bottom: 5px;
    font-weight: 600;
    font-weight: bold;
  }
  .right {
    width: 40%;
    padding-left: 57px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
  .info {
    width: 100%;
    color: #3a3a3c;
    font-size: 18px;
    line-height: 24px;
  }
  .title-info {
    font-weight: 600;
    margin: 3px 0px;
    color: #3a3a3c;
    font-size: 18px;
    min-width: 100px;
    margin-top: 5px;
  }
  .content-info {
    font-weight: 600;
    margin-top: 3px;
    width: 250px;
  }
  .item-info {
    display: flex;
    justify-content: space-between;
  }

  .thank-cong {
    margin-top: 15px;
    font-family: 'Montserrat', sans-serif;
    font-size: 33px;
  }

  .order-reciept {
    margin-bottom: 23px;
  }

  .list-h1 {
    margin-top: 0;
  }

  .list-h2 {
    margin-top: 35px;
  }

  .list-h {
    font-size: 26px;
    line-height: 30px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  .item-title-top {
    font-weight: 600;
    font-size: 20px
  }

  .total-item {
    border-bottom: 1px solid #dcdcdc;
    padding: 10px 0;
  }

  .total-item:first-child {
    padding-top: 0;
  }

  .total-item:last-child {
    border-bottom: none;
  }
`
