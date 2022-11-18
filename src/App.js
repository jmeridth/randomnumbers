import './App.css';
import React, { useState } from 'react';


function App() {
  const defaults = { "min": 1, "max": 100, "count": 10 };
  const [count, setCount] = useState(defaults["count"]);
  const [min, setMin] = useState(defaults["min"]);
  const [max, setMax] = useState(defaults["max"]);
  const [result, setResult] = useState([]);
  const [resultVisible, setResultVisible] = useState(false);

  const validateSettings = () => {
    var valid = true;
    setResults(false, []);
    if (min > max) {
      setResults(true, ["Min cannot be greater than Max"]);
      valid = false;
    }
    return valid;
  }
  const getRandomNumbers = () => {
    var valid = validateSettings();
    if (valid) {
      var results = [];
      for (let i = 0; i < count; i++) {
        var number = Math.floor(Math.random() * (max - min)) + min;
        results.push(number);
      }
      setResults(true, results);
    }
  }

  const setResults = (visible, results) => {
    setResultVisible(visible);
    setResult(results);
  }

  const handleCountChange = (event, fieldName, setFunc) => {
    setResults(false, []);
    if (event.target.value > 0) {
      setFunc(parseInt(event.target.value));
    } else {
      setFunc(defaults[fieldName]);
    }
  }


  return (
    <div className="App">
      <div>
        <strong>{resultVisible && result.join(", ")}</strong>
      </div>
      <div>
        <label name="min" htmlFor="min">Min</label>
      </div>
      <div>
        <input id="min" type="text" name="min" value={min}
          onChange={e => handleCountChange(e, "min", setMin)} />
      </div>

      <div>
        <label name="max" htmlFor="max">Max</label>
      </div>
      <div>
        <input id="max" type="text" name="max" value={max}
          onChange={e => handleCountChange(e, "max", setMax)} />
      </div>

      <div>
        <label name="count" htmlFor="count">Count</label>
      </div>
      <div>
        <input id="count" type="text" name="count" value={count}
          onChange={e => handleCountChange(e, "count", setCount)} />
      </div>

      <div>
        <button onClick={getRandomNumbers}>Generate</button>
      </div>
    </div>
  );
}

export default App;
