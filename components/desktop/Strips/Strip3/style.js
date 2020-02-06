import css from "styled-jsx/css"

export default css`
  .content {
    margin-top: 190px;
    display: flex;
    margin-left: -300px;
  }

  .content img {
    width: 159px;
    height: 310px;
  }

  .description {
    max-width: 1165px;
    padding-left: 31px;
  }

  .pink {
    font-weight: bold;
    font-size: 67px;
    line-height: 60px;
    color: #521374;
    margin: 0 0 0 -1px;
  }

  .header {
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    letter-spacing: -1px;
    color: #333333;
    font-family: 'Montserrat';
    margin-bottom: 0px;
    margin-top: 0;
  }

  .descr {
    font-size: 20px;
    line-height: 26px;
    width: 700px;
    color: #191919;
    max-width: 600px;
    font-weight: 400;
    margin: 14px 0 0 0;
  }

  .bold {
    font-size: 20px;
    line-height: 26px;
    text-align: left;
    color: #191919;
  }

  .bottle {
    margin-top: -8px;
    margin-left: -8px;
  }
  .PromoBtn {
    width: 230px;
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
    height: 65px;
    font-size: 30px;
    padding-right: 83px;
    padding-top: 10px;
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
