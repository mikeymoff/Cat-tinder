import React, { Component } from 'react';
import { AuthConsumer } from '../providers/AuthProvider';
import { Menu, MenuItem } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout}, location } = this.props

    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={ () => handleLogout(this.props.history)}
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <MenuItem
              name='login'
              id='login'
              active={location.pathname === '/login'}
            />  
          </Link>
          <Link to='/register'>
            <MenuItem
              name='register'
              id='register'
              active={location.pathname === '/register'}
            />  
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
          { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends Component {
  render() {
    return (
      <AuthConsumer>
        {
          auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);