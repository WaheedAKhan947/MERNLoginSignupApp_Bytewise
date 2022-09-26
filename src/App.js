import './App.css';
import Home from './components/home/Home'
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
function App() {
  return (
    <div className="App">
      <Home/>
      <Login/>
      <Signup/>
    </div>
  );
}

export default App;
