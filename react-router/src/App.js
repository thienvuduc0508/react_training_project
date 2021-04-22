import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Navbar/Home';
import Contact from './components/Navbar/Contact';
import About from './components/Navbar/About';
import Login from './components/Login/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/home' exact component={Home}/>
          <Route path='/contact' exact component={Contact}/>
          <Route path='/about' exact component={About}/>
          <Login />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
