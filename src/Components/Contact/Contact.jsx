import React from 'react'
import styled from 'styled-components'

const ContactUs = styled.div`
  display: flex;
  height: 82vh;
  width: 100%;
  justify-content: center;
  padding-top: 6em;
`
const ContactInfo = styled.div`
  font-family: 'Open Sans', sans-serif;
  color: #33357d;
  > h2 {
    font-size: 3em;
  }
  > h4 {
    font-size: 1.5em;
  }
  > ul {
    margin-bottom: 1em;
  }
  > ul > li {
    list-style: none;
  }  
`

const Contact = (props)=>{
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