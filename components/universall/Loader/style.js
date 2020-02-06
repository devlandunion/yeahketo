import css from "styled-jsx/css"

export default css`
  .loader-wrap {
    height:200%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 125;
    position:absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:-250px;
  }

  .loader {
    border: 16px solid #f3f3f3; 
    border-top: 16px solid #3498db;
    border-radius: 100%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
