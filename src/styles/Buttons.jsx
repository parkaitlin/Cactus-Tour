import styled from 'styled-components';

export const SmallButton = styled.button`
  font-size: 1em;
  border-radius: 4px;
  border: 2px solid #33357d;
  padding: .5em 1em;
  margin: 0 .5em;
  font-family: 'Open Sans', sans-serif;  
  color: #33357d;
  font-weight: 600;
  transition: .6s; 
  :hover {
    background-color: #33357d;
    color: #ffffff;
  } 
`

export const SaveButton = styled.button`
  color: #33357d;
  border: none;
  border-top: 2px solid #33357d;
  border-bottom: 2px solid #33357d;
  margin-top: 3em; 
  padding: .8em 0;

  :hover {
    background-color: #33357d;
    color: #ffffff;
  }
`

export const CancelButton = styled.button`
  color: #cc2a36;
  border: none;
  border-bottom: 2px solid #cc2a36;
  padding: .8em 0;
  /* margin-top: 0;  */
  :hover {
    background-color: #cc2a36;
    color: #ffffff;
  }
`

export const Exit = styled.button`
  font-size: 22px;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  align-items: center;
  font-family: 'Open Sans', sans-serif;  
  color: #33357d;
  background-color: transparent;
  border: none;
  width: auto;
  padding: .5em;
`
