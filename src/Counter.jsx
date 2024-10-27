import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div
      style={{
        border: "2px solid orange",
        marginBottom: "30px",
        paddingBottom: "30px",
        borderRadius: "15px",
      }}
    >
      <h3>Counter: {count}</h3>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px'}}>
        <button onClick={handleAdd}>Increase</button>
        <button onClick={handleReduce}>Decrease</button>
      </div>
    </div>
  );
}
