import { useState, useEffect } from 'react';
import './App.css';
import Content from './Components/Content';
import Orders from './Components/Orders';

import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Orders></Orders>
      <BrowserRouter>
        <Switch>

          <Route path="/:circleId/:authToken" >
            <Content></Content>
          </Route>
        </Switch>
      </BrowserRouter>





    </div>
  );
}

export default App;
