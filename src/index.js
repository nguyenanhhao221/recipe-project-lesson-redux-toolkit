import React from "react";
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from "./app/App";
import { store } from './app/store';
//import Provider
import { Provider } from "react-redux";
//Render for React 18
const root = createRoot(document.getElementById('root'));
const render = () => {
    root.render(
        //Wrap Provider and pass store props
        <Provider store={store}>
            <App
                state={store.getState()}
                dispatch={store.dispatch}
            />
        </Provider>

    )
}

render();
store.subscribe(render);
