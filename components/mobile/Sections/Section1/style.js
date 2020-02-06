import css from "styled-jsx/css"

export default css`
  ul {
    list-style: none;
    margin-left: 6px;
    margin-top: -3px;
  }
  .section-1 {
    background: url('../../../../static/section-1.jpg')
      no-repeat center top;
    text-align: center;
    height: auto;
    width: 640px;
    margin: 0 auto;
    padding: 0;
    position: relative;
    padding-bottom: 5px;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .section-1 .logo {
    margin: 0 0 30px 15px;
    max-width: 309px;
    height: 48px;
  }
  .section-1 .bottle {
    position: absolute;
    top: 370px;
    left: 12px;
    z-index: 9;
  }
  .section-1 .right-block {
    max-width: 70.5%;
    margin-top: 60px;
  }
  .section-1 .p1 {
    color: #191919;
    font-size: 20px;
    line-height: 26px;
    margin: 10px 6px 0 -5px;
    width: 101%;
  }
  text-align: center;
  .section-1 .p-border {
    background: url('../../../../static/s1-line.png')
      no-repeat -49px 21px;
    color: #2d2d2d;
    font-size: 26px;
    font-style: italic;
    letter-spacing: -1px;
    margin-top: 15px;
    padding: 0 0 0 14px;
    margin-bottom: 18px;
  }
  .section-1 .list {
  }
  .section-1 .list li {
    background: url('../../../../static/s1-tike.png')
      no-repeat left 0px;
    clear: both;
    color: #1a1a1a;
    float: left;
    font-size: 30px;
    letter-spacing: -0.5px;
    line-height: 30px;
    padding: 2px 0px 15px 52px;
    text-align: left;
  }
  .section-1 .list li span {
    color: #ea6302;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: bold;
  }
  .section-1 center {
    width: 100%;
  }
`
