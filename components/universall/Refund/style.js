import css from "styled-jsx/css"

export default css`
  .modal-body {
    z-index: 2;
    top: 0;
    left: 0;
    background-color: #fff;
    padding: 0 30px 1.2rem;
    text-align: left;
  }
  .title {
    margin: 25px 0;
  }
  .modal-body > p:first-child {
    margin-block-start: 1em;
    margin-block-end: 0.7em;
  }
  p {
    line-height: 27px;
    margin-block-start: 0;
    margin-block-end: 0.5em;
  }
`
