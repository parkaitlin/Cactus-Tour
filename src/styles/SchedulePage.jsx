import styled from 'styled-components';

export const ScheduleTable = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    padding-top: 3em;
    margin-bottom: 5em;
    
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
        min-width: 6em;
    }
    /* tournament rows */
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
        > div > button {
            color: blue;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid blue;
        }
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
    .tour-info {
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
    .add-tour-btn {
        font-size: 20px;
        border-radius: 4px;
        border: 2px solid #33357d;
        width: 200px;
        font-family: 'Open Sans', sans-serif;  
        color: #33357d;
        font-weight: 600;
        margin: 25px 0;  
        transition: .6s;    
    }
    .add-tour-btn:hover, .tour-edit-btn:hover, .tour-register-btn:hover {
        background-color: #33357d;
        color: #ffffff;
    }
    .tour-edit-btn, .tour-register-btn {
        align-self: flex-end;
        font-size: 15px;
        border-radius: 4px;
        border: 2px solid #33357d;
        padding: 3px 6px;
        font-family: 'Open Sans', sans-serif;  
        color: #33357d;
        font-weight: 600;
        transition: .6s;    
    }
    .notes-red {
        color: red
    }
    .title-year {
        margin: 25px;
        font-family: 'Maven Pro', sans-serif;
        font-size: 50px;
        color: #33357d;

    }
`