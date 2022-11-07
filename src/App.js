import './App.css';
import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(10);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [result, setResult] = useState([]);
  const [resultVisible, setResultVisible] = useState(false);

  const getRandomNumbers = () => {
    setResultVisible(false);
    var results = [];
    for (let i = 0; i < count; i++) {
      var number = Math.floor(Math.random() * max) + min;
      results.push(number);
    }
    setResultVisible(true);
    setResult(results);
  }


  return (
    <div className="App">
      <label name="min" htmlFor="min">Min</label>
      <input id="min" type="text" name="min" value={min} onChange={e => setMin(e.target.value)} />
      <p><small>default is 1</small></p>
      <label name="max" htmlFor="max">Max</label>
      <input id="max" type="text" name="max" value={max} onChange={e => setMax(e.target.value)} />
      <p><small>default is 100</small></p>
      <label name="count" htmlFor="count">Count</label>
      <input id="count" type="text" name="count" value={count} onChange={e => setCount(e.target.value)} />
      <p><small>default is 10</small></p>

      <button onClick={getRandomNumbers}>Generate</button>
      <p>
        <strong>{resultVisible && result.join(", ")}</strong>
      </p>
    </div>
  );
}

export default App;
