import React from 'react';

import AuthService from '../../services/AuthService';

import { Container, Caption, Card, Form, Input, Submit } from './styled';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.Auth = new AuthService();
    this.state = {
      userId: null,
      password: null,
    };
  }

  componentWillMount() {
    if (this.Auth.isLogged()) {
      this.props.history.replace('/');
    }
  }

  render() {
    return (
      <Container className={'login'}>
        <Card className={'login__card'}>
          <Caption className={'login__caption'}>Login</Caption>
          <Form className={'login__form'} onSubmit={this.handleFormSubmit}>
            <Input
              className={'login__user-id'}
              placeholder="User Id goes here..."
              name="userId"
              type="text"
              onChange={this.handleChange}
            />
            <Input
              className={'login__password'}
              placeholder="Password goes here..."
              name="password"
              type="password"
              onChange={this.handleChange}
            />
            <Submit className="login__submit" value="Submit" type="submit" />
          </Form>
        </Card>
      </Container>
    );
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.Auth.login({ userId: this.state.userId, password: this.state.password })
      .then(res => {
        this.props.history.replace('/');
      })
      .catch(err => {
        alert(err);
      });
  };
}

export default Login;
