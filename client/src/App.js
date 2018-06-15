import React, { Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Trip from './components/Trip';


const App = () => (
<Fragment>
  <NavBar/>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Trip" component={Trip}/>
  </Switch>

</Fragment>
);


export default App;
