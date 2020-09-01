import React from 'react';

import './header.styles.scss';

class Header extends React.Component {
  render(){
    const login = this.props.username ? <li>Signed in as {this.props.username}</li> : <p>Sign In</p>
    return(
      <div className="header">
        <ul className="menu-items">
          <li>true-friends</li>
          <li>Login</li>
          <li>Signup</li>
          <li>About</li>
          {login}
        </ul>
      </div>
    );
  }
}

export default Header;