import css from "styled-jsx/css"

export default css`
  #super-puper-promo-button {
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    width: 640px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    z-index: 100;
    background: #651d85;
    padding: 12px 0;
  }
  a {
    animation: pulse 1.5s infinite;
    @keyframes pulse {
      0% {
        opacity: 0.9;
        transform: scale(0.9);
      }
      50% {
        opacity: 1;
        transform: scale(1);
      }
      100% {
        opacity: 0.9;
        transform: scale(0.9);
      }
    }
  }
`
