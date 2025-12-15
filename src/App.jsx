import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [display, setDisplay] = useState("");

  const allowedKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    "%",
    ".",
  ];

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const deleteLast = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      setDisplay((prev) => eval(prev).toString());
    } catch {
      setDisplay("Error");
    }
  };

  // 🔥 KEYBOARD SUPPORT
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (allowedKeys.includes(e.key)) {
        setDisplay((prev) => prev + e.key);
      } else if (e.key === "Enter") {
        e.preventDefault();
        calculateResult();
      } else if (e.key === "Backspace") {
        deleteLast();
      } else if (e.key === "Escape") {
        clearDisplay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // cleanup (VERY IMPORTANT)
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="calculator-container">
      <h1 id="developer_name">Manish Kiran</h1>
      <div className="calculator">
        <div className="display">{display || "0"}</div>

        <div className="buttons">
          <button className="btn control" onClick={clearDisplay}>
            C
          </button>
          <button className="btn control" onClick={deleteLast}>
            DEL
          </button>
          <button className="btn operator" onClick={() => handleClick("%")}>
            %
          </button>
          <button className="btn operator" onClick={() => handleClick("/")}>
            ÷
          </button>

          <button className="btn" onClick={() => handleClick("7")}>
            7
          </button>
          <button className="btn" onClick={() => handleClick("8")}>
            8
          </button>
          <button className="btn" onClick={() => handleClick("9")}>
            9
          </button>
          <button className="btn operator" onClick={() => handleClick("*")}>
            ×
          </button>

          <button className="btn" onClick={() => handleClick("4")}>
            4
          </button>
          <button className="btn" onClick={() => handleClick("5")}>
            5
          </button>
          <button className="btn" onClick={() => handleClick("6")}>
            6
          </button>
          <button className="btn operator" onClick={() => handleClick("-")}>
            −
          </button>

          <button className="btn" onClick={() => handleClick("1")}>
            1
          </button>
          <button className="btn" onClick={() => handleClick("2")}>
            2
          </button>
          <button className="btn" onClick={() => handleClick("3")}>
            3
          </button>
          <button className="btn operator" onClick={() => handleClick("+")}>
            +
          </button>

          <button className="btn zero" onClick={() => handleClick("0")}>
            0
          </button>
          <button className="btn" onClick={() => handleClick(".")}>
            .
          </button>
          <button className="btn equals" onClick={calculateResult}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
