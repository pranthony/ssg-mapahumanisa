
import React from 'react'
import { useEffect, useState } from "react";
import Loader from "../atoms/loaders";
import AccordionCard from "../components/AccordionCard";
import Layout from '../components/Layout';
import NotFound  from "../components/NotFound";
import {BASE_URL, FILE_BASE_URL} from "../config/constants";

const Humanista = (props) =>{

    const [info, setInfo] =useState(null)
    const [books, setBooks] = useState()
    const [textContent, setTextContent] = useState()
    const [notFound, setNotFound] = useState(false)
    
    
    const url = new URLSearchParams(props.location?.search)
    const paramId = url?.get('id')


    

    useEffect(()=>{
        fetch(BASE_URL+'/index.php/character/get?id='+paramId)
            .then(response=>response.json())
            .then(data=>{
                data[0] ? setInfo(data[0]): setNotFound(true)
            })
    },[])

    useEffect(() => {
        fetch(BASE_URL+'/index.php/book/getByHumanist?id='+paramId).then(response=>response.json()).then(data=>{setBooks(data);})
    },[info])

    useEffect(()=>{
        document.getElementById('textContent')?.scrollIntoView({behavior:"smooth"})
    }, [textContent])

    const showTextContent = (id)=>{
        fetch(BASE_URL+'/index.php/text/getContentText?id='+id)
            .then(response=>response.json())
            .then(data=>{
                let parrafos = data[0]?.contenido?.split('|')
                setTextContent(parrafos);
            })
        
    }
    return(
        <Layout>
    <div className=" width_disposition"> 
            {info ? 
                <div>
                    <div className="container">
                        <div className="grid grid-center" style={{ width: 260}}>
                            <h2 variant={'h3'} style={{textAlign:'center'}}>{info.nombres}</h2>

                            <div>

                                <img style={{width:"250px", borderRadius:"10px"}} src={`${FILE_BASE_URL}/static/${info.linkImg}`} loading="lazy"/>
                            </div>
                            <div style={{ margin:12}}>

                            <p style={{textAlign:'justify', lineHeight: '1.5' }} variant={'body1'}>{info.biografia}</p>

                            </div>

                        </div>
                        
                        <div className="books grid grid-center" style={{gap: '50px'}}>
                            {books && books.map((book, i)=> <AccordionCard key={i} {...book} showTextContent={showTextContent}/>)}
                        </div>
                        
                    </div>
                    <div id="textContent" >
                        {textContent &&
                        <div  style={{height:'100vh', overflowY: 'scroll', margin: '50px auto', border: '2px solid orange', padding: '30px 25px', borderRadius: '15px'}}>
                            { 
                                textContent.map((e, i)=> <p key={i} style={{  textIndent: ()=>i?'0px':'40px'}} className="margin-10-auto" dangerouslySetInnerHTML={{__html: e}}/>)
                            }
                        </div>           
                        }
                    </div>
                </div>:
                notFound ?<NotFound msj="Humanista no encontrado"/>:<Loader/>
            }
    </div>
    </Layout>
)}

export default Humanista
export { Head } from '../components/Layout'
