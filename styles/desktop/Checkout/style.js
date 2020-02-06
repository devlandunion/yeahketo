import css from "styled-jsx/css"

export default css`
  .Section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .chk-bg {
    background: url(/static/chk-bg.jpg);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .Content {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #d2dae4;
    width: 1170px;
    margin: auto;
    background: white;
    box-shadow: 0 0 15px 0 rgba(218, 215, 215, 0.8);
    padding: 31px 30px 20px 20px;
    box-sizing: border-box;
  }
  .Inside_content {
    // margin: 27px 20px 20px 0;
    max-width: 736px;
  }
  .timer {
    font-weight: 600;
    background: #ff0000;
    display: flex;
    place-content: center;
    place-items: center;
    border-radius: 0.4rem;
    color: #fff;
    font-size: 22px;
    font-family: "Open Sans", sans-serif;
  }
  .header {
    box-sizing: border-box;
    background: white;
    width: 1170px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0.3rem 1rem 0.6rem 1rem;
    position: relative;
    z-index: 100;
  }

  .Products {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .subheader {
    font-family: "Open Sans", sans-serif;
    font-size: 30px;
    line-height: 28px;
    font-weight: bold;
    padding: 24px 0;
    place-self: center;
    text-align: center;
    text-transform: uppercase;
  }
  .picture {
    margin: auto;
    color: #2d2d2d;
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-style: italic;
    padding-top: 3rem;
    place-items: center;
    text-align: center;
    line-height: 24px;
    width: 340px;
  }
  .picture img {
    width: 100%;
    margin-bottom: 10px;
  }
  .author {
    color: #2d2d2d;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    margin-top: 20px;
  }
  .author span {
    color: #ef7600;
    font-size: 21px;
  }
  .Footer {
    border-top: 1px solid #d6d6d6;
    margin: 0 auto;
  }
  .progress-bar {
    display: grid;
    grid-auto-columns: minmax(0, 4.8rem);
    grid-template:
      'c1 l1 l1 c2 l2 l2 c3' 1fr
      'n1 n2 n2 n2 n2 n2 n3' 1fr;
    place-items: center;
    white-space: nowrap;
    margin: 0 90px;
    padding: 10px 0 0 21px;
  }
  .circle {
    align-items: center;
    color: #b8b9b9;
    display: flex;
    background-color: white;
    border: 1px solid #d6d6d6;
    border-radius: 50%;
    font-family: 'Open Sans', sans-serif;
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
    height: 1.7rem;
    width: 1.7rem;
    z-index: 10;
  }
  .line {
    border: 1px solid #eaeaea;
    background-color: #f5f5f5;
    height: 0.3rem;
    width: 150%;
  }
  .stage-name {
    text-transform: uppercase;
    // font-size: 16px;
    // font-weight: bold;
    font-size: 18px;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
  }
  .active {
    background-color: #663191;
    color: white;
    border: 2px solid white;
  }
  .circle2 {
    margin-left: 24px;
  }
  .stage-name2 {
    margin-left: 19px;
  }
  .stage-name3 {
    margin-left: -4px;
  }
  #keto-logo {
    width: 252px;
    margin-left: 5px;
  }
  #seals {
    width: 280px;
  }
  #timer-icon {
    font-family: 'Material Icons';
    font-size: 2rem;
  }
  #timer-count {
    font-size: 2.3rem;
  }

  #total-1,
  #total-2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    border: none;
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
`
