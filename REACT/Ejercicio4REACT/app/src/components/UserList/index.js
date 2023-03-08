import { User } from "./User";
import "./style.css";

export const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          <User user={user} />
        </li>
      ))}
    </ul>
  );
};
