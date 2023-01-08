import React from 'react'
import '../../styles/index.css'
import  NavBar  from '../NavBar'

const Header = () => {
  return (
    <header className="header">

    <div className="header__portada ">
        <a className="portada__brand flex" href="https://lavaperu.com/">
            <img loading="lazy" src="https://www.lavaperu.com/revistatxt/img/Recurso%205.png" alt="Logo Lava" className="portada__logo h-100p"/>
            <p className="portada__marca">
                Laboratorio de <br/> Vanguardia <br/> Pedagógica
            </p> 
        </a>
        <div className="portada__banner">
            <h1 className="banner__titulo">MAPA HUMANISTA</h1>
        </div>
    </div>
        <NavBar />
    </header>
  ) 
}

export default Header