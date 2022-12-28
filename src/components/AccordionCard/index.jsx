import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Accordion  from '../../atoms/accordion'
import { BASE_URL, FILE_BASE_URL } from '../../config/constants'

const AccordionCard = ({titulo, id, lugarPublicacion, fechaPublicacion, editorial, showTextContent, imgLink}) => {
    const [texts, setTexts] =  useState()

    useEffect(()=>{
        
        fetch(BASE_URL+'/index.php/text/getByBook?id='+id).then(response=>response.json()).then(data=>{setTexts(data);})

    }, [])

    return (
    <div className="col grid grid-center">
      <h2 style={{textAlign:'center'}}>{titulo}</h2>
    <div className='flex flex-center'>
      {imgLink && 
        <img style={{width:'310px'}}  src={`${FILE_BASE_URL}/static/${imgLink}`} alt="" />
      }
      <div className="tabs">
        {texts  && texts.map((text, i)=><Accordion key={i} {...text} showTextContent={showTextContent}/> )}
        <div className="tab">
          <input type="radio" id="rd3" name="rd"/>
          <label htmlFor="rd3" className="tab-close">
              <span style={{color: 'white'}}>{lugarPublicacion}: {editorial}, {(new Date(fechaPublicacion).getFullYear())}</span>
          </label>
        </div>
      </div>
      
    </div>
  </div>
  )
}
export default AccordionCard