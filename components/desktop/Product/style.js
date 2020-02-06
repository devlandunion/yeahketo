import css from "styled-jsx/css"

export default css`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,300,400,500,600,700,800,900|Open+Sans:300,400,600,700,800&display=swap');

  .box {
    display: flex;
    background-color: white;
    padding: 0.3rem 0 0.5rem 2rem;
    justify-content: space-evenly;
  }
  .box-checked {
    background-color: #fcf5ff;
  }

  .left-side {
    display: flex;
    justify-content: center;
    width: 50%;
  }
  .left-side img {
    height: 216px;
    max-width: 430px;
  }
  .right-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: inherit;
    width: 40%;
  }
  .checkout-product {
    max-width: auto;
    background-color: #636363;
    border-radius: 0.5rem;
    padding: 0.75rem;
    padding-top: 0.5rem;
    // width: 45rem;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  .checked-violet {
    background-color: #651e84;
  }
  input[type='checkbox'] {
    width: 21px;
    height: 21px;
    vertical-align: top;
    margin: 7px 6px 0px 0px;
  }
  input[type='checkbox']:checked {
    box-shadow: 0px 0px 10px gray;
    vertical-align: top;
  }
  .bottles-quantity {
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 25px;
    letter-spacing: 1px;
    line-height: 35px;
    vertical-align: middle;
    color: white;
    white-space: nowrap;
    padding-left: 6px;
    // padding-bottom: 5px;
    display: inline-block;
  }

  .bottles-quantity-left {
    padding-left: 8px;
  }

  .yellow {
    color: #fff000;
  }

  .trapezoid {
    margin-top: -40px;
    left: 50%;
    margin-right: 50px;
    position: sticky;
    width: 172px;
    height: 2.3rem;
    background: rgb(252,244,255);
  }

  .trapezoid:before, .trapezoid:after {
    content:'';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50%;
    background: rgb(252,244,255);
    border-radius: 10px 10px 0 0;
    z-index: -1;
    height: 110%;
  }

  .trapezoid:before{
    left: -20px;
    -webkit-transform: skewX(-30deg);
    -moz-transform: skewX(-30deg);
    -o-transform: skewX(-30deg);
    -ms-transform: skewX(-30deg);
    transform: skewX(-30deg);
}

  .trapezoid:after{
    right: -20px;
    -webkit-transform: skewX(30deg);
    -moz-transform: skewX(30deg);
    -o-transform: skewX(30deg);
    -ms-transform: skewX(30deg);
    transform: skewX(30deg);
  }

  .trapezoid-checked, .trapezoid-checked:after, .trapezoid-checked:before {
    background: #fcf5ff;
    border-color: #fcf5ff;
  }

  .trapezoid .shipping-label {
    margin-top: -2px;
  }

  .trap-triangle {
    position: absolute;
    haight: 20px;
    width: 20px;
    background: white;
    border-radius: 50%;
  }

  .trap-tri-left {
    left: -20px;
    top: 0;
    z-index: 100;
  }

  .trap-tri-right {
    right: -20px;
    top: 0;
    z-index: 100;
  }

  .shipping-label {
    font-family: 'Open Sans', sans-serif;
    left: 60%;
    letter-spacing: 1px;
    position: absolute;
    text-transform: uppercase;
    transform: translate(-50%, 50%);
    white-space: nowrap;
    display: inline-block;
    margin-top: -5px;
  }
  .shipping-label img {
    position: absolute;
    top: -15%;
    left: -29%;
  }
  .ribbon {
    min-width: 268px;
    height: 2rem;
    position: relative;
    background: #4c4c4c;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    font-size: 21px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ribbon-checked {
    background: #43075e;
  }

  div .ribbon-checked:before {
    border-right: 0.5rem solid #fcf5ff;
  }

  div .ribbon-checked:after {
    border-left: 0.5rem solid #fcf5ff;
  }

  .ribbon:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 0.5rem solid white;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
  }

  .ribbon:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-right: 0.5rem solid white;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
  }

  .reg-price {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    white-space: nowrap;
    text-transform: uppercase;
    position: relative;
    font-size: 17px;
    margin-top: 12px;
    box-sizing: border-box;
  }

  .reg-price svg {
    display: none;
  }

  .crossed-out {
    position: relative;
  }

  .crossed-out::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height 2px;
    background: #ff0000;
    transform: rotate(-8deg);
  }

  .diagonal-line {
    position: absolute;
    bottom: 33%;
    left: 11px;
    transform: rotate(-21deg) scaleX(1.3);
  }
  .promo-price {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 3rem;
    color: #2d2d2d;
    margin-top: -4px;
  }
  .each {
    font-weight: 400;
    font-size: 1.4rem;
  }
  .you-save {
    color: #f26d0d;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 21px;
    text-transform: uppercase;
    display: inline-block;
    // margin-top: 10px;
    // margin-bottom: 5px;
    margin-top: -5px;
  }
  .select-button {
    background-image: linear-gradient(to bottom, #bababa 0%, #9d9d9d 100%);
    border: 2px solid #8a8a8a;
    border-radius: 0.3rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 26px;
    font-weight: 800;
    height: 3.2rem;
    text-shadow: 1px 2px 0px #d5d5d5;
    text-transform: uppercase;
    width: 14rem;
    margin-top: 3px;
    color: #212121;
    // letter-spacing: -1px;
  }
  .selected {
    background-image: linear-gradient(to bottom, #f2be59 0%, #faad10 100%);
    border: 1px solid #f7dbb2;
    text-shadow: 1px 2px 0px #fcdb8f;
  }
  .container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    line-heght: 30px;
    margin-bottom: 10px;
  }
  .checkedImage {
    position: relative;
    margin-top: 3px;
  }
`
