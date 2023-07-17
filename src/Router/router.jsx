import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Main from '../Layouts/Main';
import ErrorPage from '../Pages/Error/ErrorPage';
import Home from '../Pages/Home/Home/Home';

const router = createBrowserRouter([
    {
        path:"/",
        errorElement:<ErrorPage />,
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
        
    }
])

export default router;