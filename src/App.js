import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState(0);

  function changeFirstNumberHandler(event) {
    setFirstNumber(parseFloat(event.target.value));
  }

  const [secondNumber, setSecondNumber] = useState(0);

  function changeSecondNumberHandler(event) {
    setSecondNumber(parseFloat(event.target.value));
  }

  const [result, setResult] = useState(0);

  function addHandler(event) {
    setResult(firstNumber + secondNumber);
  }

  function restHandler(event) {
    setResult(firstNumber - secondNumber);
  }

  function porHandler(event) {
    setResult(firstNumber * secondNumber);
  }

  function divHandler(event) {
    setResult(firstNumber / secondNumber);
  }

  function clearHandler(event) {
    setResult(null);
    setSecondNumber("");
    setFirstNumber("");
  }

  const memory = useRef(null);

  function memoryHandler(event) {
    memory.current = result;
    console.log(memory);
  }

  function memoryrHandler(event) {
    setFirstNumber(memory.current);
  }

  useEffect(() => {
    console.log("firstNumber state:", firstNumber);
    console.log("secondNumber state:", secondNumber);
    console.log("result state:", result);
  });

  return (
    <>
      <h1>Calculator</h1>
      <input
        type="text"
        value={firstNumber}
        onChange={changeFirstNumberHandler}
      />
      <input
        type="text"
        value={secondNumber}
        onChange={changeSecondNumberHandler}
      />
      <p>{result}</p>
      <input type="button" value="+" onClick={addHandler} />
      <input type="button" value="-" onClick={restHandler} />
      <input type="button" value="x" onClick={porHandler} />
      <input type="button" value="/" onClick={divHandler} />
      <input type="button" value="C" onClick={clearHandler} />
      <input type="button" value="M+" onClick={memoryHandler} />
      <input type="button" value="MR" onClick={memoryrHandler} />
    </>
  );
}

export default App;
