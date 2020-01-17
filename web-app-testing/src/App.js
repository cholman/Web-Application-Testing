import React, {useState} from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

import './App.css';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [hits, setHits] = useState(0);

  console.log(strikes, balls);
  return (
    <div className="App">
      <header className="App-header">
      <Display balls={balls} strikes={strikes} hits={hits} fouls={fouls}/>
      <Dashboard setBalls={setBalls} 
                  balls={balls} 
                  setStrikes={setStrikes} 
                  strikes={strikes} 
                  setFouls={setFouls}
                  fouls={fouls}
                  hits={hits}
                  setHits={setHits} />
      </header>
    </div>
  );
}

export default App;
