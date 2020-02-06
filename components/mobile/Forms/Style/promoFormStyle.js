import css from "styled-jsx/css"

export default css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100vw;
    margin: 0;
    padding: 0;
  }

  form {
    width: 100%;
  }

  label {
    font-size: 20px;
    color: #000000;
    text-align: left;
    line-height: 25px;
    margin-right: 2%;
    display: block;
    padding-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 0 2% 0 3%;
    height: 58px;
    font-family: 'Hind', Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: #202020;
    text-align: left;
    font-style: normal;
    border: 1px solid #424242;
    margin: 0 auto;
  }

  select {
    width: 100%;
    padding: 0 2% 0 3%;
    height: 58px;
    font-family: 'Hind', Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: #202020;
    text-align: left;
    font-style: normal;
    border: 1px solid #424242;
    margin: 0 auto;
  }

  .main-part {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 31px;
    grid-gap: 14px;
  }

  .firstName {
    grid-column: 1 / 2;
  }

  .lastName {
    grid-column: 2 / 3;
  }

  .address-line-2 {
    grid-column: 1 / 3;
  }

  .city-field {
    grid-column: 1 / 3;
  }

  .state {
    grid-column: 2/3;
    grid-row: 5/6;
  }

  .desktop-field {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: flex-start;
  }

  .desktop-field label {
    font-size: 20px;
  }

  /* Start of Validation*/
  .label-valid {
    color: #1cb841;
  }

  .label-invalid {
    color: #ca3c3c;
  }

  .field-valid {
    border-color: #1cb841;
  }

  .field-invalid {
    border-color: #ca3c3c;
  }

  .check-valid::before {
    color: #1cb841;
  }

  .check-invalid::before {
    color: #ca3c3c;
  }

  .check::before {
    font-size: 30px;
    font-weight: bold;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 16px;
    top: 45px;
  }

  .checkout-check::after {
    font-family: 'Material Icons';
    font-size: 1.4rem;
    font-weight: bold;
    width: 30px;
    height: 30px;
    position: absolute;
  }

  .field-error {
    color: #ca3c3c;
    grid-area: e;
    font-size: 17px;
    height: auto !important;
    padding-top: 2px;
    align-self: flex-start;
  }
  
  .field-select {
    background: transparent;
  }

  /* End of Validation*/
`
