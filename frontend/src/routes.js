import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RegisterClient from './pages/RegisterClient';
import Info from './pages/Info';
import Client from './pages/Client';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Info} />
        <Route path="/cadastrar" component={RegisterClient} />
        <Route path="/client/:id" component={Client} />
      </Switch>
    </BrowserRouter>
  );
}
