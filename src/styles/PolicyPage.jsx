import styled from 'styled-components';

export const PolicyBox = styled.div`
    min-height: 64vh;
    margin: 25px 60px;
    padding: 25px 60px;
    border-left: 2px solid #84dcac;
    border-right: 2px solid #84dcac;
    
    span{
        font-weight: 700;
    }

    div {
        margin: 15px;
    }
    p {
        text-align: justify;
    }
    ul {
        margin: 10px 18px;;
    }
    .pop-title {
        margin-left: 3em;
        font-weight: 700;
    }
    .pop {
        font-weight: 400;
        text-align: justify;
        display: flex;
        flex-flow: row wrap;
        margin-left: 3em;
    }
    .pop-list {
        margin-left: 4em;
        > li {
            list-style: none;
        }
    }
`