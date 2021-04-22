import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './components/Navbar/Contact';
import About from './components/Navbar/About/About';
import Login from './components/Login/Login';
import Users from './components/Navbar/Users';
import User from './components/User/User';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/users' exact component={Users}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/about' component={About}/>
          <Route path='/users/:id'  component={User}/>
          <Login />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
