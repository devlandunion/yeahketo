import css from "styled-jsx/css"

export default css`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap');

  .section {
    background: url(https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/section1-v1.jpg)
      center top no-repeat;
    height: 100vh;
    display: block;
  }
  .header {
    box-sizing: border-box;
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  .content {
    box-sizing: border-box;
    width: 1004px;
    margin: auto;
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
    height: 0.3rem;
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

  .thank-head {
    padding-top: 25px;
    width: 1004px;
  }

  .thank-head #keto-logo {
    max-width: 250px;
  }
`
