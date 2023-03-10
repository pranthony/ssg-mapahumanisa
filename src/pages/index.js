import React, { useEffect, useState } from "react"
import MapaPeru from '../components/MapaPeru'
import GalleryCharacters from '../components/galleryCharacters'
import Layout from "../components/Layout"
import { BASE_URL, FILE_BASE_URL } from "../config/constants"
import useVistCounter from "../hooks/hooks.js"

const IndexPage = () => {

  const [clicked, setClicked] = useState();
  const [characters, setCharacters] = useState();
  const [character, setCharacter] = useState();

  const { data } = useVistCounter()
  
  useEffect(()=>{
    if(clicked) 
        fetch(BASE_URL+`/index.php/character/listByDepartment?name=${clicked}`)
            .then(response=>response.json())
            .then(data=>{
                setCharacters(data)
                setCharacter(data[Math.floor(Math.random()* data.length)])
            })
  }, [clicked])

  const getDepartment = target => {
    setClicked(target.attributes.name.value)
    
  }
  return (
    <div>
        
        <Layout>
           
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                <div className='grid' style={{maxWidth:500, margin: '100px 20px'}}>
                    <h3>¿DE QUÉ SE TRATA?</h3>
                    <p>El proyecto consta de dos
                    procesos que trabajan articulada
                    y simultáneamente:</p>
                    <ol style={{marginLeft:20}}>
                        <li>el  Mapa humanista</li>
                        <li>las Escuelas de formación humanista</li>
                    </ol>
                    
                    <h3>¿QUÉ ES EL MAPA HUMANISTA?</h3>

                    <p>Es una
                    plataforma digital de lectura
                    interactiva en la que la ciudadanía
                    puede encontrar textos
                    digitalizados (e-books, PDF y
                    audio-libros: YouTube, Spotify,
                    ITunes) de intelectuales peruanos.
                    La plataforma busca promover la
                    lectura entre las y los jóvenes a
                    partir de medios más afines a sus
                    prácticas tecnológicas e intereses
                    cotidianos.</p>
                    <h3>¿Y LAS ESCUELAS DE FORMACIÓN?</h3>
                    <p>Son espacios para
                    la formación de ciudadanas y ciudadanos
                    humanistas y de líderes  con interés en
                    la labor educativa (reflexión e
                    innovación pedagógicas, diseño e
                    implementación de proyectos
                    culturales) y
                    la participación social,
                    económica y política (voluntariados,
                    emprendimientos, elecciones).
                    </p>
                    <div className='flex flex-center'>
                    
                        <a  className='inline-block' href={FILE_BASE_URL+"/static/brochure.pdf"} target="_blank" rel="noreferrer">
                            <button  className='flex' >
                            <span>Mas información</span>
                            <span className="material-symbols-outlined">
                                menu_book
                            </span>
                            </button>
                        </a>
                        <button className='flex ' disabled>
                            <span>Visitas {data?.visits} </span>
                            <span class="material-symbols-outlined">
                                visibility
                            </span>
                        </button>
                        
                    </div>
                </div>
                <MapaPeru character={character} callback={getDepartment} />
            </div>
            {characters &&
            <div className='width_disposition' style={{margin:'50px auto'}}>
                <h3 >GALERIA DE HUMANISTAS DE {clicked?.toUpperCase()} ({characters.length})</h3>
                <br />
                <GalleryCharacters characters={characters} />
            </div>
            }
        </Layout>
    </div>

  )
}

export default IndexPage

export {Head } from '../components/Layout'