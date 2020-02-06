import css from "styled-jsx/css"

export default css`
  .container {
    width: 640px;
    height: 1150px;
    margin: 0 auto;
    /* height: 1150px; */
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }

  .uppsel-head-logo {
    max-width: 250px;
  }
  .uppsel-head-marks {
    padding: 15px;
    max-width: 250px;
  }

  .product {
    display: block;
    margin: auto;
  }
  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .first-text {
    width: 100%;
    height: 20px;
    font-size: 24px;
    font-weight: bold;
    color: #ff0000;
    text-transform: uppercase;
    line-height: 31px;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .second-text {
    text-align: center;
    width: 100%;
    font-size: 24px;
    color: #242424;
    line-height: 30px;
    margin: 5px 0;
  }
  .description {
    background: #f7f9ff;
    border-top: 1px solid #e4f3ec;
    margin: 10px 0 0;
    width: 100%;
  }
  .boost {
    width: 100%;
    font-size: 32px;
    font-weight: bold;
    color: #000000;
    font-family: "Montserrat";
    text-transform: uppercase;
    line-height: 35px;
    text-align: center;
    margin: 25px 0 15px;
  }

  .bottle {
    display: flex;
    justify-content: center;
  }
  .advanced {
    color: #4b052a;
    font-size: 22px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    text-transform: none;
    margin: 10px 0;
  }
  .material {
    font-family: "Material Icons";
  }
  .first-ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 75%;
    margin-top: 20px;
  }
  .first-ul p {
    font-size: 24px;
    padding: 1px;
    background: #4b052a;
    border-radius: 20px;
    color: white;
  }
  .second-ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #282828;
    line-height: 28px;
    font-weight: 600;
    font-size: 25px;
    margin: 0px 0px 55px 10px;
  }
  .second-ul p {
    margin: 0;
  }
  .second-ul strong {
    font-weight: 700px;
  }
  .second-ul .first__component{
    padding-top: 30px;
  }
  .second-ul .second__component{
    padding-right: 20px;
  }
  .bottle-with-disc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 94%;
    margin: 0 auto;
    height: 332px;
  }
  .bottle {
    position: absolute;
    top: 55%;
    left: 45%;
    transform: translate(-60%, -55%);
  }
  .bg-bottle {
    width: 350px;
  }
  .picture {
    position: relative;
    height: 95%;
    width: 80%;
  }
  .payment-info {
    text-align: center;
    background: #fffcd7;
    border: 2px dashed #f00;
    box-sizing: border-box;
    padding: 20px 10px;
    border-radius: 5px;
  }
  .saveContainer {
    position: absolute;
    width: 100px;
    height: 100px;
    background: #ffc010;
    text-align: center;
    border-radius: 50%;
    border: 4px solid #ffc010;
    box-shadow: inset 0 0 0 2px #fff;
    font-size: 24px;
    line-height: 0.8;
    font-weight: bolder;
    text-transform: uppercase;
    margin-left: 20px;
  }
  .Save {
    display: block;
    position: relative;
    margin-top: 37px;
  }
  .icons {
    position: absolute;
    top: 20px;
    background: none;
    left: 0px;
  }
  .yes {
    animation: pulse 1.5s infinite;
    background-image: linear-gradient(to bottom,#FFBF39 0%,#FFAA02 100%);
    border: 1px solid #f9b34d;
    border-radius: 0.5rem;
    margin: 1rem 0;
    padding: 5px 0 0 0;
    font-size: 32px;
    width: 504px;
    height: 80px;
    outline: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    -webkit-text-fill-color: #38352B;
    -webkit-text-stroke-width: 1px;
    text-shadow: 1px 3px #FCD78E;
  }
  .no {
    background: none;
    border: none;
    color: grey;
    font-size: 14px;
    text-decoration: underline;
  }
  .no-img {
    vertical-align: middle;
  }
  .buy-free {
    color: #4b052a;
    font-size: 28px;
    font-weight: 700;
    line-height: 39px;
  }
  .buy-free-less {
    color: #1f1f1f;
    height: 100%;
    font-size: 28px;
    font-weight: 400;
    line-height: 39px;
    width: 100%;
  }
  .disc {
    font-size: 28px;
    font-weight: 400;
    color: #1f1f1f;
    line-height: 39px;
  }
  .sale_hunt {
    color: #4b052a;
    font-size: 24px;
    line-height: 30px;
    font-weight: bold;
  }
  .discount {
    display: flex;
    justify-content: center;
  }
  .discount_info {
    font-size: 24px;
    line-height: 30px;
    color: #1f1f1f;
  }
  .disc_before {
    position: relative;
    color: #666;
    font-weight: 300;
    font-size: 35px;
    line-height: 45px;
    margin-right: 10px;
  }
  .line-minus {
    border-top: 3px solid red;
    position: absolute;
    width: 130px;
    top: 22px;
    transform: rotate(-15deg);
  }
  .disc_after {
    color: #4b052a;
    font-size: 35px;
    line-height: 45px;
    font-weight: bold;
  }
  .uls {
    display: flex;
    width: 300px;
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
`
