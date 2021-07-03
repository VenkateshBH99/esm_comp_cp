import { useState, useEffect } from 'react';
import './App.css';
import Content from './Components/Content';
import Title from './Components/Title';


import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Title></Title>
      <BrowserRouter>
        <Switch>

          <Route path="/:permission/:circleId/:authToken" >

            <Content></Content>
          </Route>
        </Switch>
      </BrowserRouter>





    </div>
  );
}

export default App;
