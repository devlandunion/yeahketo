import css from "styled-jsx/css"

export default css`
  .wrapper {
    width: 1900px;
    margin: 0 auto;
  }

  .container {
    display: flex;
    width: 1165px;
    margin: 0 auto;
  }

  .section1 {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    position: relative;
    margin-bottom: 50px;
  }

  .logo {
    margin: 41px 0 0 360px;
  }

  .sub-title-sect1 {
    margin: 51px 0 0 234px;
  }

  .annotation {
    position: relative;
    font-family: 'Open Sans',sans-serif;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    font-style: italic;
    color: #373737;
    margin: 17px 5px 0 213px;
  }

  .text {
    color: #191919;
    font-size: 20px;
    height: 52px;
    line-height: 26px;
    text-align: center;
    padding: 15px 10px 0 234px;
    margin: 0;
  }

  .bottle {
    position: absolute;
    top: 451px;
    left: 92px;
    width: 215px;
  }

  ul {
    align-self: flex-start;
    list-style: none;
    margin: 20px 0 0 285px;
    position: relative;
    
  }

  li {
    font-size: 24px;
    line-height: 37px;
    font-weight: 400;
    text-align: left;
    color: #1a1a1a;
    margin: 0 0 0 0;
    padding: 2px 0 10px 62px;
    position: relative;
    background: url('https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s1-tk.png') 8px -4px no-repeat; 
  }

  span {
    font-weight: bold;
    color: #ea6302;
    text-transform: uppercase;
  }

  .arrow {
    margin: -36px -14px 0 -29px;
  }

  .seal {
    font-size: 20px;
    line-height: 22px;
    text-align: center;
    font-weight: 400;
    font-style: italic;
    color: #1d1d1d;
    margin: 17px 0 0 263px;
  }
`
