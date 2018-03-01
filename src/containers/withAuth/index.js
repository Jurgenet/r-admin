import React from 'react';
import AuthService from '../../services/AuthService';

export default function withAuth(AuthComponent) {
  const Auth = new AuthService();

  return class AuthWrapped extends React.Component {
    constructor() {
      super();

      this.state = {
        user: null,
      };
    }

    componentWillMount() {
      if (!Auth.isLogged()) {
        this._gotoLoginView();
      } else {
        try {
          const profile = Auth.getProfile();
          this.setState({
            user: profile,
          });
        } catch (error) {
          Auth.logout();
          this._gotoLoginView();
        }
      }
    }

    _gotoLoginView = () => {
      this.props.history.replace('/login');
    };

    render() {
      return this.state.user ? <AuthComponent history={this.props.history} user={this.state.user} /> : null;
    }
  };
}
