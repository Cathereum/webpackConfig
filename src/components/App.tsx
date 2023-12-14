import { useState } from "react";
import styles from "./App.module.scss";

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      content {count}
      <button className={styles.button} onClick={increment}>
        plus
      </button>
    </div>
  );
};
