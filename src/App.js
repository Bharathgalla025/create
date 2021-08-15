import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Allstudents from './pages/Allstudents';
import Adduser from './pages/Adduser';
import Editstudent from './pages/Editstudent';
function App() {
  return (
    <div className="backgoundimage">
     
      <BrowserRouter>
      <div className='navbar'>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/About">About</Link>
          </li>
          <li>
          <Link to="/Allstudents">Allstudents</Link>
          </li>
          <li>
          <Link to="/adduser">Add User</Link>
          </li>
         
        </ul>
       
       
       
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/allstudents' component={Allstudents} />
          <Route exact path='/adduser' component={Adduser} />
          <Route exact path='/edituser/:id' component={Editstudent} />
        </Switch> </BrowserRouter></div>
   
  );
}

export default App;
