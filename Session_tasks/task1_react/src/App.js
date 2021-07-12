import React, { Component } from "react";
import "./App.css";
import ShowTask from "./ShowTask";

class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(e) {
    if (this.userInput.value !== "") {
      var newTask = {
        taskname: this.userInput.value,
        key: Date.now(),
      };
    }

    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(newTask),
      };
    });
    this.userInput.value = "";
    console.log(this.state.tasks);
    e.preventDefault();
  }

  render() {
    // const todoItem = this.state.todos.map((task) => <ShowTask item={task} />);
    return (
      <div className="container pt-3">
        <div className="card mt-3 ml-auto ">
          <h3 className=" display-5 text-center pt-3  ">TodoList</h3>
          <div className="card-header p-4">
            <form onSubmit={this.addTask}>
              <input
                className="form-control"
                ref={(a) => (this.userInput = a)}
                placeholder="Enter Task"
              ></input>
              <br />
              <button className="btn btn-primary ml-2" type="submit">
                Add Task
              </button>
            </form>
          </div>
          <div className="card-body">
            <ShowTask entries={this.state.tasks} />
          </div>
        </div>
      </div>
    );
  }
}

export default MyApp;
