import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

class Sidebar extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  defaultSelected() {
    const { pathname } = window.location;
    if (pathname.includes('projects')) {
      return ['2'];
    } else if (pathname === '/dashboard') {
      return ['1'];
    } else if (pathname === '/search') {
      return ['3'];
    } else {
      return ['1'];
    }
  }

  render() {
    const {
      currentUser: { isFetching, auth }
    } = this.props;
    console.log(typeof auth);
    return (
      <Fragment>
        {!isFetching && typeof auth !== 'string' ? (
          <Sider
            collapsible
            collapsedWidth="0"
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            style={{ background: '#fff', minHeight: '100vh ' }}
          >
            <div className="logo" />
            <Menu mode="inline" defaultSelectedKeys={this.defaultSelected()}>
              <Menu.Item key="1">
                <NavLink to="/dashboard">
                  <i className="fas fa-tachometer-alt" />{' '}
                  <span className="nav-text">Dashboard</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/projects">
                  <i className="fas fa-paperclip" />{' '}
                  <span className="nav-text">Projects</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/search">
                  <i className="fas fa-map-marker-alt" />{' '}
                  <span className="nav-text">Property Search</span>
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
        ) : null}
      </Fragment>
    );
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser };
}

export default withRouter(connect(mapStateToProps)(Sidebar));