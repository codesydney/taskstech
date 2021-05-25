import logo from './logo.svg';
import './App.css';
import CustomerSignUp from './components/Forms/CustomerSignUp';
import CustomerLogin from "./components/Forms/CustomerLogIn";
import TradieLogin from './components/Forms/TradieLogin';
import TradieSignUp from "./components/Forms/TradiesSignUp";
import CreateNewCustomer from './components/Forms/CreateNewCustomer';


function App() {
  return (
    <div className="App">
      {/* <TradieLogin /> */}
      {/* <CustomerSignUp /> */}
      {/* <CustomerLogin /> */}
      {/* <TradieSignUp /> */}
      <CreateNewCustomer />
    </div>
  );
}

export default App;
