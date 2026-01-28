import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </div>

      <div>{count}</div>

      <div>
        <button onClick={() => setCount((c) => c - 1)}>Increment</button>
      </div>
    </>
  );
};
