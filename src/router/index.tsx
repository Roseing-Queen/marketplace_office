import {createBrowserRouter} from 'react-router-dom';
import Layouts from "../layout";
import React from "react";
import Dashboard from "../views/System/dashboard";
import Personal from "../views/System/personal";
import Login from "../views/user/login.tsx";

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
    }
], {});

export default router;
