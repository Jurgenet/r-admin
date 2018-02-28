import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';

import { AppWrapper, AppBody } from './styled';

import routes from '../../config/routes';
import navigation from '../../config/navigation';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Breadcrumb from '../../components/Breadcrumb/';
// import Aside from '../../components/Aside/';
// import Footer from '../../components/Footer/';

import Dashboard from '../../containers/Dashboard/';
import Tableset from '../../containers/Tableset/';

class App extends React.Component {
  render() {
    return (
      <AppWrapper className={'app'}>
        <Header />

        <AppBody className={'app-body'}>
          <Sidebar navigation={navigation} {...this.props} />
          <main className={'main'}>
            <Breadcrumb routes={routes} />
            <Container fluid>
              <Switch>
                <Route exact path="/dashboard" name="Dashboard" component={Dashboard} />
                <Route exact path="/tableset" name="Tableset" component={Tableset} />

                {/* <Redirect from="/" to="/dashboard" /> */}
              </Switch>
            </Container>
          </main>
        </AppBody>
        {/*<Footer />*/}
      </AppWrapper>
    );
  }
}

export default App;
