import React, {useState} from 'react'
import './contact.css';

import Instagram from '../../assets/images/instagram.png';
import Twitter from '../../assets/images/twitter.png';
import Linkedin from '../../assets/images/linkedin.png';
import Github from '../../assets/images/github.png';

const verify = (message)=>{
    if(!message.name || !message.email || !message.text) return false;
    else{
        return true;
    }
}

const sendMessage = (message)=>{
    fetch("https://manuchasoapi.herokuapp.com/send-message",{
        method: "POST",
        body: {
            name: JSON.stringify(message.name),
            email: JSON.stringify(message.email),
            text: JSON.stringify(message.text)
        },
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [accept, setAccept] = useState(false);
    const [error, setError] = useState(""); 

    const message = {
        name: name,
        email: email,
        text: text
    }

    const submitForm = (e)=>{
        e.preventDefault();
        if(accept){
            setError("");
            const verified = verify(message);
            if(verified){
                setError("");
                sendMessage(message);
            }else{
                setError("Debes completar todos los campos");
            }
        }else{
            setError("Debes aceptar la politica de privacidad");
        }
    }

  return (
    <div className="contact">
    	<h2>Contacto</h2>
        <form className="form" onSubmit={e => submitForm(e)}>
            <input className="input" type="text" placeholder="Nombre" onChange={e => setName(e.target.value)}/>
            <input className="input" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            <textarea placeholder="Mensaje..." onChange={e => setText(e.target.value)}></textarea>
             <p className="error">{error}</p>
            <div>
                <input className="checkbox" type="checkbox" id="privacy" name="privacy" onChange={()=> setAccept(!accept)}/>
                <label htmlFor="privacy">Aceptas la <a href="/politica-de-privacidad">Politica de privacidad</a></label>
            </div>
            <button type="submit">Enviar</button>
        </form>
    	<div className="contactsContainer">
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
