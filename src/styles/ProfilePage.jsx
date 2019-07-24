import styled from 'styled-components';

export const EditButton = styled.button`
    font-size: 28px;
    border-radius: 4px;
    border: 2px solid white;
    width: 7vw;
    height: 6vh;
    font-family: 'Open Sans', sans-serif;  
    color: #ffffff;
    font-weight: 600;
    background-color: transparent;
    transition: .6s;
    :hover {
        background-color: #ffffff;
        color: #777;
    }
`
export const ProfilePage = styled.div`
    min-height: 82vh;
    width: 100%;
    position: absolute;
    z-index: -1;
    > div {
        padding: 1em 3em;
    }
    h1 {
        font-size: 3em;
    }
    .top-bgimg {
        background-image: url('imgs/profile.jpg');
        position: relative;
        opacity: 0.65;
        background-attachment: fixed;
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
        height: 25em;
        display: flex;
        justify-content: space-between;

    }
    .top-bgimg > div {
        align-self: flex-end;
    }
    .profile-header {
        color: white;
        font-family: 'Open Sans', sans-serif;
    }
    .player-info {
        border: 3px solid white;
        display: flex;
        height: 7em;
        width: 30vw;
        padding: 15px;
        justify-content: center;
        margin: 15px 0 0 0;
    }
    .joined > span {
        font-size: 18px;
        font-weight: 600;
    } 
    .earnings > span {
        font-size: 16px;
        font-weight: 600;
    }
    .joined > p , .earnings > p {
        font-size: 24px;
        font-weight: 700;
    }
    .joined {
        border-right: 4px solid white;
    }
    .earnings, .joined {
        text-align: center;
        padding: 0 5vw;
    }
    .profile-pic {
        color: white;
        font-size: 200px;
        margin: 60px;
    }   
    .entire-table {
        background-attachment: fixed;
    }
    .table {
        width: 85vw;
        background-color: rgb(230, 233, 235);
    }
    /* header row */
    .head-row {
        height: 50px;
        background-color: #1e204b;
    }
    th {
        border: 2px solid #1e204b;
        color: #ffffff;
        font-family: 'Maven Pro', sans-serif;
    }
    /* tournament rows */
    .tour-row {
        background-color: #ffffff;
    }
    td {
        padding: 1.5em;
    }
    td > div {
        color: #1e204b;
        font-family: 'Open Sans', sans-serif;
    }
    .event, .date, .purse {
        text-align: center;
    }
    .add-info {
        display: flex;
        justify-content: space-between
        > div > button {
            color: blue;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid blue;
        }
    }
    .upcoming {
        margin: 25px;
        font-family: 'Maven Pro', sans-serif;
        font-size: 50px;
        color: #33357d;
    }
`

export const EditForm = styled.form`
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding:  0 5em;
    width: 35em;
    > p {
        text-align: center;
        font-size: 1.3em;
        margin: .5em 0;
    }
    > label {
        font-size: 1em;
        margin: .3em 0;
    }    
    > input {
        font-size: 1em;
        text-align: center;
        padding: .3em;
        border: none;
        border-bottom: 1px solid #777;
    }
`