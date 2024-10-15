import {createBrowserRouter} from 'react-router-dom';
import Layouts from "../layout";
import React from "react";
import Dashboard from "../views/System/dashboard";
import Personal from "../views/System/personal";
import Login from "../views/user/login.tsx";
import NotFound from "../views/error/NotFound.tsx";
import Forbidden from "../views/error/Forbidden.tsx";
import MethodNotAllowed from "../views/error/MethodNotAllowed.tsx";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts/>,
        children: [
            {
                path: "dashboard",
                element: <Dashboard/>
            }, {
                path: "personal",
                element: <Personal/>
            }
        ]
    }, {
        path: '/login',
        element: <Login/>
    },{
        path: '/404',
        element: <NotFound/>
    },{
        path:"/403",
        element:<Forbidden/>
    },{
        path:"/405",
        element:<MethodNotAllowed/>
    }
], {});

export default router;
