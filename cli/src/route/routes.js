import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import PrivateRoute from './PrivateRoute'
import Home from './../container/Home';
import Dashbord from './../container/Dashbord';
import Cadastro from './../componets/cadastro';
import Edit from './../componets/edit';


const Routes = () => (
    <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/cadastro" component={Cadastro} />
      <PrivateRoute exact path="/edit/:id" component={Edit} />
      <Route exact path="/" component={Home} />
      <PrivateRoute  path="/dashbord" component={Dashbord} />
      <PrivateRoute  path="/logout" component={Home} />
    </Switch>
  </BrowserRouter>
)
export default Routes;