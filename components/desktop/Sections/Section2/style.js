import css from "styled-jsx/css"

export default css`
  .header {
    text-align: center;
    padding: 0;
    margin: 0;
  }
  .header .pink {
    color: #6b2d92;
    font-weight: bold;
    font-size: 50px;
    line-height: 55px;
    font-family: 'Montserrat';
    margin: 10px 0 0 0;
  }
  .header .subheader {
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 31px;
    line-height: 33px;
    text-align: center;
    color: #2d2d2d;
    margin: 0 auto;
    padding: 4px 0 0 0;
  }
  .pictures-section{
    display:flex;
    flex-direction: row;
    list-style:none;
    margin: 45px 30px 40px 0;
  }
  .picture {
    width: 385px;
  }
  .content{
    text-align: center;
    font-size: 18px;
    line-height: 22px;
    font-style: italic;
    color: #2d2d2d;
    margin: 0 auto 0 auto;
    padding: 10px 20px 0 20px;
  }
  .content b {
    font-weight: 600;
  }
  .picture img {
    display: block;
    margin: auto;
    max-height: 233px;
  }
  .author {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    text-align: center;
    color: #2d2d2d;
    margin: 0 auto 0 auto;
    padding: 15px 20px 0 20px;
  }
  .author span {
    color: #ef7600;
  }
`
