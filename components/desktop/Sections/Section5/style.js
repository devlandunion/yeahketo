import css from "styled-jsx/css"

export default css`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900|Open+Sans:300,400,600,700,800&display=swap');

  .content {
    margin-left: 212px;
    display: flex;
    flex-dirrection: row;
    height: 736px;
  }
  .img1 {
    width: 147px;
    height: 147px;
    margin: auto auto 20px auto;
  }
  .img2 {
    width: 205px;
    hegiht: 399px;
  }
  .images {
    display: flex;
    flex-direction: column;
    margin-top: 207px;
  }
  .description {
    display: flex;
    margin-left: 20px;
    width: 729px;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    margin-top: 26px;
  }
  .flex img {
    margin-top: 0px;
  }
  .header {
    color: #6b2d92;
    font-family: 'Montserrat';
    font-size: 50px;
    font-weight: bold;
    margin: auto;
    padding: 66px 0 0 0;
  }
  .subheader {
    color: #2d2d2d;
    font-family: 'Montserrat';
    font-size: 36px;
    font-weight: bold;
    line-height: 33px;
    margin-top: 8px;
    margin-bottom: 32px;
    text-align: left;
  }
  .subheader_little {
    color: #2d2d2d;
    font-family: 'Montserrat' !important;
    font-size: 28px;
    font-weight: bold;
    -webkit-letter-spacing: -1px;
    -moz-letter-spacing: -1px;
    -ms-letter-spacing: -1px;
    letter-spacing: -1px;
    line-height: 40px;
    margin: 0 auto;
    text-align: left;
  }
  .subheader_little--second{
    color: #2d2d2d;
    font-family: 'Montserrat';
    font-size: 28px;
    font-weight: bold;
    -webkit-letter-spacing: -1px;
    -moz-letter-spacing: -1px;
    -ms-letter-spacing: -1px;
    letter-spacing: -1px;
    line-height: 40px;
    margin: 0 auto;
    text-align: left;
    padding-top: 46px;
  }
  .descr {
    border-top: 1px #acacac solid;
    color: #2d2d2d;
    font-size: 18px;
    line-height: 26px;
    margin: 0 auto;
    padding: 20px 0 0 0;
    text-align: left;
  }
  .descr.no-border {
    padding: 10px 0 0 0;
    max-width: 400px;
    margin: 0;
  }
  .no-border {
    border-top: none;
  }
  .flex-wrapper {
    position: relative;
  }
  hr {
    border: 0.5px solid #acacac;
    width: 729px;
    position: absolute;
    top: 160px;
  }
`
