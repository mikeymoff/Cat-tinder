import React, { Component } from 'react';
import { AuthConsumer } from '../providers/AuthProvider';
import { Button, Form, Segment, Header } from 'semantic-ui-react';

class Login extends Component {
  state = { email: '', password: ''}

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state
    this.props.auth.handleLogin({ email, password }, this.props.history)
  }

  render() {
    const { email, password } = this.state
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label='Email'
            autoFocus
            required
            name="email"
            value={email}
            placeholder='email'
            onChange={this.handleChange}
          />
          <Form.Input
            label='Password'
            required
            name="password"
            value={password}
            placeholder='password'
            type='password'
            onChange={this.handleChange}
          />
          <Button type='submit'>Submit</Button>
        </Form>
      </Segment>
    )
  }
}

class ConnectedLogin extends Component { 
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}

export default ConnectedLogin;