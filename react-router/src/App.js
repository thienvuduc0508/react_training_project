import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Contact from './components/Navbar/Contact';
// import About from './components/Navbar/About/About';
// import Login from './components/Login/Login';
// import Users from './components/Navbar/Users';
// import User from './components/User/User';
import { lazy, Suspense } from 'react';

const Users = lazy(()=> import('./components/Navbar/Users'));
const Contact = lazy(()=> import('./components/Navbar/Contact'));
const About = lazy(()=> import('./components/Navbar/About/About'));
const User = lazy(()=>import('./components/User/User'))
const Login = lazy(()=>import('./components/Login/Login'))
function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/users' exact component={Users}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/about' component={About}/>
          <Route path='/users/:id'  component={User}/>
          <Login />
        </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
