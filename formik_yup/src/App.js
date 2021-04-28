import { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const Contact = lazy(()=> import('./components/Navbar/Contact'));
const About = lazy(()=> import('./components/Navbar/About/About'));
const Register = lazy(()=> import('./components/Register/Register'))
function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
        <Layout>
          <Route path='/contact' component={Contact}/>
          <Route path='/about' component={About}/>
          <Route path='/register' component={Register}/>
        </Layout>
        </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
