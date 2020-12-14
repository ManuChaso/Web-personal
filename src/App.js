import React, {useState} from 'react'
import './App.css';

import Instagram from './assets/images/instagram.png';
import Twitter from './assets/images/twitter.png';
import Linkedin from './assets/images/linkedin.png';
import Github from './assets/images/github.png';
import Menu from './assets/images/menu1.png'

import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';

const scroll = (cordX)=>{
  window.scroll({
    top: cordX,
    left: 0,
    behavior: 'smooth'
  });
}

const HeaderMobile = ()=>{
  const [open, setOpen] = useState(false);

  return(  
    <header className={open? "headerMobileOpen" : "headerMobile"}>
      <img onClick={()=> setOpen(!open)} className="buttonNavMenu" src={Menu} alt="icono de menu desplegable"/>
      <ul className="mobileNav">
          <li onClick={()=>{ scroll(0); setOpen(!open)}}>Inicio</li>
          <li onClick={()=>{ scroll(700); setOpen(!open)}}>Sobre mi</li>
          <li onClick={()=>{ scroll(1100); setOpen(!open)}}>Skills</li>
          <li onClick={()=>{ scroll(1800); setOpen(!open)}}>Portafolios</li>
          <li onClick={()=>{ scroll(2400); setOpen(!open)}}>Contacto</li>
          <ul className="mobileRrss">
            <li><a href="https://www.instagram.com/manuchaso_web/?hl=es" target="_blank" rel="noreferrer"><img className="rrss" src={Instagram} alt="icono de instagram"/></a></li>
            <li><a href="https://twitter.com/Manuchaso_web" target="_blank" rel="noreferrer"><img className="rrss" src={Twitter} alt="icono de twitter"/></a></li>
            <li><a href="https://www.linkedin.com/in/manu-chaso-martin" target="_blank" rel="noreferrer"><img className="rrss" src={Linkedin} alt="icono de linkedin"/></a></li>
            <li><a href="https://github.com/ManuChaso" target="_blank" rel="noreferrer"><img className="rrss" src={Github} alt="icono de github"/></a></li>
          </ul>
      </ul>
    </header>
  );
}

function App() {
  return (
    <div className="miweb">
      <HeaderMobile/>
      <header className="header">
        <ul className="navMenu">
          <li onClick={()=> scroll(0)}>Inicio</li>
          <li onClick={()=> scroll(700)}>Sobre mi</li>
          <li onClick={()=> scroll(1100)}>Skills</li>
          <li onClick={()=> scroll(1650)}>Portafolios</li>
          <li onClick={()=> scroll(2000)}>Contacto</li>
          <ul className="rrssContainer">
            <li><a href="https://www.instagram.com/manuchaso_web/?hl=es" target="_blank" rel="noreferrer"><img className="rrss" src={Instagram} alt="icono de instagram"/></a></li>
            <li><a href="https://twitter.com/Manuchaso_web" target="_blank" rel="noreferrer"><img className="rrss" src={Twitter} alt="icono de twitter"/></a></li>
            <li><a href="https://www.linkedin.com/in/manu-chaso-martin" target="_blank" rel="noreferrer"><img className="rrss" src={Linkedin} alt="icono de linkedin"/></a></li>
            <li><a href="https://github.com/ManuChaso" target="_blank" rel="noreferrer"><img className="rrss" src={Github} alt="icono de github"/></a></li>
          </ul>
        </ul>
      </header>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
