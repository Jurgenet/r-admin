import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>React Admin Panel</Title>
      </Wrapper>
    );
  }
}

export default App;
