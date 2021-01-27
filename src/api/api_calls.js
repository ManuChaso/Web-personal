var ApiCalls = {
    login:(admin)=>{
        const body = {
            admin: admin.name,
            password: admin.password
        }
        fetch("https://manuchasoapi.herokuapp.com/login",{
            method: "POST",
            body: JSON.stringify(body),
            headers:{
                "Content-Type": "application/json",
            }
        })
        .then(response => response.json())
        .then(res => {
            if(res.status == "success"){
                localStorage.setItem("Token", res.token);
                window.location.pathname = "/admin";
            }else{
                alert("contraseña incorrecta")
            }
        })
        .catch(err => {
            console.error(err)
        });
    },
    verifyUser:(token)=>{
        var verify = false;
        const body = {
            token:token
        }
        fetch("https://manuchasoapi.herokuapp.com/verify",{
            method: "POST",
            body:JSON.stringify(body),
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(res => verify = res.pass)
        .catch(err => console.error(err));

        return(verify);
    },
	sendMessage:(message)=>{
		fetch("https://manuchasoapi.herokuapp.com/send-message",{
        	method: "POST",
        	body: JSON.stringify(message),
        	headers:{
            	"Content-Type": "application/json",
            	"Accept": "application/json"
      	  }
    	})
    	.then(response =>{
       		console.log(response.json())
        	window.location.pathname = "/mensaje-enviado";
    	})
    	.catch(err => console.error(err));
	},
    deleteMessage:(messageData)=>{
            const body = {
                id:messageData.id,
                token:messageData.token
            }

        fetch("https://manuchasoapi.herokuapp.com/delete-message",{
            method:"POST",
            body:JSON.stringify(body),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(response =>{
            console.log(response.json())
        })
        .catch(err => console.error(err));
    }

}
export default ApiCalls;