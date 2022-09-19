import React from 'react'
import Layout from '../components/Layout'
import img from '../images/404.jpg'

const NotFound = (props) => {
  return (
    <Layout>
      <div className="grid grid-center" style={{margin: '50px 0px'}}>
          <div style={{width: 400}}>
              <img className='w-100p' src={img} alt="Imgen no encontrada" />

          </div>
          <h2 style={{textAlign:'center'}}>
              {props.msj}
          </h2>
      </div>
    </Layout>
  )
}
export default NotFound