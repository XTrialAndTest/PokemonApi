import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>
        count is {count}
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>click</button>
          <button onClick={() => setCount(0)}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
