import css from "styled-jsx/css"

export default css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .header-logo {
    width: 100%;
    height: 100%;
  }

  .header-text {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #651d85;
    font-weight: bold;
    padding-top: 5px;
    font-size: 30px;
    line-height: 42px;
    text-transform: uppercase;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    height: 60px;
  }
`
