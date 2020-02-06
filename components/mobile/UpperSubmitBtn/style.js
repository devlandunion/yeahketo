import css from "styled-jsx/css"

export default css`
  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #651d85;
    height: 228px;
  }

  .secure-256 {
    display: flex;
    justify-content: center;
    font-size: 17px;
    font-weight: 200;
    color: #fff;
  }

  .secure-icon {
    align-self: center;
    color: #fff;
    font-family: 'Material Icons';
    font-size: 1rem;
    margin-right: 8px;
  }

  button {
    width: 95%;
    animation: pulse 1.5s infinite;
    background-image: linear-gradient(to bottom, #f6b525 0%, #faad10 100%);
    border: 1px solid #f7dbb2;
    border-radius: 0.5rem;
    padding: 0.5rem;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 44px;
    place-items: end;
    text-shadow: 1px 2px 0px #fcdb8f;
    text-transform: uppercase;
    white-space: nowrap;
    max-width: 600px;
    height: 109px;
  }
  button:hover {
    filter: contrast(1.2);
  }
  button:active {
    filter: contrast(1.5);
  }
  @keyframes pulse {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.9);
    }
  }
`
