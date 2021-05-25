import logo from './logo.svg';
import './App.css';
import CustomerSignUp from './components/Forms/CustomerSignUp';
import CustomerLogin from "./components/Forms/CustomerLogIn";
import TradieLogin from './components/Forms/TradieLogIn';
import TradieSignUp from "./components/Forms/TradiesSignUp";


function App() {
  return (
    <div className="App">
      {/* <TradieLogin /> */}
      {/* <CustomerSignUp /> */}
      {/* <CustomerLogin /> */}
      <TradieSignUp />
    </div>
  );
}

export default App;
