import React, {useState, useEffect} from 'react'
import './admin.css';

import ApiCalls from '../../api/api_calls';

function MessageAdmin(props) {
	const [messages, setMessages] = useState([]);


	useEffect(()=>{
		const body = {
			view:false,
			token: localStorage.getItem("Token")
		}
		fetch("https://manuchasoapi.herokuapp.com/get-messages",{
        	method: "POST",
        	body:JSON.stringify(body),
        	headers:{
            	"Content-Type": "application/json",
            	"Accept": "application/json"
        	}
    	})
    	.then(response => response.json())
    	.then(response => setMessages(response.messages))
    	.catch(err => console.error(err))
	});

	const listMessages = messages.map(message =>{
		var token = localStorage.getItem("Token");
		const remove = (id)=>{
			const messageData = {
				id:id,
				token:token
			}
			ApiCalls.deleteMessage(messageData);
		}
		return(
			<div className="message">
				<button onClick={()=> remove(message._id)}>Eliminar</button>
				<h3>Nombre: {message.name}</h3>
				<h4>Email: {message.email}</h4>
				<h5>Mensaje</h5>
				<p>{message.text}</p>
				<h6>{message.date}</h6>
			</div>
		);
	});

	if(props.screen === "messages"){
		return (
			<div className="messages">
				{listMessages}
			</div>
		);
	}else{
		return false;
	}
}

export default MessageAdmin;