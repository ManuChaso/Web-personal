import React, {useState} from 'react'
import './admin.css';

import MessageAdmin from './message_admin';
import PortfolioAdmin from './portfolio_admin';
import Login from './login.js';

function Admin() {
  const [screen, setScreen] = useState("messages");
  
  const verify = localStorage.getItem("Token");

  if(verify){
    return (
      <div className="admin">
        <h2>Administracion</h2>
        <ul>
          <li onClick={()=> setScreen("messages")}>Mensajes</li>
          <li onClick={()=> setScreen("portfolio")}>Portafolios</li>
        </ul>
  
        <MessageAdmin screen={screen}/>
        <PortfolioAdmin screen={screen}/>      

      </div>
    );
  }else if(!verify){
    return(<Login/>);
  }

}

export default Admin;