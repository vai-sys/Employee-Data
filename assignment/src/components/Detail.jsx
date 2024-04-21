import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { empid } = useParams()
  const [empData, setEmpData] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/db.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json()
      })
      .then((resp) => {
        const employee = resp.employee.find(emp => emp.id === empid);
        if (!employee) {
          throw new Error('Employee not found');
        }
        setEmpData(employee);
      })
      .catch((err) => {
        setError(err.message)
        console.log(err.message)
      })
  }, [empid])

  return (
    <div>
      {error && <p>{error}</p>}
      {empData.name && (
        <div>
          <p>Employee Name is {empData.name}</p>
          <p>Employee Email is {empData.email}</p>
          <p>Employee Email is {empData.email}</p> 
        </div>
      )}
    </div>
  )
}

export default Detail


// import React from 'react'
// import { useParams } from 'react-router-dom'
// const {empid}=useParams();
// const [empData,setempData]=useState({});
// useEffect(()=>{
//   fetch('http://localhost:8000/employee'+empid).then((res)=>{
//     return res.json();
//   }).then((resp)=>{
//     setempData(resp);
//   }).catch((err)=>{
//     console.log(err.message);
//   })
// },[])
// const Detail = () => {
//   return (
//     <div>
//       <p>Employee Name is {employee.name}</p>
//       <p>EMployee Email {employee.email}</p>
//     </div>
//   )
// }

// export default Detail
