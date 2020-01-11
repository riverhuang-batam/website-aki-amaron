import React from 'react';
import Header from './pages/header/header'
import BodyWeb from './pages/bodyweb/bodyweb'
import './App.css';

function App() {
  return (
    <div>
        <Header/>
        <BodyWeb/>
        <div className="text-center">
          <p style={{fontSize:"15px"}}>copyright ©Term | Web was made by Unknown  </p>
        </div>
    </div>
  );
}

export default App;
