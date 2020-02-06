import css from "styled-jsx/css"

export default css`
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
    outline: none;
    width: 95%;
    padding: 0 2% 0 3%;
    height: 58px;
    font-family: "Hind", Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: #202020;
    text-align: left;
    font-style: normal;
    border: 1px solid #424242;
    margin: 0 auto;
  }

  .address-line-1 {
    grid-column: 1/3;
  }

  /*Start of validation*/
  .label-valid {
    color: #1cb841;
  }

  .label-invalid {
    color: #ca3c3c;
  }

  .field-error {
    color: #ca3c3c;
    grid-area: e;
    font-size: 17px;
    height: auto !important;
    align-self: flex-start;
    padding-top: 2px;
  }

  .field-valid {
    border-color: #1cb841 !important;
  }

  .field-invalid {
    border-color: #ca3c3c !important;
  }

  .desktop-field {
    position: relative;
    justify-content: space-between;
  }

  .check::before {
    font-size: 30px;
    font-weight: bold;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 11px;
    top: 45px;
  }

  .check-valid::before {
    color: #1cb841;
  }

  .check-invalid::before {
    color: #ca3c3c;
  }
  /*End of validation*/
  .customLocation {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 0 4px 4px;
    width: 100%;
    justify-content: flex-start;
    text-align: start;
    font-family: "Arial",sans-serif;
    font-weight: 400;
    font-size: 11px;
    border-bottom: 1px solid rgba(128,128,128,0.1);
  }

  .customLocation:last-child {
    border-bottom: 0;
  }

  .customLocation,
  .fa-map-marker {
    color: grey;
  }

  .main-text,
  .main-text-description {
    color: grey;
  }

  .main-text {
    font-weight: 0;
    color: #222;
    padding: 0 5px 0 10px;
  }

  .main-text b {
    font-weight: bold;
    color: #000;
  }
`
