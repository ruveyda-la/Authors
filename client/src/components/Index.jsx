import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
const Index= () => {
    const [ message, setMessage ] = useState("")
    useEffect(()=>{
        axios.get("http://localhost:8000")
            .then(res=>setMessage(res.data.message))
            .catch(err=>console.log(err))
    }, []);
    return (
        <div style={{width:"600px",margin:"0 auto", marginTop:"100px"}}>
            <h2>{message}</h2>
            <Link to="/authors">Go to Dashboard</Link>
        </div>
    )
}
export default Index;