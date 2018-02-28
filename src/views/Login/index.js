import React from 'react';

import { Container, Caption, Card, Form, Input, Submit } from './styled';

class Login extends React.Component {
  render() {
    return (
      <Container className={'login'}>
        <Card className={'login__card'}>
          <Caption className={'login__caption'}>Login</Caption>
          <Form className={'login__form'}>
            <Input
              className={'login__username'}
              placeholder="Username goes here..."
              name="username"
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
}

export default Login;
