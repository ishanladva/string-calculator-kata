import { FC } from "react";
import "../Calculator/calculator-sass.scss";

const Calculator: FC = () => {
  return (
    <div className="container">
      <div className="header">
        <span className="main-text">String Calculator Kata</span>
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
          placeholder="Enter Numbers"
          autoFocus
        />
      </div>
      <div className="output-section"></div>
      <div className="footer">
        <button className="button">=</button>
      </div>
    </div>
  );
};

export default Calculator;
