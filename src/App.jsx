import { useState } from "react";

const App = () => {
  const [currentNum, setCurrentNum] = useState("0");
  const [secondNum, setSecondNum] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    if (result) {
      handleDelete();
      return;
    }
    if (currentNum.length < 8) {
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
    }
  };

  const handleOperator = (event) => {
    if (result) {
      handleDelete();
      return;
    }
    setOperator(event.target.textContent);
  };

  const handleResult = () => {
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
          {result ? result : secondNum ? secondNum : currentNum}
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
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleOperator} className="operator">
          ×
        </button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleOperator} className="operator">
          -
        </button>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleOperator} className="operator">
          +
        </button>
        <button onClick={handleClick} className="zero">
          0
        </button>
        <button onClick={handleDecimal}>.</button>
        <button onClick={handleResult} className="operator">
          =
        </button>
      </div>
    </main>
  );
};

export default App;
