import React from 'react';
import './App.css';
import Dummy from './dummy';
import Description from './description';
import { Routes, Route } from 'react-router-dom';
import Tradein from './tradein';
import Idcreationpage from './idcreationpage';

function App() {
  return (
    <div >
      <Routes>
          <Route path="/" element={<Dummy/>}/>
          <Route path="/:name" element={<Description/>}/>
          <Route path="/tradein" element={<Tradein/>}/>
          <Route path="/IDCreationPage" element={<Idcreationpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
