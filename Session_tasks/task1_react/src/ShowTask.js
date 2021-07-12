import React from "react";

class ShowTask extends React.Component {
  render() {
    var taskList = this.props.entries;
    return (
      <ul>
        {taskList.map((task) => (
          <li
            style={{
              marginBottom: "0.2rem",
            }}
            key={task.key}
          >
            {task.taskname}
          </li>
        ))}
      </ul>
    );
  }
}

export default ShowTask;
