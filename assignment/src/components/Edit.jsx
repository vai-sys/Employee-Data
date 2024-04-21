import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch employee data based on ID when component mounts
    fetch(`/db.json${id}`)
      .then(response => {
        if (response.ok && response.headers.get('Content-Type') === 'application/json') {
          return response.json();
        } else {
          throw new Error('Invalid response format');
        }
      })
      .then((resp) => {
        setName(resp.name);
        setEmail(resp.email);
        setPhone(resp.phone);
        setIsActive(resp.isActive);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]); // Make sure to include `id` in the dependency array

  const handleSubmit = (e) => {
    e.preventDefault();
    const empData = { id, name, email, phone, isActive };

    // Update employee data in db.json
    fetch(`http://localhost:8000/employee/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(empData),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        navigate('/');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex flex-col justify-center min-h-screen py-6 bg-gray-100 sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-cyan-400 to-light-blue-500 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              {name.length <= 0 && (
                <span className="font-medium text-red-700">Please Enter Name</span>
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
            <div className="flex items-center justify-start gap-8 mb-4">
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
              <NavLink to="/">
                <button type="button" className="px-4 py-2 ml-6 text-white transition-colors duration-300 bg-green-500 rounded-md hover:bg-green-600">
                  Cancel
                </button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;


