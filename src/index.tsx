import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


import Navigation from "./components/Navigation";
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Router>
        <Navigation/>
        <Routes>
            <Route path="/" element={<App/>}/>
        </Routes>
    </Router>,

    document.getElementById("root"),
);

reportWebVitals();
