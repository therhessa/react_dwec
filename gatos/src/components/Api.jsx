import React,{useState} from 'react'
import '../style.css'
import moment from 'moment'
import 'moment/locale/es'


const Api = () => {
   
    const [gatos,setGatos]=useState([])

    const obtenerinnfo = async()=>{
        const data=await fetch('https://api.thecatapi.com/v1/images/search?limit=4&page=100&order=DESC')
        const cat =await data.json()
        setGatos(cat)
        console.log(cat)
    }
  
    return (
        <div class="container">
            <div className="boton">
            <button className="estilo" onClick={()=>obtenerinnfo()}>Haz clic para ver  gatitos</button>
            </div>
          {
            gatos.map(item=>(
                <div key={item.id}>
                    <h5>{moment(item.fecha).format("DD/MM/YYYY")}</h5>
                    <img src= {item.url} />
                </div>
              
            ))
          }
        </div>
    )
}

export default Api
