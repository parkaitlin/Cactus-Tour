import styled from 'styled-components';

export const NewUserForm = styled.div`
  display:flex;
  max-height: 83vh;
  padding: 20px;

  span {
    color: #84dcac;
    text-decoration: underline;
    cursor: pointer;
  }
  .member-fees, .new-member-form {
    flex: 1;
    margin: 15px;
  }
  .member-fees {
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
  .price {
    display: flex;
    justify-content: space-evenly;
    margin: 5px;
  }
  .col-1 > h3 {
    margin-top: 10px;
  }
  .col-1 > h4 {
    margin: 10px 0;
  }
  .col-2 > p, .col-3 > p {
    text-decoration: underline;
    margin: 5px;
  } 
  .col-2, .col-3 {
    text-align: center;
  }
  .compare-prices {
    margin-top: 35px;
  }
  .notes {
    padding: 10px;
    text-align: justify;
    font-size: 12px;
  }
  .new-member-form {
    border-left: 2px solid #84dcac;
    padding: 15px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  form > p {
    margin: 15px 0;
  }
  button {
    border-radius: 4px;
    font-size: 20px;
    color: white;
    background-color: #777;
    width: 10vw;
    margin: 20px 0;
  }
  .submit-btn {
    margin-left: 17vw;
    margin-right: 17vw;
  }
  form{
    display: flex;
    flex-direction: column;
  }
  input {
    font-size: 20px;
    margin: 10px 0;
    border: none;
    border-bottom: 1px solid #777;
    color: #777;
    text-align: center;
  }
  .hometown-state, .pro-am {
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }
  .hometown-state > input, .pro-am > input {
    margin: 0 10px;

  }
  .state-input {
    width: 80px;
  }

`

export const LoginBox = styled.div`
  /* height: 64vh; */
  display: flex;
  justify-content: center;
  align-items: center;

  .login-box {
    /* border-left: 2px solid black;
    border-right: 2px solid black; */
    height: 28em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 30px;
  }
  form{
    display: flex;
    flex-direction: column;
  }
  input {
    font-size: 20px;
    margin: 10px 0;
    border: none;
    border-bottom: 1px solid #777;
    color: #777;
    text-align: center;
  }
  span {
    color: #84dcac;
    text-decoration: underline;
    cursor: pointer;
  }
  button {
    border-radius: 4px;
    font-size: 20px;
    color: white;
    background-color: #777;
    margin: 20px 0;
  }
    
`