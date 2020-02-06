import css from "styled-jsx/css"

export default css`
  .modal {
    width: 100vw;
    height: 100%;
    overflow-y: auto;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1200;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
  .closeModal {
    position: absolute;
    top: 30px;
    right: 21px;
    border: none;
    background-color: white;
  }
  .modalHeader {
    position: relative;
    border-bottom: 1px solid #e5e5e5;
    text-align: center;
  }
  .modalHeader h1 {
    line-height: 35.1px
  }
  .modalBody {
    height: auto;
    margin-top: 30px;
    background-color: white;
    width: 95%;
    border-radius: 0.3rem;
    max-width: 600px;
  }
  .modalContent {
    // overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
  h1{
    font-size: 1.5rem;
  }
`
