import axios from 'axios';
import { create as createApi } from 'apisauce';
import jwtDecode from 'jwt-decode';

import { authDomain } from '../config/default';

export default class AuthService {
  constructor() {
    this._tokenIdKey = 'token_id';

    this.authApi = createApi({
      baseURL: authDomain,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  login = async params => {
    let response;

    try {
      response = await this.authApi.post('/auth', {
        userId: params.userId,
        password: params.password,
      });
    } catch (error) {
      console.log(error);
    }

    if (response.ok) {
      if (response.data.success) {
        this.setToken(response.data.token);
        return Promise.resolve(response.data);
      } else {
        console.log();
        Promise.reject(response.data.message);
      }
    } else {
      Promise.reject();
    }
  };

  logout = () => {
    localStorage.removeItem(this._tokenIdKey);
  };

  getProfile = () => {
    return jwtDecode(this.getToken());
  };

  // predicates
  isLogged = () => {
    const token = this.getToken();

    return !!token && !this.isTokenExpired(token);
  };

  isTokenExpired = token => {
    try {
      const decoded = jwtDecode(token);

      return decoded.expiresIn < Date.now() / 1000;
    } catch (error) {
      console.log('Checking token exp failed');
      return false;
    }
  };

  // localstorage
  setToken = tokenId => {
    localStorage.setItem(this._tokenIdKey, tokenId);
  };

  getToken = () => {
    return localStorage.getItem(this._tokenIdKey);
  };

  // fetch
  async fetch(domain, params) {
    let response;

    if (this.isLogged()) {
      headers['Authorization'] = 'Bearer ' + this.getToken();
    }

    try {
      response = await axios.post(domain, {
        withCredentials: true,
        credentials: 'same-origin',
        ...params,
      });
    } catch (error) {
      console.log(error);
    }

    if (response) {
      this._checkStatus(response);
    }

    return response.then().then(response => response.json());
  }

  _checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  };
}
