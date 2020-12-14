import React from 'react'
import './home.css';

function Home() {
  return (
    <div className="home">
    	<h2 className="name">Manu Chaso</h2>
    	<h3 className="profesion">Desarrollador web</h3>
    	<div className="animContainer">
    		<ul className="animation">
    			<li className="react">React</li>
    			<li className="nodejs">NodeJs</li>
    			<li className="express">Express</li>
    			<li className="mongodb">MongoDb</li>
    		</ul>
    	</div>
    </div>
  );
}

export default Home;
