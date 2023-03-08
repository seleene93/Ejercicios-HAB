import "./App.css";
import { UserList } from "./components/UserList";
import users from "./users.json";

function App() {
  return (
    <main>
      <UserList users={users} />
    </main>
  );
}

export default App;
