import {createBrowserRouter} from 'react-router-dom';
import Layouts from "../layout";
import React from "react";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts/>
    }
], {});

export default router;
