import React, { Component } from 'react';

import routes from '../../config/routes';

import SidebarHeader from './../SidebarHeader';
import SidebarFooter from './../SidebarFooter';
import SidebarNavigation from './../SidebarNavigation';
import SidebarForm from './../SidebarForm';
import SidebarMinimizer from './../SidebarMinimizer';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.activeRoute = this.activeRoute.bind(this);
    this.hideMobile = this.hideMobile.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    debugger;
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName, props) {
    // return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
    return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  hideMobile() {
    if (document.body.classList.contains('sidebar-mobile-show')) {
      document.body.classList.toggle('sidebar-mobile-show');
    }
  }

  // todo Sidebar nav secondLevel
  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    // sidebar-nav root
    return (
      <div className="sidebar">
        <SidebarHeader />
        <SidebarForm />
        <SidebarNavigation routes={routes} {...this.props} />
        <SidebarFooter />
        <SidebarMinimizer />
      </div>
    );
  }
}

export default Sidebar;
