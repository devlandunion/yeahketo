import css from "styled-jsx/css"

export default css`
  section {
    /* background : url(https://picsum.photos/1920/1080?random=1) center no-repeat; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .Section1 {
    display: flex;
    justify-content: center;
    align-items: normal;
    position: relative;
    // height: 920px;
    padding: 20px;
  }
  .Section2 {
    background: url(https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/section2.jpg)
      center top no-repeat;
    height: 660px;
    /* min-width: 1700px; */
  }
  .Section3 {
    /* min-width: 1700px; */
    height: 828px;
  }
  .Section4 {
    /* min-width: 1700px; */
  }
  .Section5 {
    background: url(https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/section5.jpg)
      center top no-repeat;
    height: 770px;
    /* min-width: 1700px; */
  }
  .Section6 {
    /* min-width: 1700px; */
  }
  .Section7 {
    height: 763px;
    /* min-width: 1700px; */
  }
  .Section8 {
    background: url(https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/section8.jpg)
      center top no-repeat;
    height: 907px;
    min-width: 1165px;
  }
  .Strip1 {
    background: url(https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/strip1.jpg)
      center top no-repeat;
    height: 634px;
  }
  .Strip2 {
    background: url(https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/strip2.jpg)
      center top no-repeat;
    height: 634px;
  }
  .Strip3 {
    background: url(https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/strip3.jpg)
      center top no-repeat;
    height: 634px;
  }
  .Strip4 {
    background: url(https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/strip4.jpg)
      center top no-repeat;
    height: 634px;
  }
  .Strip5 {
    background: url(https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/strip5.jpg)
      center top no-repeat;
    height: 634px;
  }
  .Footer {
    border-top: 1px solid #d6d6d6;
    margin: 0 auto;
  }
  .topbar {
    background: #191a1a;
    color: white;
    height: 2rem;
    margin: 0;
    padding: 0;
    top: 0;
    width: 100%;
    z-index: 10;
  }
  .container {
    display: flex;
    height: 100%;
    place-content: center;
    place-items: center;
    width: 100%;
  }
  .topbartxt {
    white-space: nowrap;
  }
  span {
    font-family: 'Montserrat', sans-serif;
    color: #ff1e00;
    font-weight: 600;
  }
`
