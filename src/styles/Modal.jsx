import styled from 'styled-components';

export const ModalBox = styled.div`
    .hide-modal {
        display: none;
    }
    .show-modal {
        height: 100vh;
        width: 100vw;
        position: relative;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        animation: slideInUp 1s;
    }
    section {
        background-color: white;
        display: flex;
        flex-direction: column;
        padding: 1em 2em;
    }
    @keyframes slideInUp {
        from {
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
            visibility: visible;
        }

        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }
    .entire-table {
        border: 2px solid #777;
        background-attachment: fixed;
        margin: 0 20px;
    }
    .player-table {
        margin: 0 20px 20px 20px;
    }
    .table {
        width: 85vw;
        background-color: rgb(230, 233, 235);
    }
    .head-row {
        height: 50px;
        background-color: #1e204b;
    }
    th {
        border: 2px solid #1e204b;
        color: #ffffff;
        font-family: 'Maven Pro', sans-serif;
    }
    .tour-row {
        background-color: #ffffff;
    }
    td > div {
        color: #1e204b;
        font-family: 'Open Sans', sans-serif;
    }
    .event, .date, .purse {
        text-align: center;
    }
    .add-info {
        padding: 5px 8px;
        display: flex;
        justify-content: space-between
    }
    label {
        font-size: 13px
    }
    input {
        font-size: 13px;
        border-radius: 5px;
        margin: 6px 3px;
        text-align: center;
    }
    .event > input {
        width: 40px;
        text-align: inherit;
    }
    .tour-info-input {
        padding: 10px;
    }
    .city-input {
        width: 120px;
    }
    .state-input {
        width: 45px;
    }
    .purse > input {
        width: 80px;
    }
    h1 {
        margin: 10px 0 25px 0;
        font-family: 'Maven Pro', sans-serif;
        font-size: 50px;
        color: #33357d;
        text-align: center;
    }
    button {
        font-size: 20px;
        padding: .8em 0;
        font-family: 'Open Sans', sans-serif;  
        font-weight: 600;
        transition: .6s;
    }
`