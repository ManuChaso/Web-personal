import React from 'react'
import './contact.css';

import Email from '../../assets/images/email.png';
import Whatsapp from '../../assets/images/whatsapp.png';
import Instagram from '../../assets/images/instagram.png';
import Twitter from '../../assets/images/twitter.png';
import Linkedin from '../../assets/images/linkedin.png';
import Github from '../../assets/images/github.png';

function Contact() {
  return (
    <div className="contact">
    	<h2>Contacto</h2>
    	<div className="contactsContainer">
            <ul>
    	        <li><img className="contactIcon" src={Email} alt="icono de email"/> Manuc.chaso@gmail.com</li>
    		    <li><img className="contactIcon" src={Whatsapp} alt="icono de whatsapp"/> 680918095</li>
            </ul>
            <ul>
    		    <li><img className="contactIcon" src={Instagram} alt="icono de instagram"/><a href="https://www.instagram.com/manuchaso_web/?hl=es" target="_blank" rel="noreferrer"> Instagram</a> </li>
    	    	<li><img className="contactIcon" src={Twitter} alt="icono de twitter"/><a href="https://twitter.com/Manuchaso_web" target="_blank" rel="noreferrer"> Twitter</a></li>
            </ul>
            <ul>
    		    <li><img className="contactIcon" src={Linkedin} alt="icono de linkedin"/><a href="https://www.linkedin.com/in/manu-chaso-martin" target="_blank" rel="noreferrer"> LinkedIn</a></li>
    		    <li><img className="contactIcon" src={Github} alt="icono de github"/><a href="https://github.com/ManuChaso" target="_blank" rel="noreferrer"> Github</a></li>
            </ul>
    	</div>
    </div>
  );
}

export default Contact;
