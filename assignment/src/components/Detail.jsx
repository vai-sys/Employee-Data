import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const [empData,setEmpData]=useState({});
  const {empid}=useParams();
  useEffect(()=>{
    fetch()

  },[]);
  return (
    <div>
      
    </div>
  )
}

export default Detail
