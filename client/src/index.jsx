import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
//ImportiNG Pages
import Logo from './pages/Logo'
import Login from './pages/login.jsx';
import Signup from './pages/Signup.jsx';
import Home from './pages/Home.jsx';

const AppLayout = () => { 
    return(
        <>
        <Outlet/>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <Logo /> },
            { path: "/Login", element: <Login /> },
            {path:'/signup',element:<Signup/>},
            {path:'/home',element:<Home/>}
            //{ path: "/signup", element: <Signup /> },
        ]
    }
]); // <-- Added missing parenthesis and semicolon

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);