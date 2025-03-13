import React, { useState, useCallback } from "react";

// increment is only recreated if dependencies change.
// Without useCallback, a new function instance is created on every render, 
// causing the <Button /> component to always re-render.


const Button = React.memo(({ handleClick }) => {
  console.log("Button rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Memoizing the function
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button handleClick={increment} />
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..."
      />
    </div>
  );
}
