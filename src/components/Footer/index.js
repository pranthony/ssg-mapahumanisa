import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" className="w-100p">
    <div className="footer__row">
            <div className="footer__col">
                <h3 className="footer__enlaces">Enlaces relacionados</h3>
                <ul className="enlaces__items">
                    <li>
                        <a href="https://lavaperu.com/" target="_banck">¿Qué es LAVAPERÚ?</a>
                        
                    </li>
                    <li>
                        <a href="https://fehlima.com/" target="_banck">Festival de las Humanidades</a>
                    
                    </li>
                    <li>
                        <a href="https://lavaperu.com/revistatxt" target="_banck">TXT Revista de Humanidades y Ciencias Sociales</a>
                    </li>
                </ul>
            </div>
            <div className="footer__col">
                <h3 className="footer__contactos">Contacto</h3>
                <ul>
                    <li><i className="far fa-envelope"></i> prensalavaperu@gmail.com</li>
                    <li><i className="fab fa-whatsapp"></i> +51 951 819 737</li>
                </ul>
            </div>
        </div>
        <h5 className="copyright"><i className="far fa-copyright"></i> 2016-2022 Laboratorio de Vanguardia Pedagógica Peruana - Lima, Perú
        </h5>
    </footer>
  )
}

export default Footer