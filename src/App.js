import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import './App.css'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
