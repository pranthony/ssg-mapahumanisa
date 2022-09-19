import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import  Loader  from '../atoms/loaders'
import  GalleryCharacters  from '../components/galleryCharacters'
import Layout from '../components/Layout'
import BASE_URL from '../config/constants'


const Buscar = (props) => {
  const [characters, setCharacters] = useState()
  const [notResults, setNotresults] = useState(false)

  const url = new URLSearchParams(props.location?.search)
  const keyword = url?.get('keyword')

  useEffect(()=>{
    fetch(`${BASE_URL}/index.php/character/search?keyword=${keyword}`)
    .then(response=>response.json())
      .then(data=>{
        data.length? setCharacters(data): setNotresults(true)
        
      }) 
  }, [])

  return (
    <Layout>

      <div className='width_disposition'>
          <div style={{margin:'50px auto'}}>
              {characters ?
              <GalleryCharacters characters={characters}  />:
              
              notResults? <div className="articles__not-found">
              <h4 classname="titulo-h4">No hay resultados</h4>
          </div> : <Loader/>
              }
          </div>
      </div>
    </Layout>

  )
}
export default Buscar
export {Head } from '../components/Layout'
