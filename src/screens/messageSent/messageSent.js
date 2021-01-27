import React from 'react'
import './messageSent.css';


function MessageSent() {

	const returnPage = ()=>{
		window.location.pathname = "/";
	}
    return(
      <div className="messageSent">
      	<h2>Muchas gracias</h2>
     	<h3>Su mensaje ha sido enviado correctamente</h3>
     	<button onClick={returnPage}>Volver a la pagina</button>
      </div>
      );
 
}

export default MessageSent;
