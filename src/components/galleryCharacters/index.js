import React from 'react'
import CharacterCard from '../CharacterCard'

const GalleryCharacters = ({characters}) => {
  return (
    <div id="container__card" style={{display: 'flex', flexWrap: 'wrap'}}>
          {characters?.map((character, index)=> <CharacterCard key={index} {...character}/>)}
      </div>
  )
}

export default GalleryCharacters