import { useEffect, useRef, useState } from "react";
import "./App.css";
import History from "./Components/History/History.jsx";

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

  const [resultsHistory, setResultsHistory] = useState([]);
  const results = useRef(0);

  function addHandler() {
    const terminos = {
      primerTermino: firstNumber,
      segundoTermino: secondNumber,
      operador: "+",
      resultado: firstNumber + secondNumber,
    };
    setResult(terminos);
  }
  function restHandler() {
    const terminos = {
      primerTermino: firstNumber,
      segundoTermino: secondNumber,
      operador: "-",
      resultado: firstNumber - secondNumber,
    };
    setResult(terminos);
  }
  function porHandler() {
    const terminos = {
      primerTermino: firstNumber,
      segundoTermino: secondNumber,
      operador: "x",
      resultado: firstNumber * secondNumber,
    };
    setResult(terminos);
  }
  function divHandler() {
    const terminos = {
      primerTermino: firstNumber,
      segundoTermino: secondNumber,
      operador: "/",
      resultado: firstNumber / secondNumber,
    };
    setResult(terminos);
  }
  function clearNumberHandler(event) {
    setFirstNumber("0");
    setSecondNumber("0");
    setResult("0");
  }
  function resultMemory() {
    results.current = parseFloat(result.resultado);
  }
  function restoreResult() {
    setFirstNumber(results.current);
  }
  useEffect(() => {
    if (result.resultado != null) {
      setResultsHistory([...resultsHistory, result]);
    }
  }, [result]);

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

      <button type="sumit" onClick={addHandler}>
        +
      </button>
      <button type="sumit" onClick={restHandler}>
        -
      </button>
      <button type="sumit" onClick={porHandler}>
        x
      </button>
      <button type="sumit" onClick={divHandler}>
        %
      </button>
      <button type="sumit" onClick={clearNumberHandler}>
        C
      </button>
      <button type="sumit" onClick={resultMemory}>
        M+
      </button>
      <button type="sumit" onClick={restoreResult}>
        MR
      </button>
      <p>{result.resultado}</p>
      <h2>Historial</h2>
      <History results={resultsHistory} />
    </>
  );
}

export default App;
