import React, {useState} from 'react'
import './admin.css';


function PortfolioAdmin(props) {
	if(props.screen === "portfolio"){
		return (
			<div className="projects">
				paginas de portafolios
			</div>
		);
	}else{
		return false;
	}
}

export default PortfolioAdmin;