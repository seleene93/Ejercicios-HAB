import "./App.css";
import { useEffect, useState } from "react";
import { TaskList } from "./components/TaskList";
import { NewTask } from "./components/NewTask";

function App() {
  const [miArray, setMiArray] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
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
    ]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(miArray));
  }, [miArray]);

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
      <section>
        <TaskList setMiArray={setMiArray} miArray={miArray} />
        <NewTask handleSubmit={handleSubmit} />
      </section>
    </main>
  );
}

export default App;
