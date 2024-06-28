import React, { useState, useEffect } from "react";
import useFirstRender from "./useFirstRender";

const Child = () => {
  const [count, setCount] = useState(0);

  const isFirstRender = useFirstRender(2);

  useEffect(() => {
    console.log("Child: Component has been mounted");

    return () => {
      console.log("Child: Component is about to be unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate");

    if (isFirstRender) {
      return;
    }
    console.log("Child: Component has been updated");
    console.log(`Child: Count is now ${count}`);
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  console.log("Child: Render", isFirstRender);

  return (
    <div>
      <h2>Child Count: {count}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default Child;
