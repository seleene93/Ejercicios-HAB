export const TaskList = ({ miArray }) => {
  return (
    <ul>
      {miArray.map((elem, index) => (
        <>
          <li key={index}>{elem.id}</li>

          <li key={index}>
            {elem.done === true ? <del>{elem.task}</del> : <li>{elem.task}</li>}
          </li>
        </>
      ))}
    </ul>
  );
};
