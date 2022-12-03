import React from 'react';

import './App.css';
import Pallete from "./Components/Pallete/Pallete";
import Canvas from "./Components/Canvas/Canvas";
import Inspector from "./Components/Inspector/Inspector";

function App() {
  return (
    <div className="App">
      <Pallete/>
      <Canvas/>
      <Inspector/>
    </div>
  );
}

export default App;
