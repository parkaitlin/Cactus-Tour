import React from 'react';
import { FooterBar } from '../../styles/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = (props)=>{
    return(
        <FooterBar>
                <p>Creator | Kaitlin Park</p>
            <div className="kp-links">
                <a href="https://github.com/parkaitlin"><FontAwesomeIcon icon={faGithubSquare} className="kp-link" /></a>          
                <a href="https://www.linkedin.com/in/parkaitlin/"><FontAwesomeIcon icon={faLinkedin} className="kp-link" /></a>      
            </div>
                <p>Copyright © The Cactus Tour 2019. All Rights Reserved.</p>
        </FooterBar>
    )
}

export default Footer;