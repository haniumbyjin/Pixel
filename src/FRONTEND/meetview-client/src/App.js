import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';


function App() {
  return (
      <div>
        <Route exact path="/" component={Login} />
        {/*<Route path="/Home" component={Home} />*/}
      </div>
  );
}

export default App;
