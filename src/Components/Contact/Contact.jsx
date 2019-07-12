import React from 'react';
import { ContactUs, ContactInfo } from '../../styles/ContactPage';

const Contact = ()=>{
  return(
    <ContactUs>
      <ContactInfo>
        <h2>Mike Brown</h2>
        <h4>Tour Director</h4>
        <ul>
          <li>Email: mike@thecactustour.com</li>
          <li>Voice / Text - 520.312.8642</li>
          <li>Fax - 888.264.5350</li>
          <li>Mailing Address: 1650 N. Seabrooke  Tucson, AZ  85705</li>
        </ul>
        <p>We would really like to hear from you.  Feel free to call, text or email.</p>
      </ContactInfo>
    </ContactUs>
  )
}

export default Contact