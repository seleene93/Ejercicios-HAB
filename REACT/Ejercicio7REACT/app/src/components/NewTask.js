export const NewTask = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" maxLength={100}></input>
      <button type="submit">Añadir tarea</button>
    </form>
  );
};
