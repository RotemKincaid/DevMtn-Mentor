import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setTask } from "../../ducks/store";

class Task extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      completed: false,
      isEditing: false
    };
  }

  render() {
    console.log(this.props.task);

    const { id, title, description, completed } = this.props.task;
    return (
      <div className="task-main" key={id}>
        Task
        <div>{title}</div>
        <button onClick={() => this.props.deleteTask(id)}>X</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  setTask: setTask
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
