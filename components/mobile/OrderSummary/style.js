import css from "styled-jsx/css"

export default css`
  .order_info {
    display: flex;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 1.3rem;
    color: #333333;
    text-align: left;
    padding: 1rem;
    text-transform: uppercase;
    border-bottom: 1px solid #c5c7d1;
    place-items: center;
    -moz-appearance: none;
  }
  .order_content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
  }
  .table_left {
    float: left;
    width: 75%;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  .order_images {
    width: 100px;
  }
  .table_right {
    width: 25%;
    float: right;
    text-align: right;
    padding: 0;
  }
  .table_left li {
    font-family: 'Noto Sans', sans-serif;
    border-bottom: 1px solid #c5c7d1;
    font-weight: 200;
    text-transform: uppercase;
    line-height: 30px;
    color: #333333;
  }
  .table_right li {
    font-family: 'Noto Sans', sans-serif;
    border-bottom: 1px solid #c5c7d1;
    font-weight: 200;
    text-transform: uppercase;
    line-height: 30px;
    color: #333333;
  }
  .order_total {
    width: 500px;
    font-family: 'Montserrat', sans-serif;
    flex-direction: column;
  }
  .order-label {
    font-weight: bold;
    padding: 0;
    place-items: center;
  }

  #list-icon {
    font-family: 'Material Icons';
    text-transform: none;
    font-weight: 200;
    font-size: 2rem;
  }
`
