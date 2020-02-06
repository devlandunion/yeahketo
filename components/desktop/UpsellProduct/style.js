import css from "styled-jsx/css"

export default css`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap');
  .Box {
    background: white;
    width: 1004px;
    border-radius: 10px;
    position: relative;
    border: 1px solid #ccc;
  }
  .images {
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
    margin-left: 150px;
  }
  .images img {
    height: 45px;
  }
  .img_logos img {
    float: left;
    margin-left: 10px;
    margin-top: 30px;
    width: 250px;
  }
  .Save {
    background: url(../../../static/promo/desktop/images/up-seal.png);
    width: 100px;
    height: 100px;
    top: 14%;
    left: 327px;
    position: absolute;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 128px;
    height: 128px;
    border-radius: 90px;
    font-size: 30px;
    line-height: 28px;
    font-weight: bold;
    color: #000;
    text-transform: uppercase;
    margin-top: 35px;
  }
  .Pictures {
    position: absolute;
    top: 40%;
    left: 36.8%;
  }
  .header {
    text-align: center;
  }
  .head {
    font-size: 33px;
    line-height: 38px;
    padding-top: 13px;
    color: #ff0000;
    font-weight: bold;
    font-family: 'Montserrat';
  }
  .subhead {
    font-size: 18px;
    line-height: 26px;
    color: #202020;
    font-family: "Hind",sans-serif;
    font-weight: 300;
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px 40px 40px 40px;
  }
  .description {
    background: #fdeef6;
    width: 60%;
    padding-left: 50px;
    padding-right: 34px;
    border: 1px solid #ffd7ec;
    border-radius: 0px 10px 10px 0px;
  }
  .Boost {
    font-size: 28px;
    line-height: 60px;
    color: #000;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Montserrat';
    padding-top: 2px;
  }
  .BottleBox {
    background: #481048;
    padding: 42px 40px;
    width: 38%;
    border-radius: 10px 0px 0px 10px;
    border: 1px solid #ffd7ec;
    height: 430px;
  }
  .YEAHFORK {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .YEAH {
    background: silver;
    color: #5a1b3b;
    padding: 5px 10px 0px 10px;
    border-radius: 20px;
    font-size: 26px;
  }
  .FORSKOLIN {
    font-size: 28px;
    line-height: 45px;
    color: #4b052a;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Montserrat';
  }
  .Advanced {
    margin-bottom: 20px;
    color: #481048;
    font-size: 20px;
    line-height: 30px;
    font-weight: 600;
    width: 100%;
    font-family: "Hind",sans-serif;
    margin-top: 5px;
  }
  .table {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: space-around;
    -webkit-justify-content: space-around;
    -ms-flex-pack: space-around;
    justify-content: space-around;
    // padding: 0 25px 0 25px;
    line-height: 24px;
  }
  .table img {
    width: 24px;
    margin: auto;
    padding: 2px;
  }
  .table_flex {
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 20px;
    font-family: "Hind",sans-serif;
    font-weight: 600;
  }
  .col_1 {
    border-right: 1px solid grey;
    padding-right: 25px;
    font-family: "Hind",sans-serif;
    font-weight: 600;
  }
  .col_3 {
    border-left: 1px solid grey;
    padding: 0 0px 0 25px;
    font-family: "Hind",sans-serif;
    font-weight: 600;
  }
  .sale_box {
    width: 90%;
    display: inline-block;
    border: 2px dashed #ff0000;
    background: #fffcd7;
    border-radius: 5px;
    padding: 10px 27px 10px 27px;
    margin-top: 20px;
    font-family: 'Hind','Open Sans';
  }
  .sale_hunt {
    color: #481048;
    font-size: 23px;
    line-height: 30px;
    margin-bottom: 3px;
  }
  .upsell-one-form {
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
    font-weight: 400;
  }

  .upsell-two-price .disc_before {
    display: none;
  }
  .upsell-two-price .disc_after {
    color: #4b052a;
    font-size: 50px;
    line-height: 54px;
  }
  .descprice{
    position:relative;
  }
  .descprice::before{
    content: '';
    position: absolute;
    width: 110%;
    top: 17px;
    left: 2px;
    transform: rotate(-10deg);
    background-color: red;
    height: 2px;
  }
  .line-minus {
    border-top: 3px solid red;
    position: absolute;
    width: 110%;
    top: 17px;
    left: -10px;
    transform: rotate(-10deg);
  }
  .disc_before {
    position: relative;
    color: #666;
    font-weight: 300;
    font-size: 35px;
    line-height: 45px;
    margin-right: 10px;
  }
  .disc_after {
    color: #4b052a;
    font-size: 35px;
    line-height: 45px;
    font-weight: bold;
  }
  .buttons {
    display: flex;
    flex-direction: column;
  }
  .yes {
    height: 66px;
    width: 387px;
    background-image: linear-gradient(to bottom,#f2be59 0%,#faad10 100%);
    border: 1px solid #f7dbb2;
    text-shadow: 1px 2px 0px #fcdb8f;
    border-radius: 5px;
    font-weight: 800;
    font-size: 25px;
    margin: 0 20px 10px 20px;
    font-family: 'Montserrat';
    cursor: pointer;
    color: #2b2b2b;
  }
  .no {
    background: none;
    border: none;
    color: grey;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
  }
  .no-img {
    vertical-align: middle;
   }
  .img_logos {
    box-sizing: border-box;
    width: 990px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 24px 0 9px 0;
  }
  .progress-bar {
    display: grid;
    grid-auto-columns: minmax(0, 4.8rem);
    grid-template:
      'c1 l1 l1 c2 l2 l2 c3' 1fr
      'n1 n2 n2 n2 n2 n2 n3' 1fr;
    place-items: center;
    white-space: nowrap;
    height: 60px;
    max-width: 396px;
  }
  .line {
    border: 1px solid #eaeaea;
    background-color: #f5f5f5;
    height: 5px;
    width: 150%;
  }
  .circle {
    align-items: center;
    color: #b8b9b9;
    display: flex;
    background-color: white;
    border: 1px solid #d6d6d6;
    border-radius: 50%;
    font-family: 'Open Sans', sans-serif;
    height: 28px;
    width: 28px;
    justify-content: center;
    z-index: 10;
    font-weight: 700;
    font-size: 15px;   
  }
  .stage-name {
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
  }
  .active {
    background-color: #663191;
    color: white;
    border: 2px solid white;
  }
  #cicle-1 {
    grid-area: c1;
  }
  #cicle-2 {
    grid-area: c2;
  }
  #cicle-3 {
    grid-area: c3;
  }
  #name-1 {
    grid-area: n1;
  }
  #name-2 {
    grid-area: n2;
  }
  #name-3 {
    grid-area: n3;
  }
  #line-1 {
    grid-area: l1;
  }
  #line-2 {
    grid-area: l2;
  }

  .ups-head img {
    margin: 0;
    padding: 
  }

  .ups-circle2,
  .ups-circle2-name {
    margin-left: 20px;
  }

  .ups-head #keto-logo {
    margin: 0px 0px 12px 19px;
  }

  .Save span {
    display: inline-block;
    margin-top: -7px;
    font-family: 'Hind', sans-serif;
  }
`
