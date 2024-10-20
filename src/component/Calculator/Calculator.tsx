import { FC, useState } from "react";
import "../Calculator/calculator.scss";
import { stringCalculator } from "../../utils/stringCalculator";

const Calculator: FC = () => {
  const [numbers, setNumbers] = useState<string>("");
  const [result, setResult] = useState<string>("Please add Numbers!");

  const handleClick = () => {
    try {
      const total = stringCalculator(numbers);
      setResult(total.toString());
    } catch (error) {
      if (error instanceof Error) {
        setResult(error.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <span data-testid="header-text" className="main-text">
          String Calculator Kata
        </span>
        <img
          className="icon"
          alt="refresh-image"
          src="src\assets\Images\fa-solid_history.png"
        />
      </div>
      <div className="input-section">
        <input
          className="input"
          type="text"
          name="numbers"
          value={numbers}
          placeholder="Enter Numbers"
          onChange={(event) => setNumbers(event.target.value)}
          autoFocus
        />
      </div>
      <div className="output-section">
        <div className="output-container">
          <h2>{result}</h2>
        </div>
      </div>
      <div className="footer">
        <button className="button" onClick={handleClick}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
