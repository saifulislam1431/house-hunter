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
import Dashboard from '../Pages/Dashboard/Dashboard';
import AllHouses from '../Pages/OwnerDashborad/AllHouses/AllHouses';
import AddHouse from '../Pages/OwnerDashborad/AddHouse/AddHouse';
import ManageHouses from '../Pages/OwnerDashborad/ManageHouses/ManageHouses';
import ManageBookings from '../Pages/RenterDashboard/ManageBookings/ManageBookings';
import CurrentBookings from '../Pages/RenterDashboard/CurrentBookings/CurrentBookings';
import UpdateHouses from '../Pages/OwnerDashborad/UpdateHouses/UpdateHouses';



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
        
    },
    {
        path:"/dashboard",
        errorElement:<ErrorPage />,
        element:<Dashboard/>,
        children:[
            {
                path:"allHouses",
                element:<AllHouses></AllHouses>
            },
            {
                path:"newHouses",
                element:<AddHouse></AddHouse>
            },
            {
                path:"manageHouses",
                element:<ManageHouses></ManageHouses>
            },
            {
path:"manageBookings",
element:<ManageBookings />
            },
            {
                path:"currentBookings",
                element:<CurrentBookings />
            },
            {
                path:"updateHouse/:id",
                element:<UpdateHouses></UpdateHouses>
            }
        ]
    }
])

export default router;