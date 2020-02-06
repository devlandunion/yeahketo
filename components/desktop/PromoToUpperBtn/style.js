import css from "styled-jsx/css"

export default css`
  .btn {
    outline: none;
    text-decoration: none;
    color: #000;
  }
  .btn:active {
    box-shadow: 0px 0px 10px black;
    filter: contrast(1.5);
  }
  #button-wrap-up {
    display: contents;
  }
  @keyframes pulse {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.9);
    }
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
`
