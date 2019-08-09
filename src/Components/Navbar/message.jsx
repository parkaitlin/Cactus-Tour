import React from 'react';
import styled from 'styled-components';
import { Exit } from '../../styles/Buttons';

const Message = ({message, setMessage}) => {
  const showOrHide = message === '' ? 'hide' : 'show'
  return (
    <MessageStyle>
      <div className={showOrHide}>
        <p>{message}</p>
        <Exit onClick={() => setMessage('')}>X</Exit>
      </div>
    </MessageStyle>
  )
}

export default Message;


const MessageStyle = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  top: 10em;
  position: fixed;
  z-index: 10;

  .hide {
    background-color: #ffecb4;
    height: 0;
    min-width: 32em;
    width: auto;
    visibility: hidden;
    transition: 1s;
    border-radius: 6px;

    > p, > button {
      color: #ffecb4;
      visibility: hidden;
      /* transition: 5s; */
    }
  }
  .show {
    background-color: #ffecb4;
    height: 3em;
    min-width: 30em;
    width: auto;
    transition: 1s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 6px;

    > p, > button {
      visibility: visible;
      color: #967a28;
      transition: 5s;
    }
    > p {
      font-size: 1em;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`