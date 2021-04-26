import React, { lazy, Suspense } from 'react'
import Layout from './components/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import Spinner from './components/Spinner/Spinner'
const CheckOut = lazy(()=>import('./containers/Checkout/Checkout'));
const Burgers = lazy(()=>import('./containers/Burgers'))
function App() {

  return (
    <>
    <Layout>
    <Suspense fallback={<Spinner />}>
    <Switch>
      <Route path='/checkout' component={CheckOut} />
      <Route path='/' exact component={Burgers} />
    </Switch>
    </Suspense>
    </Layout>
    </>
  );
}

export default App;
