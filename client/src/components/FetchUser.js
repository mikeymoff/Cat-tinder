import React, { Component } from 'react';
import axios from 'axios';
import { AuthConsumer } from '../providers/AuthProvider';

class FetchUser extends Component {
  state = { loaded: false }

  componentDidMount() {
    const { auth: { authenticated, setUser }} = this.props
    if (authenticated) {
      this.loaded()
    } else {
      if (this.checkLocalToken()) {
        axios.get('/api/auth/validate_token')
          .then( res => {
            setUser(res.data.data)
            this.loaded()
          })
          .catch( res => {
            this.loaded()
          })
      } else {
        this.loaded()
      }
    }
  }

  loaded = () => this.setState({ loaded: true })

  checkLocalToken = () => {
    const token = localStorage.getItem('access-token')
    return token 
  }

  render() {
    return this.state.loaded ? this.props.children : null;
  }
}

const ConnectFetchUser = (props) => (
  <AuthConsumer>
    { 
      auth =>
      <FetchUser {...props} auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectFetchUser;