import css from "styled-jsx/css"

export default css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  label {
    font-size: 25px;
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
    width: 200px;
    padding: 0 2% 0 3%;
    height: 58px;
    font-family: 'Hind', Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: #202020;
    text-align: left;
    font-style: normal;
    border: 1px solid #424242;
    margin-right: 15px;
    background-color: transparent;
    z-index: 10;
  }

  .cards {
    align-self: center;
    display: flex;
    justify-content: space-between;
    width: 440px;
    padding: 0px 35px;
    margin: 33px 0;
  }

  .checked-card {
    border-radius: 6px;
    border: 3px solid #01e478;
  }

  .expDate {
    display: flex;
    justify-content: flex-start;
    justify-content: space-between;
    width: 32%;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0px 35px;
  }

  .field-select-1,
  .field-select-2 {
    display: flex;
    flex-direction: column;
    position: relative;
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
    font-size: 36px;
    font-weight: bold;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 47px;
    top: 42px;
  }

  .checkout-check::before {
    font-size: 36px;
    font-weight: bold;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 13px;
    right: 35px;
  }

  .field-error {
    color: #ca3c3c;
    grid-area: e;
    font-size: 25px;
    height: auto;
    padding-top: 2px;
    align-self: flex-start;
  }
  .field-error--end {
    position: absolute;
    top: 105%;
    left: 17%;
    width: 500px;
    color: #ca3c3c;
    grid-area: e;
    font-size: 25px;
    height: auto;
    padding-top: 2px;
    align-self: flex-start;
  }
  .error {
    font-size: 24px;
    color: #ca3c3c;
    text-align: center;
  }
  .error p {
    margin: auto;
  }
  /* End of Validation*/

  .cardSecurityCode {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 80px;
  }

  .cvvHelpImg {
    padding: 30px 20px;
  }
  .selectContainer {
    padding: 0px 35px;
    margin: 33px 0;
  }
  .error {
    font-size: 24px;
    color: white;
    background-color: red;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 0 !important;
  }

  .error p {
    font-size: 21px;
    margin-block-start: 0.5em;
    margin-block-end: 0.6em;
  }

  .error h1 {
    font-size: 22px;
    margin-block-start: 0.56em;
    margin-block-end: 0.56em;
  }

  .error h2 {
    font-size: 18px;
    margin-block-start: 0.4em;
    margin-block-end: 0.4em;
  }
`
