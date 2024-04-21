
import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';

const Addnew = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isActive, setIsActive] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const empData = { name, email, phone, isActive };
    fetch("http://localhost:8000/employee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empData)
    }).then((res) => {
      if (res.ok) {
        alert("Saved Successfully");
        navigate('/');
      } else {
        throw new Error('Failed to save data');
      }
    }).catch((err) => {
      console.error(err.message);
    })
  }

  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white rounded-md shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Add New Employee </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="id" className="block mb-1 text-sm font-medium text-gray-700">ID</label>
          <input
            type="text"
            id="id"
            value={id}
            disabled
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}  
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          {name.length <= 0 && (
            <span className="font-medium text-red-700">Please Enter the name</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          {email.length <= 0 && (
            <span className="font-medium text-red-700">Please Enter Email</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          {phone.length <= 0 && (
            <span className="font-medium text-red-700">Please Enter phone Number</span>
          )}
        </div>
        <div className="flex items-center justify-start gap-8 mb-4 ">
          <label htmlFor="isActive" className="block text-sm font-medium text-gray-700">IsActive</label>
          <input
            type="checkbox"
            id="isActive"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
            className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex justify-between">
          <button type="submit" className="px-4 py-2 ml-6 text-white transition-colors duration-300 bg-red-500 rounded-md hover:bg-red-600">
            Save
          </button>
          <NavLink to='/'>
            <button type="button" className="px-4 py-2 mr-6 text-white transition-colors duration-300 bg-blue-500 rounded-md hover:bg-blue-600">
              Back
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Addnew;















