import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import {Provider} from "react-redux";
import store from "./redux";
import React from "react";
import {RouterProvider} from "react-router";
import router from "./router";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>,
)
