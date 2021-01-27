import React, {useState} from 'react';
import './admin.css';

import ApiCalls from '../../api/api_calls';

function Login() {
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [error, setError] = useState("")

	const admin = {
		name: name,
		password: password
	}

	const handleSubmit = (e)=>{
		e.preventDefault();
		ApiCalls.login(admin);
	}

  return (
    <div className="login">
		<form>
			<h2>Administrador</h2>
			<input type="text" placeholder="Admin" name="name" onChange={e => setName(e.target.value)}/>
			<input type="password" placeholder="Contraseña" name="password" onChange={e => setPassword(e.target.value)}/>
			<button onClick={handleSubmit}>Entrar</button>
		</form>
    </div>
  );
}

export default Login;