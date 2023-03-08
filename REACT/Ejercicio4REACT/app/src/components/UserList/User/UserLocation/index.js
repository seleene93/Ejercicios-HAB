export const UserLocation = ({ user }) => {
  return (
    <>
      <p>
        <b>Calle: </b>
        {user.location.street.name}
      </p>
      <p>
        <b>Ciudad: </b> {user.location.city}
      </p>
      <p>
        <b>Estado: </b> {user.location.state}
      </p>
      <p>
        <b>País: </b> {user.location.country}
      </p>
      <p>
        <b>CP: </b> {user.location.postcode}
      </p>
      <p>
        <b>Latitud: </b> {user.location.coordinates.latitude}
      </p>
      <p>
        <b>Longitud: </b> {user.location.coordinates.longitude}
      </p>
      <p>
        <b>Uso horario: </b>
        {user.location.timezone.offset}
      </p>
      <p>
        <b>Zona horaria: </b>
        {user.location.timezone.description}
      </p>
    </>
  );
};
