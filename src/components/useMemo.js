import React, { useState, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

//   the square calculation only runs when count changes, 
// preventing unnecessary computations when typing in the input.

  // Expensive calculation
  const squaredCount = useMemo(() => {
    console.log("Computing square...");
    return count * count;
  }, [count]); // Only recalculates when count changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Squared Count: {squaredCount}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..."
      />
    </div>
  );
}
