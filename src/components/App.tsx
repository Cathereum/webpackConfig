import { useState } from "react";
import "./App.scss";

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      App content {count}
      <button onClick={increment}>plus</button>
    </div>
  );
};
