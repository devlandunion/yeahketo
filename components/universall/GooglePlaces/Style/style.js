import css from "styled-jsx/css"

export default css`
  .desktop-field {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    place-content: space-between;
    place-items: center;
    width: 100%;
  }
  #street {
    border: 1px solid #c5c7d1;
    margin-left: 1px;
    transform: translate(-0.3%);
    width: 308px;
    margin-top: -4px;
  }
  .field-label {
    grid-area: l;
    place-self: center start;
  }
  .field-input {
    grid-area: n;
    width: 100%;
    outline-color: transparent;
    font-size: 16px;
    color: #000;
    background: none;
    height: 30px;
    background-color: #fff;
    outline: none;
    padding: 0 6px;
    border-radius: 4px;
    border: 1px solid #c5c7d1;
  }
  .field-error {
    position: absolute;
    top: 105%
    left: 30%
    width: 500px;
    color: #ca3c3c;
    grid-area: e;
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
  }

  .check::before {
    width: 18px;
    height: 18px;
    font-size: 18px;
    position: absolute;
    right: 9%;
    top: 15%;
  }

  .check-valid::before {
    color: #1cb841;
  }

  .check-invalid::before {
    right: 4%;
    top: 8%;
    color: #ca3c3c;
  }

  .check-valid::before {
    right: 5%;
  }
  
  .customLocation {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 0 4px 4px;
    width: 100%;
    justify-content: flex-start;
    text-align: start;
    border-bottom: 1px solid gray;
    font-family: "Arial", sans-serif;
    font-weight: 400;
    font-size: 11px;
  }
  
  .customLocation:last-child  {
    border-bottom: 1px solid rgba(128,128,128,0.1);
  }
  
  .customLocation ,
  .fa-map-marker {
    color: grey;
    padding-left: 3px;
  }
  
  .main-text,
  .main-text-description {
    color: grey;
  }
  
  .main-text {
    font-weight: 0;
    color: #222;
    padding: 0  5px 0 10px; 
    font-size: 13px;
  }
  
  .main-text b {
    font-weight: bold;
    color: #000;
  }
`
