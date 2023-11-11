import { useState } from "react";

function UseStateComponent() {
  // Syntax: const [state, setState] = useState(initialState);
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </>
  );
}

export default UseStateComponent;
