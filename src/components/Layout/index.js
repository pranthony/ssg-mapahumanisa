import React from 'react'
import Footer from '../Footer'
import Header from '../Header'


const Layout = (props) => {

  return (
    <div>
        
        <Header />
        
          {props.children}
        <Footer/>
    </div>
  )
}

export default Layout


export const Head = () => (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <title>LAVA | Mapa humanista </title>
    </>
  )
