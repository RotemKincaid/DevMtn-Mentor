import React, { Component } from "react";
import axios from "axios";
import Task from "../Task/Task";
import { connect } from "react-redux";
import { setTask } from "../../ducks/store";

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    this.getAllTasks();
  }

  getAllTasks = () => {
    axios.get("https://practiceapi.devmountain.com/api/tasks").then(tasks => {
      console.log("RESULT TASKS FROM TODOLIST", tasks.data);
      this.props.setTask(tasks.data);
      this.setState({
        tasks: tasks.data
      });
    });
  };
  render() {
    // const { tasks } = this.state;
    console.log("This dot props from TODOLIST", this.props);

    const mappedTasks = this.state.tasks.map(task => {
      return (
        <div key={task.id}>
          <Task
            title={task.title}
            description={task.description}
            completed={task.completed}
            id={task.id}
            // deleteTask={this.deleteTask}
            // completeTask={this.completeTask}
            // renderEditView={this.renderEditView}
            // editTask={this.editTask}
            // changeEditMode={this.changeEditMode}
          />
        </div>
      );
    });
    return <div>TodoList{mappedTasks}</div>;
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
)(TodoList);
