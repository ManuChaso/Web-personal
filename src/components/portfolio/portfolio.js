import React from 'react'
import './portfolio.css';

import Proyecto1 from '../../assets/images/proyecto1.png';
import Proyecto2 from '../../assets/images/proyecto2.png';

const Project = (props)=>{
  return(
    <div className="project">
      <img alt="foto de proyecto" src={props.img}/>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <div className="links">
        <a href={props.github} target="_blank" rel="noreferrer">Github</a>
        <a href={props.demo} target="_blank" rel="noreferrer">Demo</a>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portafolios</h2>
      <div className="projects">
        <Project
        img={Proyecto1}
        title="Mi Mapa"
        desc="Una aplicación que te permite poner un punto en un mapa de Google"
        github="https://github.com/ManuChaso/MiMapa"
        demo="https://mimapa-640ff.web.app/"/>
        <Project
        img={Proyecto2}
        title="Mi Web"
        desc="Esta es la web en la que estas."
        github="https://github.com/ManuChaso/Web-personal"
        demo=""/>
      </div>
    </div>
  );
}

export default Portfolio;