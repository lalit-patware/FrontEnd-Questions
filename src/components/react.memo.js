import React, { useState } from "react";

// React.memo is used to prevent unnecessary re-renders of a component when its props haven't changed.

// The ChildComponent will only re-render if count changes.
// If you type in the input, ChildComponent won't re-render unnecessarily.
const ChildComponent = React.memo(({ count }) => {
  console.log("Child rendered");
  return <p>Child Count: {count}</p>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Parent Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..."
      />
      <ChildComponent count={count} />
    </div>
  );
}
