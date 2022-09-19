import React from 'react'

const NavBar = () => {
    
    function changeTheme() {
        const body = document.querySelector('body')
        if(body.classList.contains('light-theme')){
            localStorage.setItem('tema', "dark")
            
        }else{
            localStorage.setItem('tema', "light")
        }
        body.classList.toggle('light-theme');

    }
    
    return (
        <>
            <nav className="header__nav">
                <ul className="nav__menu flex">
                    <li className="menu__inicio tablink nav__item">
                        <a href="/">Inicio</a>
                    </li>

                    <li className="tablink nav__item">
                        <a href="/request"> Postula a tu humanista </a>
                    </li>

                </ul>
                <form className="nav__form flex" action='/buscar' method='GET'>
                    <div>
                        <div type="submit">
                            <span className="material-symbols-outlined nav__buscar">
                                search
                            </span>
                        </div>
                        <input type="text" name="keyword" id="nav__input" placeholder="Buscar un humanista "/>
                
                    </div>
                    
                    <span onClick={changeTheme} className="material-symbols-outlined" id='mode'>
                        brightness_6
                    </span>
                </form>
            </nav>
            <div className="nav__hambrg w-100p" id="bars">
                <span  id="hmbrg" className="material-symbols-outlined">menu</span>
            </div>
        </>
        
    )
}

export default NavBar