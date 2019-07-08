import React, { Component } from 'react';
import { AuthConsumer } from '../providers/AuthProvider';
import { Button, Form, Segment, Header } from 'semantic-ui-react';

class Register extends Component {
  state = { email: '', password: '', passwordConfirmation: ''}

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state
    const { auth: { handleRegister }, history } = this.props

    if ( password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation}, history)
    else
      alert('Password Do Not Match!!!')
  }

  render() {
    const { email, password, passwordConfirmation } = this.state
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Register</Header>
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
          <Form.Input
            label='Password Confirmation'
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            placeholder='password confirmation'
            type='password'
            onChange={this.handleChange}
          />
          <Button type='submit'>Submit</Button>
        </Form>
      </Segment>
    )
  }
}

class ConnectedRegister extends Component { 
  render() {
    return (
      <AuthConsumer>
        { auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}

export default ConnectedRegister;