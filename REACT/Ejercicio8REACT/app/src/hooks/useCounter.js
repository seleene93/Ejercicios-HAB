import { useState, useEffect } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0); // establecemos el valor inicial a 0

  useEffect(() => {
    document.title = `El contador tiene un valor de ${count}`;
  }, [count]);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(Math.max(count - 1, 0)); // aseguramos que el valor del contador nunca sea inferior a 0
  }

  return { count, increment, decrement };
};
