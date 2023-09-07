import { useState } from "react";

const App = () => {
  const [currentNum, setCurrentNum] = useState("0");
  const [secondNum, setSecondNum] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [tracker, setTracker] = useState(false);

  const handleClick = (event) => {
    if (tracker) {
      handleDelete();
      setTracker(false);
      return;
    }
    if (
      (currentNum || currentNum === 0) &&
      secondNum &&
      (result || result === 0) &&
      operator
    ) {
      setCurrentNum(result);
      setSecondNum("");
      setResult("");
    }
    if (operator) {
      setSecondNum((prevNum) =>
        prevNum === "0"
          ? event.target.textContent
          : prevNum + event.target.textContent
      );
    } else {
      setCurrentNum((prevNum) =>
        prevNum === "0"
          ? event.target.textContent
          : prevNum + event.target.textContent
      );
    }
  };

  const handleOperator = (event) => {
    if (operator) {
      setOperator(event.target.textContent);
      handleResult(event);
      return;
    }
    if (result) {
      handleDelete();
      return;
    }
    setOperator(event.target.textContent);
  };

  const handleResult = (event) => {
    if (event.target.textContent === "=") {
      setTracker(true);
    }
    switch (operator) {
      case "+":
        result
          ? setResult(result + parseFloat(secondNum))
          : setResult(parseFloat(currentNum) + parseFloat(secondNum));
        break;
      case "-":
        result
          ? setResult(result - parseFloat(secondNum))
          : setResult(parseFloat(currentNum) - parseFloat(secondNum));
        break;
      case "×":
        result
          ? setResult(result * parseFloat(secondNum))
          : setResult(parseFloat(currentNum) * parseFloat(secondNum));
        break;
      case "÷":
        result
          ? setResult(result / parseFloat(secondNum))
          : setResult(parseFloat(currentNum) / parseFloat(secondNum));
        break;
    }
  };

  const handleDelete = () => {
    setCurrentNum("0");
    setSecondNum("");
    setOperator("");
    setResult("");
  };

  const handleSign = () => {
    if (result) {
      setResult(-result);
    } else if (secondNum) {
      setSecondNum(-secondNum);
    } else setCurrentNum(-currentNum);
  };

  const handlePercent = () => {
    if (result) {
      setResult((result / 100).toString());
    } else if (secondNum) {
      setSecondNum((secondNum / 100).toString());
    } else setCurrentNum((currentNum / 100).toString());
  };

  const handleDecimal = () => {
    if (secondNum) {
      !secondNum.includes(".") ? setSecondNum(secondNum + ".") : null;
    } else !currentNum.includes(".") ? setCurrentNum(currentNum + ".") : null;
  };

  return (
    <main>
      <div className="calculator">
        <div className="screen">
          {result || result === 0 ? result : secondNum ? secondNum : currentNum}
        </div>
        <button onClick={handleDelete} className="top">
          AC
        </button>
        <button onClick={handleSign} className="top">
          +⁄-
        </button>
        <button onClick={handlePercent} className="top">
          %
        </button>
        <button onClick={handleOperator} className="operator">
          ÷
        </button>
        <button onClick={handleClick} className="number">
          7
        </button>
        <button onClick={handleClick} className="number">
          8
        </button>
        <button onClick={handleClick} className="number">
          9
        </button>
        <button onClick={handleOperator} className="operator">
          ×
        </button>
        <button onClick={handleClick} className="number">
          4
        </button>
        <button onClick={handleClick} className="number">
          5
        </button>
        <button onClick={handleClick} className="number">
          6
        </button>
        <button onClick={handleOperator} className="operator">
          -
        </button>
        <button onClick={handleClick} className="number">
          1
        </button>
        <button onClick={handleClick} className="number">
          2
        </button>
        <button onClick={handleClick} className="number">
          3
        </button>
        <button onClick={handleOperator} className="operator">
          +
        </button>
        <button onClick={handleClick} className="number zero">
          0
        </button>
        <button onClick={handleDecimal} className="number">
          .
        </button>
        <button onClick={handleResult} className="operator">
          =
        </button>
      </div>
    </main>
  );
};

export default App;
