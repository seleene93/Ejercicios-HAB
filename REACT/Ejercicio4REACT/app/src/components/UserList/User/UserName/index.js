export const UserName = ({ user }) => {
  return (
    <>
      <p>
        <b>Título: </b> {user.name.title}
      </p>
      <p>
        <b>Nombre: </b> {user.name.first}
      </p>
      <p>
        <b>Apellido: </b> {user.name.last}
      </p>
    </>
  );
};
