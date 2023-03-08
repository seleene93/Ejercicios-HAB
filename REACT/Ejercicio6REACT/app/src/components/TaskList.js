export const TaskList = ({ setMiArray, miArray }) => {
  const onChangeStatus = (index) => {
    const updateList = [...miArray];
    updateList[index].done = !updateList[index].done; // invierte el booleano
    setMiArray(updateList);
  };
  return (
    <ul>
      {miArray.map((elem, index) => (
        <li
          key={elem.id}
          style={{ textDecoration: elem.done ? "line-through" : "none" }} // cuando la propiedad done sea true textDecoration será line-through si no será none
        >
          <input
            type="checkbox"
            checked={elem.done}
            onChange={() => onChangeStatus(index)}
          />
          {elem.task}
        </li>
      ))}
    </ul>
  );
};
