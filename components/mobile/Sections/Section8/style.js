import css from "styled-jsx/css"

export default css `
  ul {
    list-style: none;
  }
  .section-1.end {
    background: url('../../../../static/section-8.jpg')
      no-repeat center top;
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
    max-width: 314px;
    margin: 0 0 30px 15px;
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
    font-size: 20px;
    line-height: 26px;
    color: #191919;
    margin: 10px 6px 0 0px;
  }
  .section-1 .p-border {
    background: url('../../../../static/s1-line.png')
      no-repeat -49px 21px;
    font-size: 26px;
    font-style: italic;
    color: #2d2d2d;
    letter-spacing: -1px;
    margin-top: 15px;
    margin-bottom: 17px;
    padding: 0 0 0 14px;
  }
  .section-1 .list {
  }
  .section-1 .list li {
    background: url('../../../../static/s1-tike.png')
      no-repeat left 0px;
    float: left;
    clear: both;
    font-size: 30px;
    text-align: left;
    letter-spacing: -0.5px;
    line-height: 30px;
    color: #1a1a1a;
    padding: 2px 0 15px 59px;
  }
  .section-1 .list li span {
    font-weight: bold;
    color: #ea6302;
    text-transform: uppercase;
  }
  .section-1 center {
    width: 100%;
  }
  .logo-lose{
  }
`
