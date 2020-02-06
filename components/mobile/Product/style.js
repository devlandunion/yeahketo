import css from "styled-jsx/css"

export default css`
  .box {
    display: flex;
    background-color: white;
    padding: 1rem 0;
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
    padding: 1rem;
    padding-top: 0.5rem;
    width: 45rem;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  .checked-violet {
    background-color: #651e84;
  }

  input[type='checkbox'] {
    width: 2rem;
    height: 2rem;
    vertical-align: top;
  }
  input[type='checkbox']:checked {
    box-shadow: 0px 0px 10px gray;
    vertical-align: top;
  }
  .bottles-quantity {
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.8rem;
    vertical-align: middle;
    color: white;
    white-space: nowrap;
  }

  .yellow {
    color: #fff000;
  }

  .trapezoid {
    position: relative;
    display: inline-block;
    border-bottom: 2rem solid white;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    min-width: 10rem;
    vertical-align: bottom;
  }
  .trapezoid-checked {
    border-bottom: 2rem solid #fcf5ff;
  }
  .shipping-label {
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, 50%);
    font-family: 'Fira Sans', sans-serif;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
  }
  .shipping-icon {
    font-family: 'Material Icons';
    font-size: 1.5rem;
    font-weight: 200;
    position: absolute;
    text-transform: none;
    top: -25%;
    left: -25%;
  }
  .ribbon {
    min-width: 18rem;
    height: 2rem;
    position: relative;
    background: #4c4c4c;
    color: white;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
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
    font-family: 'Fira Sans', sans-serif;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
  }
  .crossed-out {
    position: relative;
  }
  .diagonal-line {
    position: absolute;
    bottom: 50%;
    left: 0;
    transform: translate(0, 50%);
  }
  .promo-price {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 3rem;
    color: #2d2d2d;
  }
  .each {
    font-weight: 200;
    font-size: 1.5rem;
  }
  .you-save {
    color: #f26d0d;
    font-family: 'Fira Sans', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  .select-button {
    background-image: linear-gradient(to bottom, #bababa 0%, #9d9d9d 100%);
    border: 2px solid #8a8a8a;
    border-radius: 0.3rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    height: 3rem;
    text-shadow: 1px 2px 0px #d5d5d5;
    text-transform: uppercase;
    width: 15rem;
  }
  .selected {
    background-image: linear-gradient(to bottom, #f2be59 0%, #faad10 100%);
    border: 1px solid #f7dbb2;
    text-shadow: 1px 2px 0px #fcdb8f;
  }
  .container {
    display: inline;
  }
`
