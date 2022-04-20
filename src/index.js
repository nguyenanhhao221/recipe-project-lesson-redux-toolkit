import React from "react";
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from "./app/App";
import store from './app/store';
//import Provider
import { Provider } from "react-redux";
//Render for React 18
const root = createRoot(document.getElementById('root'));

root.render(
    // Wrap Provider and pass store props
    // No need to subscribe the render function because we use Provider and useSelector hook from react-redux to help with re-render
    <Provider store={store}>
        <App />
    </Provider>
)
