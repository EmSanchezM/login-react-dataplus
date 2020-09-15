import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/login';
import Home from './pages/home';

import { UserContextProvider } from "./context/UserContext";

import './App.css'

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Login} />
          <Route path='/home' component={Home} />
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
}

export default App;
