import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Checkout from "./pages/Checkout";
import * as serviceWorker from './serviceWorker';

const routes = (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/checkout" component={Checkout}/>
        </div>
    </Router>
)

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
