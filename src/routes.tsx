import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import useAutoScreenType from 'hooks/use-auto-screen-type';
import Home from './components/Home'

const Router: React.FC = () => {
  useAutoScreenType();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
