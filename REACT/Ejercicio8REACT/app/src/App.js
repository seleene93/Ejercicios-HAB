import "./App.css";
import { useCounter } from "./hooks/useCounter";

function App() {
  const { count, increment, decrement } = useCounter();
  return (
    <main>
      <h1>{count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </main>
  );
}

export default App;
