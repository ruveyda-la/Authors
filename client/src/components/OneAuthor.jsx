import {useEffect,useState} from 'react'
import axios from 'axios'
import { useParams,Link } from 'react-router-dom'



const OneAuthor = () => {
  const {id} = useParams()
  const[state,setState] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res)=> {
          setState(res.data)
        })
        .catch((err) => console.log(err))
  },[id])
  return (
    <div>
    <div className="card" style={{width:"500px",margin:"0 auto", marginTop:"100px"}}>
      <div className="card-body">
      <h5 className="card-title">Author Name:</h5>
        <h6 className="card-title">{state.name}</h6>
      </div>
      </div>
      <Link to="/authors">Dashboard</Link>
    </div>
  )
}

export default OneAuthor