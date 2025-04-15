import React, { useState } from 'react'

const Counter = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount((prev) => prev + 1);
    };

    const decrement = () => {
        setCount((prev) => prev - 1);
    };

    const restartCounter = () => {
        setCount(0);
    };

    const switchSigns = () => {
        setCount((prev) => prev * (-1));
    }
  return (
    <div>
      <div>Count: <h3 data-testid="count">{count}</h3></div>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={restartCounter}>Restart</button>
      <button onClick={switchSigns}>Switch</button>
    </div>
  )
}

export default Counter
