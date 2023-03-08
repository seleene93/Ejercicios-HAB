import "./App.css";
import { useState } from "react";
import { TaskList } from "./components/TaskList";

function App() {
  const [miArray, setMiArray] = useState([
    {
      id: 1,
      task: "Ir a la compra",
      done: false,
    },
    {
      id: 2,
      task: "Hacer ejercicios de react",
      done: true,
    },
  ]);
  return (
    <main>
      <TaskList miArray={miArray} />
    </main>
  );
}

export default App;
