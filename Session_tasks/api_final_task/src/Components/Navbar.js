import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar m-3 rounded">
        <div className="container">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-white">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white">About</a>
            </li>
          </ul>
          <div className="navbar-brand d-flex ml-auto">
            <i className="fa fa-btc my-auto fa-3x text-white"></i>
            <h1 className="text-white ml-3 my-auto">Monitor</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
