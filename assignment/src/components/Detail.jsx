import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';

const Detail = () => {
  const [empData,setEmpData]=useState({});
  const {empid}=useParams();
  useEffect(()=>{
    fetch("http://localhost:8000/employee"+empid).then((res)=>{
     return res.json();
    }).then((resp)=>{
     setEmpData(resp)
    }).catch((err)=>{
      console.log( err.message);
    })

  },[]);
  return (
    <div>
      Detail
    </div>
  )
}

export default Detail


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const Detail = () => {
//   const [empData, setEmpData] = useState({});
//   const { empid } = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:8000/employee/${empid}`)
//       .then((res) => res.json())
//       .then((resp) => {
//         setEmpData(resp);
//       })
//       .catch((err) => {
//         console.error(err.message);
//       });
//   }, [empid]);

//   // Render a loading indicator or message while data is being fetched
//   if (Object.keys(empData).length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Employee Details</h2>
//       <p>Name: {empData.name}</p>
//       <p>Email: {empData.email}</p>
//       <p>Phone: {empData.phone}</p>
//     </div>
//   );
// };

// export default Detail;
