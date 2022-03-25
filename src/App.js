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
      <header>
        <h1>CALCULADORA</h1>
      </header>
      <div className="container">
        <input
          className="casilla-primera"
          type="text"
          value={firstNumber}
          onChange={changeFirstNumberHandler}
        />
        <input
          className="casilla-segunda"
          type="text"
          value={secondNumber}
          onChange={changeSecondNumberHandler}
        />
        <input
          className="boton-suma"
          type="button"
          value="+"
          onClick={addHandler}
        ></input>
        <input
          className="boton-resta"
          type="button"
          value="-"
          onClick={restHandler}
        ></input>
        <input
          className="boton-mult"
          type="button"
          value="x"
          onClick={porHandler}
        ></input>
        <input
          className="boton-div"
          type="button"
          value="/"
          onClick={divHandler}
        ></input>
        <input
          className="boton-c"
          type="button"
          value="C"
          onClick={clearHandler}
        ></input>
        <input
          className="boton-m"
          type="button"
          value="M+"
          onClick={memoryHandler}
        ></input>
        <input
          className="boton-mr"
          type="button"
          value="MR"
          onClick={memory2Handler}
        ></input>
      </div>
      <div className="result">
        <p>{result.resultado}</p>
      </div>
      <div className="historial">
        <h2>Historial</h2>
        <History results={resultsHistory} />
      </div>
    </>
  );
}

export default App;
