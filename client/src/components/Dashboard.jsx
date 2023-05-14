import axios from 'axios';
import {useState, useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Dashboard = () => {
    const [state,setState]=useState([]);
    const navigate = useNavigate()
    

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
             .then((res)=>{
                setState(res.data)
                navigate("/authors")

             })
             .catch((err)=>{
                console.log(err)
             })
    },[navigate])

    const deleteHandler = (id) => {
        const newList = state.filter((item,idx) => (item._id !== id));
        setState(newList)
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then((res)=> {
          console.log(res.data)
        })
        .catch((err) => console.log(err))
    }

  return (
    <div className='container' style={{width:"1000px", marginTop:"100px"}}>
        <h4>Authors</h4>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.map((item,idx) => (
                        <tr key={idx}>
                            <td>{item.name}</td>
                            <td>
                                <Link to={`/authors/${item._id}`}> View</Link> |
                                <Link to={`/authors/${item._id}/edit`}>Edit</Link> |
                                <Link to={`/authors`} onClick={() => deleteHandler(item._id)} style={{color:"red"}}>Delete</Link>
                            </td>
                        </tr>
                    ))


                }    
            </tbody>
        </table>
        <Link to="/authors/new" >Add New Author</Link>



    </div>
  )
}

export default Dashboard