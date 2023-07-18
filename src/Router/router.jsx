import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Main from '../Layouts/Main';
import ErrorPage from '../Pages/Error/ErrorPage';
import Home from '../Pages/Home/Home/Home';
import Banner from '../Pages/Home/Banner/Banner';
import About from '../Pages/About/About';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';



const router = createBrowserRouter([
    {
        path:"/",
        errorElement:<ErrorPage />,
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home/>,
                loader: ()=>fetch("http://localhost:5000/total-houses")
            },
            {
                path:"/about",
                element: <About></About>
            },
            {
                path:"/propertyListings",
                element:<Banner />
            },
            {
                path:"/signIn",
                element:<SignIn></SignIn>
            },
            {
                path:"/signUp",
                element:<SignUp></SignUp>
            }
        ]
        
    }
])

export default router;