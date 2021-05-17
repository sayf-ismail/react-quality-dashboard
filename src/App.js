import React from 'react';
import Navigation from "./components/Navigation";
import routes from "./routes"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useStyles } from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.appRoot}>
      <Router>
      <Navigation />
      <div>
        <div className={classes.appBarSpacer}></div>
        <Switch>
          {routes.map((route, index) => {
            return(
              <Route exact key={index} path={route.path}>
                {route.component}
              </Route>
            )
          })}

        </Switch>
      </div>
    </Router>
    </div>
  )
}

export default App
