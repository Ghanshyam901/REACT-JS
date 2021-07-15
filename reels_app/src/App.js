import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <>
    <AuthProvider>
  <Signup/>
</AuthProvider>
</>
  );
}

export default App;
