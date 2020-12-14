import React from 'react'
import './skills.css';

const Skill = (props)=>{
  return(
    <div className="skill">
      <p>{props.name}</p>
      <div className="bar"><div className="progress" style={{width:props.progress}}><p>{props.progress}</p></div></div>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <div className="skillsContainer">
        <div className="container">
          <Skill progress="95%" name="HTML/CSS"/>
          <Skill progress="95%" name="Javascript"/>
          <Skill progress="90%" name="React"/>
          <Skill progress="90%" name="NodeJs"/>
          <Skill progress="85%" name="Express"/>
          <Skill progress="80%" name="MongoDb"/>
        </div>
        <div className="container">
          <h3>Mis habilidades</h3>
          <p>Estas son algunas de las Habilidades que he adquirido desde que empecé a estudiar y practicar en 2015. Están todas enfocadas al diseño y desarrollo de paginas web porque es una de las ramas que mas me apasiona de la programación. Iré actualizando este apartado conforme vaya mejorando o adquiriendo nuevas habilidades.</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
