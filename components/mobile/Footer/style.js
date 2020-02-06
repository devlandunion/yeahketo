import css from "styled-jsx/css"

export default css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  div p {
    font-size: 14px;
    line-height: 18px;
  }

  div {
    color: #202020;
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    height: 100%;
    padding: 35px 10px 0;
    place-items: center;
    width: 100%;
  }
  
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 15px 10px;
    font-size: 14px;
  }

  ul li {
    padding: 0 10px;
    cursor:pointer;
  }

  span{
    margin-bottom: 38px;
  }

  .copyright {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bottom_footer {
    width: 640px;
    margin: 0 auto;
  }
`
