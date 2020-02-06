import css from "styled-jsx/css"

export default css`
  .slider {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .picture {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    font-style: italic;
    color: #2d2d2d;
    padding: 10px 20px 0 20px;
    max-height: 508px;
    max-width: 100vw;
  }
  .picture img {
    display: block;
    margin: auto;
  }
  .author {
    font-size: 18px;
    font-weight: 500;
    color: #2d2d2d;
    margin-top: 20px;
  }
  .author span {
    color: #8f4300;
  }

  .btn {
    width: 73px;
    height: 73px;
    padding: 0;
    outline: none;
    border: none;
    z-index: 9;
    cursor: pointer;
  }
  .prevBtn {
    background: url('https://yeahketo.com/static/promo/mobile/images/images/prev.png')
      no-repeat left center;
  }

  .nextBtn {
    background: url('https://yeahketo.com/static/promo/mobile/images/images/next.png')
      no-repeat left center;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 170px;
  }
`
