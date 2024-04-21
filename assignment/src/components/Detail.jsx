

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { empid } = useParams(); // Extract employee ID from URL parameters

  const [empData, setEmpData] = useState({}); // Initialize empty state for employee data
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Store any errors encountered

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/employee/${empid}`); // Use template literal for URL construction
        if (!response.ok) {
          throw new Error(`Error fetching employee data: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        setEmpData(data);
      } catch (err) {
        console.error('Error fetching employee data:', err);
        setError(err.message); // Set error state for display
      } finally {
        setIsLoading(false); // Always set loading state to false after fetching
      }
    };

    fetchData();
  }, [empid]); // Re-run effect when empid changes

  if (isLoading) {
    return <div>Loading employee data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Display employee data using empData
  return (
    <div>
      <h1>Employee Name: {empData.name}</h1>
      {/* Add other employee data properties as needed */}
    </div>
  );
};

export default Detail;


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
//       <h1>Employee Name is {employee.name}</h1>
//     </div>
//   )
// }

// export default Detail
