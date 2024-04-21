// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import About from './components/About';
// import Home from './components/Home';
// import Product from './components/Product'
// import EmpListing from './components/EmpListing';
// import Addnew from './components/Addnew'
// import Remove from './components/Remove';
// import Detail from './components/Detail';
// import Edit from './components/Edit';


// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/home",
//       element: <><Navbar/><Home /></>,
//     },
//     {
//       path: "/",
//       element: <><Navbar/><EmpListing /></>,
//     },
//     {
//       path: "/about",
//       element: <><Navbar/><About /></>,
//     },
//     {
//       path:"/product",
//       element:<><Navbar/><Product/></>
//     }
//     ,
//     {
//       path:"/employee/addnew",
//       element:<><Addnew/></>
//     },
//     {
//       path:"/employee/remove",
//       element:<><Remove/></>
//     },
//     {
//       path:"/employee/edit:empid",
//       element:<><Edit/></>
//     },
//     {
//       path:"/employee/detail:empid",
//       element:<><Detail/></>
//     }
//   ]);

//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;



import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Product from './components/Product'
import EmpListing from './components/EmpListing';
import Addnew from './components/Addnew'
import Remove from './components/Remove';
import Detail from './components/Detail';
import Edit from './components/Edit';


function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <><Navbar/><Home /></>,
    },
    {
      path: "/",
      element: <><Navbar/><EmpListing /></>,
    },
    {
      path: "/about",
      element: <><Navbar/><About /></>,
    },
    {
      path:"/product",
      element:<><Navbar/><Product/></>
    }
    ,
    {
      path:"/employee/addnew",
      element:<><Addnew/></>
    },
    {
      path:"/employee/remove",
      element:<><Remove/></>
    },
    {
      path:"/employee/remove:empid",
      element:<><Remove/></>
    },
    {
      path:"/employee/edit",
      element:<><Edit/></>
    },
    {
      path:"/employee/edit:empid",
      element:<><Edit/></>
    },
    {
      path:"/employee/detail",
      element:<><Detail/></>
    },
    {
      path:"/employee/detail:empid",
      element:<><Detail/></>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;