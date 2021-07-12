import React, { Component } from "react";
import "./App.css";
import Welcome from "./Welcome";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      checked: false,
    };
    this.verifyDetails = this.verifyDetails.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setUsername = this.setUsername.bind(this);
  }

  setUsername(e) {
    this.setState({ username: e.target.value });
  }

  setPassword(e) {
    this.setState({ password: e.target.value });
  }

  verifyDetails() {
    if (this.state.username === "urja07" && this.state.password === "12345") {
      this.setState({ checked: true });
    } else {
      alert("wrong Username or password!!");
    }
  }

  render() {
    let login = null;
    if (this.state.checked) {
      login = <Welcome username={this.state.username} />;
    } else {
      login = (
        <div className=" card m-5 mx-auto">
          <div className="card ">
            <div className="card-header">
              <h1 className="card-title text-center">Login </h1>
            </div>
            <div className="card-body">
              <form onSubmit={this.verifyDetails}>
                <div className="form-group">
                  <input
                    onChange={this.setUsername}
                    className="form-control"
                    placeholder="username"
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    onChange={this.setPassword}
                    className="form-control"
                    placeholder="password"
                  ></input>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    }
    return <div>{login}</div>;
  }
}

export default App;
