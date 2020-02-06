import css from "styled-jsx/css"

export default css`
  .footer {
    padding: 2rem 0;
  }
  div {
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    width: 100%;
    place-items: center;
    color: #202020;
  }
  p {
    margin: 4px;
    line-height: 18px;
  }
  footer {
    width: 50%;
    overflow: auto;
    margin: auto;
  }
  .footer-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    line-height: 2rem;
    font-weight: 500;
    margin-top: 1.3rem;
  }
  .footer-links:hover {
    cursor: pointer;
  }
  .footer-links a{
    padding: 0rem .5rem;
    font-size: 17px;
  }
`
