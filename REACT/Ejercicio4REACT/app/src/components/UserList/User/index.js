import { UserLocation } from "./UserLocation";
import { UserName } from "./UserName";
import { UserPicture } from "./UserPicture";

export const User = ({ user }) => {
  console.log(user);
  return (
    <>
      <UserName user={user} />
      <UserPicture user={user} />
      <UserLocation user={user} />
      {user.dob.age < 18 && (
        <p className="menorEdad">
          <img src="/img/594706-removebg-preview.png" alt="logo" />
        </p>
      )}
    </>
  );
};
