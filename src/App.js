import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Facilities from './pages/Facilities';
import Allstudents from './pages/Allstudents';
import Adduser from './pages/Adduser';
import Thank from './pages/thank';
import Editstudent from './pages/Editstudent';
function App() {
  return (
    <div className="backgoundimage">
     
      <BrowserRouter>
      <div className='navbar'>
        <ul>
          <li>
          <Link style={{color:'black'}} to="/">Home</Link>
          </li>
          <li>
          <Link style={{color:'black'}} to="/About">About</Link>
          </li>
          <li>
          <Link style={{color:'black'}} to="/Facilities">Facilities</Link>
          </li>
          <li>
          <Link style={{color:'black'}} to="/adduser">Register</Link>
          </li>
         
        </ul>
       
       
       
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/Facilities' component={Facilities} />
          {/* <Route exact path='/allstudents' component={Allstudents} /> */}
          <Route exact path='/adduser' component={Adduser} />
          <Route exact path='/edituser/:id' component={Editstudent} />
          <Route exact path='/thank' component={Thank} />
        </Switch> </BrowserRouter></div>
   
  );
}

export default App;
