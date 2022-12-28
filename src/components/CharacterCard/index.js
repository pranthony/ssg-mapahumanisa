import { Link } from 'gatsby'
import React from 'react'
import { FILE_BASE_URL } from '../../config/constants'



const CharacterCard = ({...character}) => {
  return (
    <div style={{textAlign:'center', background: '#F4F7A1', maxWidth: '345px', margin:'4px', borderRadius: 10}}>
        <div
            style={{ width: '100%', height: '100px', display: 'flex', background: 'rgb(211, 93, 25)', borderRadius: 10}}
        >
            <img
            style={{ width: 100,transform: 'translate(20px,20px)',borderRadius: '50%', border: '1px solid white'}}
            src={`${FILE_BASE_URL}/static/${character.linkImg}`}
            alt={character.nombres}
            />
            <div style={{width: '60%', display: 'grid', placeContent: 'center', marginLeft: 18}}>
                <h3>{character.nombres}</h3>
            </div>
        </div>
        <div>
            <p style={{textAlign:'justify', height:120,overflow: 'hidden', color: '#252525', margin: '35px 20px', lineHeight:1.5 }}>
            {character.biografia}
            </p>
        </div>
        <div
            style={{ width: '100%', paddingBottom: 20}}
        >
            <Link to={`/humanista?id=${character.id}`} >Ver mas</Link>

        </div>
    </div>
  )
}

export default CharacterCard