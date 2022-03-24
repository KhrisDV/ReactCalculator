import { useEffect, useRef, useState } from "react";
import "./App.css";
import History from "./components/History/History.jsx";

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
  function clearHandler(event) {
    setFirstNumber("0");
    setSecondNumber("0");
    setResult("0");
  }
  function memoryHandler() {
    results.current = parseFloat(result.resultado);
  }
  function memory2Handler() {
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
      <br></br>
      <input type="button" value="+" onClick={addHandler}></input>
      <input type="button" value="-" onClick={restHandler}></input>
      <input type="button" value="x" onClick={porHandler}></input>
      <input type="button" value="/" onClick={divHandler}></input>
      <input type="button" value="C" onClick={clearHandler}></input>
      <input type="button" value="M+" onClick={memoryHandler}></input>
      <input type="button" value="MR" onClick={memory2Handler}></input>
      <p>{result.resultado}</p>
      <h2>Historial</h2>
      <History results={resultsHistory} />
    </>
  );
}

export default App;
