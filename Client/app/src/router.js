import React from "react";
import App from './App.js'
import Map from './App.js'
import RequestSuppliesModal from './Components/RequestSuppliesFormModal/RequestSuppliesFormModal'
import RequestSuppliesForm from './Components/RequestSuppliesForm/RequestSuppliesForm'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const routes = [
    {
      path: "/",
      component: Map
    },
    /*
    {
      path: "/requestSupplies",
      component: requestSuppliesModal
    }*/
  ];


  export default function AppRouter() {
    return (
      <Router>
        <div>
          <Switch>
          {routes.map((route, i) => (
            <Route path={route.path}>
                {route.component}
            </Route>
          ))}
            
          </Switch>
        </div>
      </Router>
    );
  }