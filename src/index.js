import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";


const container = document.getElementById('root')

const root = createRoot(container)
root.render(

        <Router>
                <Provider store={store}>
                        <App />
                </Provider>
        </Router>
);
