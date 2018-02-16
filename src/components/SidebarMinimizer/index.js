import React from 'react';

class SidebarMinimizer extends React.Component {
  render() {
    return <button className="sidebar-minimizer" type="button" onClick={this.onClickHandler} />;
  }

  onClickHandler = () => {
    this.sidebarMinimize();
    this.brandMinimize();
  };

  sidebarMinimize = () => {
    document.body.classList.toggle('sidebar-minimized');
  };

  brandMinimize = () => {
    document.body.classList.toggle('brand-minimized');
  };
}

export default SidebarMinimizer;
