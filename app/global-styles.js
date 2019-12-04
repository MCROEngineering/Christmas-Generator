import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background: url('/bkg.png') no-repeat;
    background-size: cover;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .lmask {
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: #000;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      z-index: 9999;
      opacity: 0.4;
  }
  
  .lmask.fixed {
      position: fixed;
  }
  
  .lmask:before {
      content: '';
      background-color: rgba(0, 0, 0, 0);
      border: 5px solid rgba(0, 183, 229, 0.9);
      opacity: .9;
      border-right: 5px solid rgba(0, 0, 0, 0);
      border-left: 5px solid rgba(0, 0, 0, 0);
      border-radius: 50px;
      box-shadow: 0 0 35px #2187e7;
      width: 50px;
      height: 50px;
      -moz-animation: spinPulse 1s infinite ease-in-out;
      -webkit-animation: spinPulse 1s infinite linear;
  
      margin: -25px 0 0 -25px;
      position: absolute;
      top: 50%;
      left: 50%;
  }
  
  .lmask:after {
      content: '';
      background-color: rgba(0, 0, 0, 0);
      border: 5px solid rgba(0, 183, 229, 0.9);
      opacity: .9;
      border-left: 5px solid rgba(0, 0, 0, 0);
      border-right: 5px solid rgba(0, 0, 0, 0);
      border-radius: 50px;
      box-shadow: 0 0 15px #2187e7;
      width: 30px;
      height: 30px;
      -moz-animation: spinoffPulse 1s infinite linear;
      -webkit-animation: spinoffPulse 1s infinite linear;
  
      margin: -15px 0 0 -15px;
      position: absolute;
      top: 50%;
      left: 50%;
  }
  
  @-moz-keyframes spinPulse {
      0% {
          -moz-transform: rotate(160deg);
          opacity: 0;
          box-shadow: 0 0 1px #2187e7;
      }
      50% {
          -moz-transform: rotate(145deg);
          opacity: 1;
      }
      100% {
          -moz-transform: rotate(-320deg);
          opacity: 0;
      }
  }
  
  @-moz-keyframes spinoffPulse {
      0% {
          -moz-transform: rotate(0deg);
      }
      100% {
          -moz-transform: rotate(360deg);
      }
  }
  
  @-webkit-keyframes spinPulse {
      0% {
          -webkit-transform: rotate(160deg);
          opacity: 0;
          box-shadow: 0 0 1px #2187e7;
      }
      50% {
          -webkit-transform: rotate(145deg);
          opacity: 1;
      }
      100% {
          -webkit-transform: rotate(-320deg);
          opacity: 0;
      }
  }
  
  @-webkit-keyframes spinoffPulse {
      0% {
          -webkit-transform: rotate(0deg);
      }
      100% {
          -webkit-transform: rotate(360deg);
      }
  }
  
  @keyframes spinPulse {
      0% {
          transform: rotate(160deg);
          opacity: 0;
          box-shadow: 0 0 1px #2187e7;
      }
      50% {
          transform: rotate(145deg);
          opacity: 1;
      }
      100% {
          transform: rotate(-320deg);
          opacity: 0;
      }
  }
  
  @keyframes spinoffPulse {
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }
  }

`;

export default GlobalStyle;
