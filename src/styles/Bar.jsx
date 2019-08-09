import styled from 'styled-components';

export const Bar = styled.div`
  background-color: rgb(230, 233, 235);
  /* position: fixed; */
  height: 9em;
  display: flex;
  padding: 15px;

  .left-col, .right-col{
    flex: 0.5;
    display: flex;
  } 
  .right-col {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }
  .left-col > .navbar-link > img {
    height: 13vh;
    width: auto;
    align-self: center;
  }
  .navbar-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
  }
  .row {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .navbar-link {
    color: #777;
    text-decoration: none;
    margin: 0 .7em;
    font-family: 'Open Sans', sans-serif;

  }
  .sun-logo {
    color: #777;
    font-size: 2em;
    margin-bottom: .8em;
    animation: rotate 2.5s;
    animation-iteration-count: 2;
  }
  .sm-logo {
    color: #777;
    height: 2em;
    width: auto;
    margin: 5px;
  }

  @keyframes rotate {
    0%, 100% {
      -webkit-transform: rotate(60deg);
      transform: rotate(60deg);
    }
    50% {
      -webkit-transform: rotate(-60deg);
      transform: rotate(-60deg);
    }
  }
`

