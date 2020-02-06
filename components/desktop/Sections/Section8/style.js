import css from "styled-jsx/css"

export default css`
  .container {
    display: flex;
    justify-content: flex-start;
    max-width: 1900px;
    width: 100%;
  }

  .section8 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    width: 1165px;
    margin: 0 auto;
  }
  .logo__img {
    padding: 36px 36rem 0 0;
  }
  .logo__img--weight{
    padding-left: 8px;
  }
  .annotation {
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    font-style: italic;
    color: #373737;
    position: absolute;
    top: 450px;
    right: 833px;
  }

  .text {
    width: 566px;
    height: 52px;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    color: #191919;
    margin-bottom: 0;
    margin-right: 597px;
  }

  .bottle {
    position: absolute;
    top: 41%;
    right: 33%;
  }

  .seal {
    position: absolute;
    top: 22%;
    left: 50.2%;
  }

  ul {
    list-style: none;
    align-self: flex-start;
    position: relative;
    top: 2%;
    left: -3%;
  }

  li {
    font-size: 23px;
    line-height: 37px;
    font-weight: 400;
    text-align: left;
    color: #1a1a1a;
    margin: 0 0 0 0;
    padding: 2px 0 10px 59px;
    position: relative;
  }

  li::before {
    content: ' ';
    width: 40px;
    height: 40px;
    left: 8px;
    top: -5px;
    position: absolute;
    background-repeat: no-repeat;
    background-image: url('https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s1-tk.png');
  }

  .upperText {
    font-weight: bold;
    color: #ea6302;
    text-transform: uppercase;
  }

  .s8arrow {
    transform: rotate(-35deg);
    position: absolute;
    top: 65%;
    left: 40.5%;
    opacity: 0;
  }

  .sec8-arr-wo {
    top: 74%;
    left: 33%;
    transform: rotate(17deg);
    transition: all 1s ease 0s;
    opacity: 1;
  }
  .btn {
    position: relative;
    right: 34.5%;
    bottom: 4%;
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
    padding-left: 12px;
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
      opacity: 0.8;
      transform: scale(0.9);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      // opacity: 0.8;
      transform: scale(0.9);
    }
`
