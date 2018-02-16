import React from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, Nav, NavItem, NavLink as RsNavLink } from 'reactstrap';
import classNames from 'classnames';

class SidebarNavigation extends React.Component {
  render() {
    const props = this.props;

    // badge addon to NavItem
    const badge = badge => {
      if (badge) {
        const classes = classNames(badge.class);
        return (
          <Badge className={classes} color={badge.variant}>
            {badge.text}
          </Badge>
        );
      }
    };

    // simple wrapper for nav-title item
    const wrapper = item => {
      return item.wrapper && item.wrapper.element
        ? React.createElement(item.wrapper.element, item.wrapper.attributes, item.name)
        : item.name;
    };

    // nav list section title
    const title = (title, key) => {
      const classes = classNames('nav-title', title.class);
      return (
        <li key={key} className={classes}>
          {wrapper(title)}{' '}
        </li>
      );
    };
    const isExternal = url => {
      const link = url ? url.substring(0, 4) : '';
      return link === 'http';
    };
    // nav list divider
    const divider = (divider, key) => {
      const classes = classNames('divider', divider.class);
      return <li key={key} className={classes} />;
    };
    // nav label with nav link
    const navLabel = (item, key) => {
      const classes = {
        item: classNames('hidden-cn', item.class),
        link: classNames('nav-label', item.class ? item.class : ''),
        icon: classNames(
          !item.icon ? 'fa fa-circle' : item.icon,
          item.label.variant ? `text-${item.label.variant}` : '',
          item.label.class ? item.label.class : ''
        ),
      };
      return navLink(item, key, classes);
    };
    // nav item with nav link
    const navItem = (item, key) => {
      const classes = {
        item: classNames(item.class),
        link: classNames('nav-link', item.variant ? `nav-link-${item.variant}` : ''),
        icon: classNames(item.icon),
      };
      return navLink(item, key, classes);
    };
    // nav link
    const navLink = (item, key, classes) => {
      const url = item.url ? item.url : '';
      return (
        <NavItem key={key} className={classes.item}>
          {isExternal(url) ? (
            <RsNavLink href={url} className={classes.link} active>
              <i className={classes.icon} />
              {item.name}
              {badge(item.badge)}
            </RsNavLink>
          ) : (
            <NavLink to={url} className={classes.link} activeClassName="active" onClick={this.hideMobile}>
              <i className={classes.icon} />
              {item.name}
              {badge(item.badge)}
            </NavLink>
          )}
        </NavItem>
      );
    };
    // nav dropdown
    const navDropdown = (item, key) => {
      return (
        <li key={key} className={this.activeRoute(item.url, props)}>
          <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick}>
            <i className={item.icon} />
            {item.name}
          </a>
          <ul className="nav-dropdown-items">{navList(item.children)}</ul>
        </li>
      );
    };
    // nav type
    const navType = (item, idx) => {
      return item.title
        ? title(item, idx)
        : item.divider
          ? divider(item, idx)
          : item.label ? navLabel(item, idx) : item.children ? navDropdown(item, idx) : navItem(item, idx);
    };
    // nav list
    const navList = items => {
      return items.map((item, index) => navType(item, index));
    };

    return (
      <nav className="sidebar-nav">
        <Nav>{navList(this.props.routes.items)}</Nav>
      </nav>
    );
  }
}

export default SidebarNavigation;
