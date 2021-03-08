import React from 'react'
import {withRouter} from "react-router-dom"
import {auth} from '../firebase'
import '../index.css'
import Api from './Api'


const Admin = (props) => {
   const [user,setUser]=React.useState(null)
    React.useEffect(()=>{
        if(auth.currentUser){
            setUser(auth.currentUser)
            console.log("si existe usuario")
        
        }else{
            props.history.push('/login')

        }
    },[props.history])
 
    return (
        <div>
            <h1>Imagenes de gatitos</h1>
            
            {
                user && (
                    <p>{user.email}</p>
                )
              

            }
            <Api/>
            
           
            
     
            
            
        </div>
    )
}
export default withRouter(Admin)
