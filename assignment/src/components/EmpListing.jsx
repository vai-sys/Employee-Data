



import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const EmpListing = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  
  const handleEdit=(id)=>{
    navigate('/employee/detail/'+id)
  }
 
  const showDetails = (id) => {
    navigate('/employee/detail/' + id);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/employee");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='flex flex-col items-center mt-10 justify-evenly'>
        <div className='mb-6 gap-7'>
          <NavLink to='employee/addnew' className="px-4 py-2 mr-2 font-bold text-white bg-green-700 rounded hover:bg-green-500">Add Employee Data</NavLink>
        </div>
        <table className="border border-collapse border-slate-500">
          <thead>
            <tr>
              <th className="px-6 py-6 border border-slate-600">Name</th>
              <th className="px-6 py-6 border border-slate-600">Email</th>
              <th className="px-6 py-6 border border-slate-600">Phone</th>
              <th className="px-6 py-6 border border-slate-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees && employees.map(item => (
              <tr key={item.id}>
                <td className="px-6 py-4 border border-slate-600">{item.name}</td>
                <td className="px-6 py-4 border border-slate-600">{item.email}</td>
                <td className="px-6 py-4 border border-slate-600">{item.phone}</td>
                <td className="px-6 py-4 border border-slate-600">
                  <NavLink className="px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={() => { handleEdit(item.id) }}>Edit</NavLink>
                  <NavLink className="px-4 py-2 mr-2 font-bold text-white bg-red-500 rounded hover:bg-red-700" onClick={() => { handleRemove(item.id) }}>Remove</NavLink>
                  <NavLink className="px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-700" onClick={() => { showDetails(item.id) }}>Details</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmpListing;
