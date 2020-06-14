import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js';
import counterContext from './CounterContext';

function App() {
  let [count, setCount] = useState(1);

  return (
    <counterContext.Provider value={[count, setCount]}>
   <div>
	 <Parent name="Hasnain" />
   </div>
   </counterContext.Provider>
  )
}

export default App;
