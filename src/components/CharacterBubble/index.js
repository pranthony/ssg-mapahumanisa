import React from 'react'
import { FILE_BASE_URL } from '../../config/constants'
/* 
width: 100%;
height: 20%;
display: flex;
margin-top: 15px;
margin-left: 10px;
border: 5px solid #242424;
border-radius: 50px;
background: rgb(217, 16, 35); */

const CharacterBubble = ({...character}) => {
  return (
    <div style={{background: 'white', width: '280px', height: '280px', margin:'4px', borderRadius: '15px', overflow: 'hidden', border: '2px solid rgb(211, 93, 25)', background: '#F4F7A1'}}>
    <img
        style={{width:80, height: 80, borderRadius: '50%', border: '1px solid #242424', position: 'absolute', zIndex:100, margin: '10px 5px 0px'}}
        src={`${FILE_BASE_URL}/static/${character.linkImg}`}
        alt={character.nombres}
        />
    <div
        style={{ width: '100%', height: '20%', display: 'grid', placeContent: 'center', marginLeft: 20, background: 'rgb(211, 93, 25)', marginTop: 20}}
    >
        
            <h4 style={{width: '60%', marginLeft: 80, textAlign: 'center'}}>{character.nombres}</h4>
    </div>
        <p style={{textAlign: '', height:'50%',overflow: 'hidden', color: '#242424', margin: '30px 20px 5px',  textOverflow:'clip', lineHeight: '23px', fontSize: '15px'}}>
        {character.biografia}
        </p>
    <div
        style={{ width: '100%', textAlign: 'center' }}
    >
        <a href={`/humanista?id=${character.id}`} style={{ color: 'rgb(211, 93, 25)'}} >Ver mas</a>
    </div>
    </div>
  )
}

export default CharacterBubble