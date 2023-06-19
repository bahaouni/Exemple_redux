import './App.css';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  const Login = () => {
    dispatch({
      type: "LOGIN"
    })
  }
  const Logout = () => {
    dispatch({
      type: "LOGOUT"
    })
  }

  return (
    <div className="App">
      <Navbar />
      <h1>Login</h1>
      <button className='btn btn-primary' onClick={Login} >Login</button>
      <button className='btn btn-primary' onClick={Logout}>Logout</button>
    </div>
  );
}

export default App;
