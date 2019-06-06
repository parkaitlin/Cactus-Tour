import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.div`
    background-image: url('imgs/footerimg.jpg');
    position: relative;
    opacity: 0.7;
    /* background-attachment: fixed; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 20vh;
`

const Footer = (props)=>{
    return(

        <FooterBar>
            <p>Copyright © Cactus Tour 2019. All Rights Reserved.</p>
            <p>Site by parKaitlin</p>
        </FooterBar>
    )
}

export default Footer;