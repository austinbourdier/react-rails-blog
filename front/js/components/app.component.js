import Navbar from './navbar.component';
/**
 * @fileOverview The App component.
 */

import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    const pathname = window.location.pathname;
    const loginOrRegister = pathname.includes('login') || pathname.includes('register');
    return (
      <div>
        {!loginOrRegister ? <Navbar /> : null }
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

App.propTypes = {

};
