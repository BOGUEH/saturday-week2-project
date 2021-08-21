
import './App.css';
import {  Switch,  Route,  Link} from "react-router-dom";
import ContactUs from './Components/ContactUs';

import About from './Components/About';
import Service from './Components/Service';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

function App() {
  
  return (
    <div className="App">

  
    <NavBar />
    <Home />
      

   
    </div>
  );
}

export default App;
