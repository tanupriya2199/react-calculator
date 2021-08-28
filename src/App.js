import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.value))
  }

  const onBackspace = (e) => {
    setResult(result.slice(0, result.length - 1))
  }

  const calcResult = (e) => {
    try {
      setResult(eval(result).toString())
    } catch {
      setResult("Error")
    }

  }

  return (
    <div className="calculator-box">
      <form>
        <input type="text" value={result}></input>
      </form>
      <div className="keypad">
        <button className="highlight" onClick={() => setResult('')} id="clear">Clear</button>
        <button className="highlight" onClick={onBackspace} id="backspace">C</button>
        <button className="highlight" value="/" onClick={handleClick}>&divide;</button>
        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button className="highlight" value="*" onClick={handleClick}>&times;</button>
        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>
        <button className="highlight" value="-" onClick={handleClick}>&ndash;</button>
        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>
        <button className="highlight" value="+" onClick={handleClick}>+</button>
        <button value="0" onClick={handleClick}>0</button>
        <button value="." onClick={handleClick}>.</button>
        <button className="highlight" id="result" onClick={calcResult}>=</button>
      </div>
    </div>
  );
}

export default App;
