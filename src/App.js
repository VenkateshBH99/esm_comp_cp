import { useState, useEffect } from 'react';
import './App.css';
import Content from './Components/Content';
import Orders from './Components/Orders';



function App() {

  return (
    <div className="App">
      <Orders></Orders>

      <Content ></Content>


    </div>
  );
}

export default App;
