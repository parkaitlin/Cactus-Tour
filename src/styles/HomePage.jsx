import styled from 'styled-components';

export const HomePage = styled.div`
    .bgimg-1 {
        background-image: url('imgs/christoph-von-gellhorn-748872-unsplash.jpg');
        position: relative;
        opacity: 0.7;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 76vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .bgimg-2 {
        background-image: url('imgs/homepic2.jpg');
        position: relative;
        opacity: 0.65;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 80vh;
        padding: 120px 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .bgimg-3 {
        background-image: url('imgs/christoph-von-gellhorn-748872-unsplash.jpg');
        position: relative;
        opacity: 0.65;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 60vh;
    }
    
    .title-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 71vh;
    
    }
    
    .cactus-tour {
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
        font-size: 30px;
        width: 50vw;
        height: 10vh;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Maven Pro', sans-serif;
    }
    .title-box > p {
        color: white;
        margin: 20px 0;
        font-family: 'Open Sans', sans-serif;
    }

    .cactus-story {
        background-color: white;
        padding: 50px 80px;
    }
    .cactus-story > h3, .cactus-story > h5 {
        text-align: center;
        color: black;
        margin: 0 15px 15px 15px;
        font-family: 'Maven Pro', sans-serif;
    }
    .cactus-story > p {
        text-align: justify;
        color: #777;
        font-family: 'Open Sans', sans-serif;
    }

    .membership-info, .schedule-link {
        width: 30vw;
        height: 20vh;
        border: 2px solid white;
        background-color: rgb(255, 255, 255);
        color: #777;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 18px;
        text-align: center;
    }
    .bg2-btn {
        font-size: 20px;
        width: 10vw;
        border-radius: 4px;
    }

    .sponsors {
        height: 50vh;
        margin: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Maven Pro', sans-serif;
        color: #777;
    }
    .row-1 > img {
        margin: 10px;
    }
    .row-2 > img {
        margin: 15px;
    }
    .row-1, .row-2 {
        margin: 10px;
    }
    .princeton {
        border: 10px solid black;
    }
    .arrow {
        color: white;
        font-size: 30px;
        animation: fadeInDown 2s;
        animation-iteration-count: infinite;
    }
    @keyframes fadeInDown {
        0%, 100% {
            opacity: 0.5;
            -webkit-transform: translate3d(0, -70%, 0);
            transform: translate3d(0, -75%, 0);
        }
        50% {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }
`