import React from 'react'
import { FILE_BASE_URL } from '../../config/constants'
import spotify from '../../images/spotify_logo.jpg'
import youtube from '../../images/youtube_logo.png'

const Accordion = ({id, titulo, pagInicio, pagFinal, spotifyLink, youtubeLink, showTextContent, textoCompleto, materialEducativo}) => {
  return (
    <div className="tab">
        <input type="checkbox" id={id} name='rd'/>
        <label className="tab-label" htmlFor={id}>{titulo} (pp. {pagInicio} - {pagFinal})
        </label>
        <div className="tab-content grid" style={{background: '#F2F8A0'}}>
            <h4 >Escucha el texto aqui </h4>
            <ul style={{listStyle: 'none'}} className="flex flex-center">
                <li>
                    {
                        spotifyLink &&
                    <a href={spotifyLink} target="_blank">
                     <img style={{width: 50}} src={spotify} alt="spotify_logo" />
                    </a>
                    }
                </li>
                <li >
                    {
                        youtubeLink &&
                        <a href={youtubeLink} target="_blank">
                        <img style={{width: 50}} src={youtube} alt="youtube_logo" />

                        </a>
                    }
                </li>
            </ul>
            <h4>Lee el texto aqui</h4>
            <div className='grid grid-center'>
                
                <button onClick={() => showTextContent(id)} className='flex outline'>
                    <span>Leer el texto</span>
                    <span className="material-symbols-outlined">expand_circle_down</span>
                </button>
                {
                    textoCompleto &&
                    <a href={`${FILE_BASE_URL}/static/${textoCompleto}.pdf`} target="_blank" className='contents'>
                        <button className='flex outline' >
                            <span>Texto completo</span>
                            <span className="material-symbols-outlined">picture_as_pdf</span>
                        </button>
                    </a>
                }
                {
                    materialEducativo &&
                    <a href={`${materialEducativo}`} target="_blank" className='contents'>
                        <button className='flex outline'>
                            <span> Material educativo</span>
                            <span className="material-symbols-outlined">school</span>
                        </button>
                    </a>
                }
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Accordion
