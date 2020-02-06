import css from "styled-jsx/css"

export default css`
  section {
    /* background : url(https://picsum.photos/1920/1080?random=1) center no-repeat; */
    display: flex;
    flex-dirrection: row;
    justify-content: space-around;
    margin: 0 auto;
    padding: 0;
  }
  .Footer {
    border-top: 1px solid #d6d6d6;
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
  .topbar {
    background: #191a1a;
    color: white;
    position: fixed;
    font-family: 'Noto Sans', sans-serif;
    height: 2rem;
    margin: 0;
    padding: 0;
    top: 0;
    width: 100%;
    z-index: 10;
  }
  .container {
    display: flex;
    height: 100%;
    place-content: center;
    place-items: center;
    width: 100%;
  }
  span {
    font-family: 'Montserrat', sans-serif;
    color: #ff1e00;
  }
`
