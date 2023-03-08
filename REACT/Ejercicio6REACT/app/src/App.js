import "./App.css";
import { useState } from "react";
import { TaskList } from "./components/TaskList";
import { NewTask } from "./components/NewTask";

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

  function handleSubmit(event) {
    event.preventDefault();
    const id = miArray.length + 1;
    const object = {
      id: id,
      task: event.target.elements[0].value,
      done: false,
    };
    setMiArray([...miArray, object]);
  }

  return (
    <main>
      <TaskList setMiArray={setMiArray} miArray={miArray} />
      <NewTask handleSubmit={handleSubmit} />
    </main>
  );
}

export default App;
