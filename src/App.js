import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/login'

import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
