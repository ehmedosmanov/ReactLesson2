import { useState } from "react";
import "./index.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    count > 0 ? setCount(count - 1) : null
  };
  return (
    <div className="counter">
      <div className="count-content">
        <div className="buttons">
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
        <span className="count">{count}</span>
      </div>
    </div>
  );
};

export default Counter;
