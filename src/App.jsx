import { useState } from 'react';
import './component/rickandmorty.scss';
import reactLogo from './assets/react.svg';
import './App.css';
import Rick from './component/RickandMorty';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <Rick />
    </div>
  );
}

export default App;
