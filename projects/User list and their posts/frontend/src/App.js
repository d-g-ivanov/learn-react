import "./styles.css";

// components
import UserContainer from "./components/UserContainer";

// others
import { UserProvider } from "./store/UserContext";

export default function App() {
  return (
    <UserProvider>
      <UserContainer />
    </UserProvider>
  );
}
