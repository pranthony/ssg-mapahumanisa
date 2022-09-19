import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Layout from '../../components/Layout';

const RequestForm = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_byzub3e', 'template_e920e9a', form.current, '-Fhw6KLvvVUkrAbBK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
  return (
    <Layout>
        <div className='width_disposition '>
            <form action=""  className='margin-50-auto ' ref={form} onSubmit={e=>sendEmail(e)}>
                <div className='flex flex-space-between'>
                    <div className="form__collection" style={{width:350}}>
                        <h3>Datos del humanista</h3>
                        <hr />
                        <br />
                        <div style={{display: 'grid', gap: 10}}>
                            <label htmlFor="">Nombres y apellidos *</label>
                            <input type="text" name='autor_name' required placeholder='ej. César Vallejo'/>
                            <label htmlFor="tab" >Lugar de origen *</label>
                            <input type="text" name='autor_region' required placeholder='ej. La Libertad'/>
                            <label htmlFor="tab">Biodata *</label>
                            <textarea type="text" name='autor_biografy' required rows={10} cols={20} placeholder="ej. César Abraham Vallejo Mendoza fue un poeta y escritor peruano. Es considerado uno de los mayores innovadores de la poesía universal del siglo XX y el máximo exponente de las letras en el Perú.​"></textarea>    
                        </div>
                        <br />
                    </div>
                    <div className="form__collection" >
                        <h3>Propuesta de texto</h3>
                        <hr /><br />
                        <div style={{display: 'grid', gap: 10}}>
                            <label htmlFor="">Libro *</label>
                            <input type="text" name='libro' required placeholder='ej. Trilce'/>
                            <label htmlFor="tab">Texto ( págs.) *</label>
                            <input type="text" name='texto' required placeholder='ej. Hojas de ébano (44-45)'/>
                            <textarea id="" cols="50" rows="20" name="texto_completo" placeholder='Escribe el texto...'></textarea>
                            <p>
                                Nota: 
                                Recuerda que si tienes contenido 
                                multimedia sobre tu humanista, 
                                puedes enviarlo a  
                                prensalavaperu@gmail.com. 
                            </p>
                            
                        </div>
                        <br />
                    </div>
                    <div className="form__collection" >
                        <h3>Tus datos:</h3>
                        <hr /><br />
                        <div style={{display: 'grid', gap: 10}}>
                            <label htmlFor="">Nombres * </label>
                            <input type="text" name='from_name' required/>
                            <label htmlFor="tab">Email * </label>
                            <input type="text" name='from_email' required/>
                            <label htmlFor="tab">Biodata: </label>
                            <input type="text" name='biodata' required/>
                        </div>
                        <br />
                    </div>
                </div>

                <button className="flex" type='submit'>
                    <span>Enviar</span>
                    <span className="material-symbols-outlined">
                        mail
                    </span>
                </button>
            </form>
        </div>
    </Layout>
  )
}

export default RequestForm
export { Head } from '../components/Layout'
