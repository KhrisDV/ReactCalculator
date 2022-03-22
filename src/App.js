import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState(0);

  function changeFirstNumberHandler(event) {
    setFirstNumber(event.target.value);
  }

  const [secondNumber, setSecondNumber] = useState(0);

  function changeSecondNumberHandler(event) {
    setSecondNumber(event.target.value);
  }

  const [result, setResult] = useState(0);

  function addHandler(event) {
    setResult(parseFloat(firstNumber) + parseFloat(secondNumber));
  }

  function restHandler(event) {
    setResult(parseFloat(firstNumber) - parseFloat(secondNumber));
  }

  function porHandler(event) {
    setResult(parseFloat(firstNumber) * parseFloat(secondNumber));
  }

  function divHandler(event) {
    setResult(parseFloat(firstNumber) / parseFloat(secondNumber));
  }

  function clearHandler(event) {
    setResult(null);
    setSecondNumber("");
    setFirstNumber("");
  }

  useEffect(() => {
    console.log("firstNumber state:", firstNumber);
    console.log("secondNumber state:", secondNumber);
    console.log("result state:", result);
  });

  return (
    <>
      <h1>Calculadora</h1>
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
    </>
  );
}

export default App;
