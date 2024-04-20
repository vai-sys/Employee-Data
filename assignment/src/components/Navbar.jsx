


import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>
            Resto<span className='text-2xl font-bold text-pink-600'>List</span>
          </h1>
        </div>
        <div className='flex items-center justify-between gap-8 font-medium mt-5'>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/home"><li className='px-3 list-none text-md'>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/"><li className='px-3 list-none text-md'>Data</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/about"><li className='px-3 list-none text-md'>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/product"><li className='px-3 list-none text-md'>Product</li></NavLink>
          
        </div>
        <div className='flex items-center justify-between gap-7'>
         
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
