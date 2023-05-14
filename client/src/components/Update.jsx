import React, { useState,useEffect } from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom';
import axios from 'axios';


const Update= () => {
    const navigate = useNavigate()
    const [errors,setErrors] = useState([])
    
    const [ author, setAuthor ] = useState({
        name:""
    })
    const submitHandler =(e)=>{
        e.preventDefault(); 
        axios.patch(`http://localhost:8000/api/authors/${id}`,author)
            .then(res=>{console.log(res);
                        navigate("/authors")
                        })
            .catch((err) => {
                console.log(err);
                const errors = err.response.data.error.errors;
                const errList=[];
                for(const key of Object.keys(errors)){
                    errList.push(errors[key].message)
                };
                setErrors(errList);
            })
        };
        

    const changeHandler=(e)=>{
        setAuthor({
            ...author,
            [e.target.name]:e.target.value
        })
    };
    const {id} = useParams()
    useEffect(() => {
      axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res)=> {
          setAuthor(res.data)
        })
        .catch((err) => console.log(err))
    },[id])
    return (
        
        <div className='container' style={{width:"600px", marginTop:"100px"}}>
        
            <div style={{display:"flex",justifyContent:"space-between",margin:"10px"}}>
            <h5>Update Author</h5>
            <p><Link to="/authors">Dashboard</Link></p>
            </div>
                {errors && errors.map((item,idx)=>(
                <p key={idx} onClose={()=> setErrors([])} style={{color:"red"}}>{item}</p>
            ))}
            <form onSubmit={submitHandler} >
                <label htmlFor="name">Title:</label>
                <input type="text" name="name" value={author.name} onChange={changeHandler}  className="form-control" style={{margin:"10px"}}/>
                <Link to="/authors" className="btn btn-danger">Cancel</Link>
                <button type="submit" className="btn btn-info">Update</button>
            </form>
            
        </div>
    
        
    )
}
export default Update