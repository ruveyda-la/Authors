import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';


const Form= () => {
    const navigate = useNavigate()
    const [errors,setErrors] = useState([])
    const [ author, setAuthor ] = useState({
        name:""
    })
    const submitHandler =(e)=>{
        e.preventDefault(); 
        axios.post("http://localhost:8000/api/authors",author)
            .then(res=>{console.log(res);
                        console.log(res.data);
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
    return (
        <div className='container' style={{width:"600px", marginTop:"100px"}}>
            <div style={{display:"flex",justifyContent:"space-between",margin:"10px"}}>
            <h5>Add a New Author</h5>
            <p><Link to="/authors">Dashboard</Link></p>
            </div>
            {errors && errors.map((item,idx)=>(
                <p key={idx} onClose={()=> setErrors([])} style={{color:"red"}}>{item}</p>
            ))}
            <form onSubmit={submitHandler} >
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={author.name} onChange={changeHandler}  className="form-control" style={{margin:"10px"}}/>
                <Link to="/authors" className="btn btn-danger">Cancel</Link>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>
        </div>
    )
}
export default Form;