import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Heading from './component/Heading';
import NewNote from './component/New_note';
import Mes_Notes from './component/Mes_notes';
import Home from './component/Home';

function App() {
  const [tones, setTones] = useState({tone1:"#43766C", tone11:"#F8FAE5", isDark:false, usingClass:"onLightMode"})

  

    return (
    <>
    <Router>
      <Heading onModeLight={setTones} palette={tones}></Heading>
      {"isD :" + tones.isDark}
    
      <section>
        <aside className='board_side'>
          <div className='board'>
            
          </div>
          <div className='catcher'>
            <span>S</span>
            <span>X</span>
          </div>
        </aside>
        <article className='viewer' style={{background:tones.tone22}}>
            <Routes>
              <Route path="/" element={<Home palette={tones} ></Home>} ></Route>
              <Route path="/new/:actionURL" element={<NewNote palette={tones}></NewNote>} ></Route>
              <Route path="/list" element={<Mes_Notes palette={tones}></Mes_Notes>} ></Route>
            </Routes>
        </article>
      </section>
    </Router>
    </>
  );
}

export default App;
