import React, { Fragment } from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Location from './components/Location'




const App = () => (
<Fragment>
  <NavBar/>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/trips/:id" component={Location}/>
  </Switch>

</Fragment>
)


export default App;
