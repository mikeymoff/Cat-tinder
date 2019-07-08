import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import MyCats from './components/MyCats';

const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute exact path='/my-cats' component={MyCats} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </Fragment>
)

export default App;
