import css from "styled-jsx/css"

export default css`
  .order_info {
    display: flex;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 1.3rem;
    color: #333333;
    text-align: left;
    // padding: 1rem;
    text-transform: uppercase;
    border-bottom: 1px solid #c5c7d1;
    place-items: center;
    padding-left: 55px;
  }
  .order_content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // margin-top: 20px;
  }
  .table_left {
    float: left;
    width: 390px;
    font-size: 18px;
    font-weight: 400;
    margin: 31px 0px 0px 0px;
    padding: 6px 0px;
  }
  ul {
    list-style: none;
  }
  .order_images {
    width: 248px;
  }
  .table_right {
    // width: 25%;
    width: 81px
    float: right;
    text-align: right;
    padding: 6px 0;
    margin: 31px 0px 0px 0px;
  }
  .table_left li {
    font-family: 'Open Sans', sans-serif;
    border-bottom: 1px solid #c5c7d1;
    // font-weight: 200;
    // text-transform: uppercase;
    line-height: 33px;
    color: #333333;
    padding: 0px 6px 5px 6px;
  }
  .table_left li:first-child {
    // text-transform: uppercase;
    line-height:20px;
  }

  .table_left li:last-child {
    border-bottom: none;
  }


  .table_right li:first-child{
    padding: 0px 0px 12px 0px;
  }

  .table_right li {
    font-family: 'Open Sans', sans-serif;
    border-bottom: 1px solid #c5c7d1;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 33px;
    color: #333333;
    font-size: 18px;
    padding: 0px 6px 5px 6px;
  }
  .table_right li:last-child {
    border-bottom: none;
  }
  .order_total {
    width: 484px;
    font-family: 'Montserrat', sans-serif;
    flex-direction: column;
  }
  .order-label {
    font-weight: bold;
    padding: 0;
    place-items: center;
    margin-bottom: -10px;
  }

  #list-icon {
    font-family: 'Material Icons';
    text-transform: none;
    font-weight: 200;
    font-size: 2rem;
  }
  .ordrerSummary .order_info {
    // background-position-x: 16px;
    // background-position-y: 12px;
    // background-size: initial;
    // background-repeat-x: no-repeat;
    // background-repeat-y: no-repeat;
    // text-indent: 41px;
    // padding: 14px;

    background:url(../../static/smry-icn.jpg) 16px 8px no-repeat;
    border-bottom: 1px solid #c5c7d1;
    height: 50px;
  }

  .order_bottle{
    margin: 20px auto 0 auto;
    display: block;
  }

  .order_ref{
    margin: 8px auto 0 auto;
    display: block;
  }

  .smryhding{
    font-weight: bold;
    font-size: 20px;
    color: #333333;
    text-align: left;
    padding: 0px 0 0 54px;
    text-transform: uppercase;
    float: left;
  }

`
