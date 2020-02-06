import css from "styled-jsx/css"

export default css`
  .timer {
    color: #ffc000;
    margin-left: 5px;
  }

  .subheader {
    font-family: 'Open Sans', sans-serif !important;
  }

  .form {
    position: relative;
  }
  /* Start of arrow animation for promo form*/
  .s1arrow {
    transform: rotate(-35deg);
    position: absolute;
    top: 154px;
    left: 250px;
    opacity: 0;
  }
  .s1-animate-arrow {
    transform: rotate(300deg);
    position: absolute;
    top: 129px;
    left: 74%;
  }

  .sec1-arr-wo {
    transform: rotate(317deg);
    transition: all 1s ease 0s;
    top: 226px;
    left: 253px;
    z-index: 9;
  }
  /* End of arrow animation for promo form*/

  form.promo-form {
    display: flex;
    flex-direction: column;
    width: 355px;
  }

  .s1-seal {
    margin: 6px 0 14px 22px;
  }
  .submitBtnImg{
    background-color:none;
    color:none;
  }
  button {
    animation: pulse 1.5s infinite;
    border-style: none;
    cursor: pointer;
    background-image: linear-gradient(to bottom,#f6b525 0%,#faad10 100%);
    border: 1px solid #f7dbb2;
    border-radius: 0.5rem;
    outline: none;
    font-family: 'Montserrat',sans-serif;
    font-weight: 800;
    letter-spacing: -1px;
    place-items: end;
    text-shadow: 1px 2px 0px #fcdb8f;
    text-transform: uppercase;
    white-space: nowrap;
    height: 74px;
    font-size: 30px;
    margin-bottom: 2px;
    padding-right: 74px;
    padding-top: 3px;
  }
  .button-span {
    width: 278px;
    float: left;
    color: white;
    font-size: 16px;
    place-items: end;
    text-transform: uppercase;
    white-space: nowrap;
    margin-bottom: 2px;
    text-shadow: 0px 0px 2px rgba(32,34,33);
    letter-spacing: 0px;
    font-weight: 500;
  }
  button:hover {
    filter: contrast(1.2);
  }
  button:active {
    box-shadow: 0px 0px 10px black;
    filter: contrast(1.5);
  }
  .arrow-span {
    position: absolute;
    top: 25%;
    left: 83%;
    color: white;
    transform: rotate(90deg);
    font-family: 'Material Icons';
    font-size: 23px;
    background: #FFBF10;
    padding: 7px 23px 7px 23px;
    border-radius: 10%;
    text-shadow: 3px 0px 0px #D99F04;
  }
  @keyframes pulse {
    0% {
      opacity: 0.9;
      transform: scale(0.9);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0.9;
      transform: scale(0.9);
    }
  }
  input {
    border: 1px solid #c5c7d1;
    height: 2rem;
  }
  select {
    background-color: white;
    border: 1px solid #c5c7d1;
    height: 2rem;
    padding-left: 1rem;
  }
  header {
    background-color: #18427b;
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    place-content: center;
  }
  header div {
    place-content: center;
  }
  form div {
    display: flex;
    justify-content: space-between;
  }

  .field-input {
    width: 308px;
    height: 30px;
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
  .field-select {
    width: 322px;
    height: 32px;
  }
  .field-error {
    color: #ca3c3c;
    grid-area: e;
    height: auto !important;
    padding-top: 2px;
    align-self: flex-start;
  }

  .error-position {
    position: absolute;
    bottom: -20px;
    border-radius: 3px;
    z-index: 100;
  }
  .error-expiry-month {
    width: 243px;
    line-height: 0.8;
    margin-bottom: 4px;
  }
  .error-expiry-year {
    width: 293px;
    line-height: 0.8;
    margin-bottom: 4px;
    margin-left: -65px;
  }
  .error-card-number {
    margin-left: 99px;
  }
  .error-cvv-cid {
    margin-left: 106px;
  }
  .desktop-field {
    display: flex;
    flex-direction: column;
    position: relative;
    flex-wrap: wrap;
  }

  .label-valid {
    color: #1cb841;
  }
  .label-invalid {
    color: #ca3c3c;
  }

  .field-valid {
    border: 1px solid #1cb841;
  }

  .field-invalid {
    border: 1px solid #ca3c3c;
  }

  .check::before {
    width: 18px;
    height: 18px;
    font-size: 18px;
    position: absolute;
    right: 4%;
    top: 25%;
  }

  #cvv-cid > .check::after {
    right: 32%;
    top: 50%;
    transform: translateY(-35%);
  }

  .checkout-check-invalid::before {
    right: 30px;
    top: 27%;
  }

  .checkout-check-invalid.checkout-check-1::before {
    top: 11px;
    right: 115px;
  }

  .checkout-check-invalid.checkout-check-2::before {
    top: 11px;
    right: 185px;
  }

  .check-valid.checkout-check-1::before {
    right: 120px;
    top: 10px;
  }

  .check-valid.checkout-check-2::before {
    right: 50.9%;
    top: 30%;
  }

  .check-valid.checkout-cvv::before {
    right: 30.5%;
    top: 23%;
  }

  .check-invalid.checkout-cvv::before {
    right: 30%;
    top: 28%;
  }

  .check-invalid::before {
    right: 4%;
    top: 14%;
    color: #ca3c3c;
  }

  .checkout-cvv::before {
    right: 30%;
  }

  .check-valid::before {
    color: #1cb841;
    right: 5%;
    top: 28%;
  }

  .checkout-check::before {
    width: 18px;
    height: 18px;
    font-size: 18px;
    position: absolute;
    top: 14%;
  }

  .check-invalid::after {
    top: 8px;
    content: 'clear';
    color: red;
    display: none;
  }

  .checkout-check-2::before {
    top: 8px;
    right: 115px;
  }

  .checkout-check-invalid::before {
    right: 3%;
    top: 28%;
  }

  .checkout-check-invalid.checkout-check-1::before {
    top: 11px;
    right: 115px;
  }
  .checkout-check-invalid.checkout-check-2::before {
    top: 11px;
    right: 185px;
  }

  .check-valid.checkout-check-1::before {
    right: 120px;
    top: 10px;
  }
  .check-valid.checkout-check-2::before {
    right: 190px;
    top: 10px;
  }
  .check-valid.checkout-cvv::before {
    right: 31%;
    top: 25%;
  }

  .checkout-field-input {
    grid-area: n;
    background: none;
    width: 216px;
    background-color: #fff;
    outline: none;
    border: 1px solid #c5c7d1;
    font-family: "Open Sans",sans-serif;
    color: #000;
    font-size: 17px;
  }

  .check-form-inp {
    max-width: 127px;
    margin-left: 8px;
  }

  .field-label {
    grid-area: l;
    justify-self: start;
    font-size: 14px;
  }

  .selectContainer {
    position: relative;
  }

  .checkout-inp-wrap {
    margin-top: 25px !important;
  }

  .inputContainer {
    display: flex !important;
    justify-content: flex-start;
    position: relative;
  }

  .formCvv {
    margin-left: 30px;
  }

  .field-select-1 {
    grid-area: s1;
    width: 60px;
    font-family: 'Open Sans', sans-serif;
    color: #000;
    font-size: 17px;
    padding: 5px;
    background-color: transparent;
    z-index: 10;
    min-height: 39px;
    margin-right: 5px;
  }

  .field-select-2 {
    grid-area: s2;
    width: 60px;
    font-family: 'Open Sans', sans-serif;
    color: #000;
    font-size: 17px;
    padding: 5px;
    background-color: transparent;
    z-index: 10;
    min-height: 39px;
  }
  .cards {
    display: flex !important;
    justify-content: space-between !important;
    width: 237px !important;
    margin-top: 16px !important;
  }
  img {
    box-sizing: border-box;
  }
  .checked-card {
    border-radius: 6px;
    border: 3px solid #01e478;
  }
  .error {
    font-size: 24px;
    color: #ca3c3c;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 0 !important;
  }

  .error p {
    font-size: 12px;
    margin-block-start: 0.5em;
    margin-block-end: 0.6em;
  }

  .error h1 {
    font-size: 14px;
    margin-block-start: 0.56em;
    margin-block-end: 0.56em;
  }

  .error h2 {
    font-size: 10px;
    margin-block-start: 0.4em;
    margin-block-end: 0.4em;
  }
  #main-part > #expDate {
    display: flex;
    justify-content: flex-start;
  }

  .formExpiry {
    margin-left: 10px;
    margin-right: 6px;
  }

  #main-part > div > .field-error {
    padding: 0 !important;
  }

  #main-part {
    padding-top: 0 !important;
  }

  #limit-offer {
    background-color: #143868;
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-size: 17px;
    font-weight: 300;
    font-style: italic;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 36px;
  }

  #payment-info {
    color: #fbc003;
    font-family: 'Montserrat', sans-serif;
    font-size: 29px;
    font-weight: 400;
    place-content: center;
    width: 100%;
    padding-top: 10px;
  }
  #final-step {
    padding-bottom: 7px;
    background: -webkit-linear-gradient(#e0e0e0, white, #e0e0e0, white);
    font-family: 'Montserrat', sans-serif;
    font-size: 45px;
    letter-spacing: -1px;
    place-content: center;
    text-transform: uppercase;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: 100%;
    font-weight: 700;
    margin-top: -4px;
  }
  #main-part {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background-color: white;
    border: 1px solid #526d9a;
    border-top: none;
    box-sizing: border-box;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    font-family: 'Open Sans',sans-serif;
    font-size: 0.9rem;
    place-content: space-around;
    place-items: center;
    width: 355px;
    padding: 15px;
  }
  #main-part > div {
    display: flex;
    margin-top: 12px;
    place-content: flex-start;
    place-items: center;
    place-self: center;
    width: 100%;
  }
  #main-part > .inputContainer {
    margin-top: 22px;
  }
  #main-part > .inputContainer input {
    min-height: 41px;
    box-sizing: border-box;
    max-width: 222px;
    padding-left: 5px;
  }
  #main-part .cvv-inp-wrap input {
    max-width: 126px;
    /* margin-left: 10px; */
  }
  #cvv-cid {
    display: flex;
    grid-template:
      'l n h'
      '. e e' 1fr / 110px 1fr 1fr;
  }

  #cvv-cid > .checkout-field-input {
    width: 100%;
  }

  #button-wrap-up {
    display: grid;
    grid-template:
      't a' auto
      'b a' auto;
    place-content: center space-evenly;
    width: auto;
    // margin-left: 10px;
  }
  #button-top {
    font-family: 'Montserrat', sans-serif;
    font-size: 31px;
    grid-area: t;
    place-items: end;
    text-shadow: 1px 2px 0px #fcdb8f;
    text-transform: uppercase;
    white-space: nowrap;
    width: auto;
    font-weight: 800;
    color: #333534;
    letter-spacing: -2px;
    margin-right: 20px;
  }
  #button-bottom {
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    grid-area: b;
    place-items: start;
    width: auto;
    white-space: nowrap;
    margin-left: 15px;
  }
  #nav-arrow {
    color: white;
    font-family: 'Material Icons';
    grid-area: a;
    place-items: center;
    margin-left:5px;
    padding:2px 0 0;
    width: auto;
    background-color:#faad10;
    border-radius: 0 10% 10% 0;
  }
  #nav-arrow2 {
    width: auto;
    background-color: #ffc000;
    height:100%;
    border-radius: 0 10% 10% 0;
  }
  #nav-content {
    font-size: 1.5rem;
    transform: rotate(90deg);
  }

  .secure {
    margin-top: 13px;
  }
  #secure-256 {
    display: flex;
    justify-content: center;
    font-size: 1rem;
    font-weight: 200;
  }
  #secure-icon {
    align-self: center;
    color: #787878;
    font-family: 'Material Icons';
    font-size: 1.3rem;
  }
  .cvvContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .help {
    grid-area: h;
    color: #0e5ca0;
    line-height: 34px;
    font-size: 14px;
    text-align: left;
    float: left;
    text-decoration: underline;
    font-style: italic;
    cursor: pointer;
    margin-left: 10px;
  }

  .chk-button {
    margin: 25px 0 40px 0;
  }
  #expDate .formExpiry{
    margin-right:0px;
    margin-left:0px;
  }
  #cvv-cid .formCvv{
    margin-left:0px;
  }
  .inputContainer .field-label,#expDate .formExpiry,#cvv-cid .formCvv{
      width:102px;
      text-align:right;
      margin-right: 6px;
    white-space: nowrap;
  }
  #cvv-cid .checkout-field-input{
    margin-left:0px;
    padding-left:0px;
  }
  #cvv-cid{
    place-content: flex-start!important ;
  }
  .help{
    white-space:nowrap;
    margin-left: 5px;
  }
  #expDate .wrapper {
    width: auto;
    position: relative;
  }

  #expDate .wrapper .checkout-check-1.fa-check.check-valid:before {
      right: 18%;
  }

  #expDate .wrapper .checkout-check-2.fa-check.check-valid:before {
      right: 16px;
  }
  .wrapper .field-select-2+.error-position {

  }
  .wrapper .error-position {

  }
  .checkout-check-invalid.checkout-check-1:before {
    right: 15%;
  }
  .checkout-check-invalid.checkout-check-2:before {
    right: 23%;
  }
  select {
    -moz-appearance: none;
  }

  .street-error.field-error {
    position: static !important;
  }
  .button-checkout {
    width: 325px;
    animation: pulse 1.5s infinite;
    border-style: none;
    cursor: pointer;
    background-image: linear-gradient(to bottom,#f6b525 0%,#faad10 100%);
    border: 1px solid #f7dbb2;
    border-radius: 0.5rem;
    outline: none;
    font-family: 'Montserrat',sans-serif;
    font-weight: 800;
    letter-spacing: -1px;
    place-items: end;
    text-shadow: 1px 2px 0px #fcdb8f;
    text-transform: uppercase;
    white-space: nowrap;
    height: 74px;
    font-size: 30px;
    padding-right: 73px;
    padding-top: 7px;
    padding-left: 8px;
  }
  .button-span {
    width: 283px;
    float: left;
    color: white;
    font-size: 16px;
    place-items: end;
    text-transform: uppercase;
    white-space: nowrap;
    margin-bottom: 2px;
    text-shadow: 0px 0px 2px rgba(32,34,33);
    letter-spacing: 0px;
    font-weight: 500;
  }
  .arrow-span {
    position: absolute;
    top: 25%;
    left: 83%;
    color: white;
    transform: rotate(90deg);
    font-family: 'Material Icons';
    font-size: 23px;
    background: #FFBF10;
    padding: 7px 23px 7px 23px;
    border-radius: 10%;
    text-shadow: 3px 0px 0px #D99F04;
  }
`
