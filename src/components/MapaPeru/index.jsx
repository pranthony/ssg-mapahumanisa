import styled from '@emotion/styled';
import {VectorMap}  from '@south-paw/react-vector-maps'
import React, {  useState, useRef } from 'react'
import CharacterCircle from '../CharacterBubble';
import peru from './peru';

const Map = styled.div`
  margin: 50px auto;
  width: 500px;
  
  svg {
    stroke: #242424;
    // All layers are just path elements
    path {
      fill: rgb(211, 93, 25);
      cursor: pointer;
      outline: none;
      // When a layer is hovered
      &:hover {
        fill: #FF3834;
      }
      // When a layer is focused.
      &:focus {
        fill: #FF3834;
      }
      // When a layer is 'checked' (via checkedLayers prop).
      &[aria-checked='true'] {
        fill: rgba(56,43,168,1);
      }
      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current='true'] {
        fill: rgba(56,43,168,0.83);
      }
      // You can also highlight a specific layer via it's id
      &[id="nz-can"] {
        fill: rgba(56,43,168,0.6);
      }
    }
  }
`;


const MapaPeru = ({character, callback}) => {

  const [hovered, setHovered] = useState(null);
  const [position, setPosition] = useState({});
  const cityHover = useRef()
  
  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    onClick: ({ target }) =>  callback(target),
    onMouseLeave: ({ target }) => setHovered(null)
  };

  const handlerMouseMove = (e)=>{
    setPosition({left: `${e.clientX}px`, top : `${e.clientY}px`, display:'grid'})
    document.onscroll = ()=>{
      if (cityHover.current) cityHover.current.style.display='none'
    }
  }

  return (
        <div className='grid'>
          <Map className='mapa'>  
          <VectorMap   onMouseMove={(e)=>handlerMouseMove(e)} layerProps={layerProps} {...peru}/>
          {hovered && <code ref={cityHover} className='cityHover' style={{ ...position}}>{hovered}</code>}
          </Map>
          {character &&
            <div className="character">
              <CharacterCircle {...character}/>
            </div>
          }
        </div>

  )
}
export default MapaPeru