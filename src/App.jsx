import { useState } from "react";

const App = () => {
  const [firstNum, setFirstNum] = useState("0");
  const [secondNum, setSecondNum] = useState("0");
  const [operator, setOperator] = useState("");

  const handleClick = (event) => {
    if (firstNum.length < 8) {
      setFirstNum((prevfirstNum) =>
        prevfirstNum === "0"
          ? event.target.textContent
          : prevfirstNum + event.target.textContent
      );
    }
  };

  const handleOperator = (event) => {
    setOperator(event.target.textContent);
    setSecondNum(firstNum);
    setFirstNum("0");
  };

  const handleResult = () => {
    switch (operator) {
      case "+":
        setFirstNum(parseFloat(secondNum) + parseFloat(firstNum));
        break;
      case "-":
        setFirstNum(parseFloat(secondNum) - parseFloat(firstNum));
        break;
      case "×":
        setFirstNum(parseFloat(secondNum) * parseFloat(firstNum));
        break;
      case "÷":
        setFirstNum(parseFloat(secondNum) / parseFloat(firstNum));
        break;
    }
  };

  const handleDelete = () => {
    setFirstNum(`0`);
  };

  const handleSign = () => {
    setFirstNum(-firstNum);
  };

  const handlePercent = () => {
    setFirstNum(firstNum / 100);
  };

  const handleDecimal = () => {
    if (!firstNum.includes(".")) {
      setFirstNum(firstNum + ".");
    }
  };

  return (
    <main>
      <div className="calculator">
        <div className="screen">{firstNum}</div>
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
