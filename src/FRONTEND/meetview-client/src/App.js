import React from 'react';
import './App.css';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';


function App() {
    return (
        <div>
            <BrowserRouter>
                <Route exact path="/" component={Login}/>
                <Route path="/Home" component={Home} />
            </BrowserRouter>
        </div>
    );
}

export default App;
