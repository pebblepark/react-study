import { UsersProvider } from './context/userContext';
import Users from './layout/Users';

function App() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default App;
