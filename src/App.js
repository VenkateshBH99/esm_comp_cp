import { useState, useEffect } from 'react';
import './App.css';
import Content from './Components/Content';
import Orders from './Components/Orders';



function App() {
  const [circleId, setcircleId] = useState("")
  useEffect(() => {
    setcircleId('dd2f1bd7-d8e7-48b6-8a0a-73ec40731146')
  })
  return (
    <div className="App">
      <Orders></Orders>

      <Content circleId={'dd2f1bd7-d8e7-48b6-8a0a-73ec40731146'}></Content>


    </div>
  );
}

export default App;
