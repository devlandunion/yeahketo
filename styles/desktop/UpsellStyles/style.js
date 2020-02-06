import css from "styled-jsx/css"

export default css`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900|Open+Sans:300,400,600,700,800&display=swap');

  .upsell-info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background: url('../../../static/up-bg.jpg') center top no-repeat;
    height: 100vh;
  }
  .Footer {
    width: 100%;
    padding-top: 5rem;
  }
  @font-face {
    font-family: 'Hind';
    font-style: normal;
    font-weight: 300;
    src: url('../../static/fonts/Hind-Light.ttf');
  }
  @font-face {
    font-family: 'Hind';
    font-style: normal;
    font-weight: 400;
    src: url('../../static/fonts/Hind-Medium.ttf');
  }
  @font-face {
    font-family: 'Hind';
    font-style: normal;
    font-weight: 500;
    src: url('../../static/fonts/Hind-Regular.ttf');
  }
  @font-face {
    font-family: 'Hind';
    font-style: normal;
    font-weight: 600;
    src: url('../../static/fonts/Hind-SemiBold.ttf');
  }
  @font-face {
    font-family: 'Hind';
    font-style: normal;
    font-weight: 700;
    src: url('../../static/fonts/Hind-Bold.ttf');
  }
`
