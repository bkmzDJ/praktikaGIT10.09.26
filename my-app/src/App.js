import React, { useState } from "react";
import Counter from "./components/Counter/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}> + </button>
      <button onClick={() => setCount(count - 1)}> - </button>

      <Counter />
    </div>
  );
}

export default App;