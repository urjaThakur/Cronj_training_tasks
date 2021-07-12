import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div className="card m-5 mx-auto">
        <div className="card-body">
          <h1 className="text-center">Welcome {this.props.username}</h1>
        </div>
      </div>
    );
  }
}

export default Welcome;
