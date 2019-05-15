import React, { Component } from "react";
import { connect } from "react-redux";
import { setTask } from "../../ducks/store";
import "../Form/Form.scss";
import axios from "axios";
import { Link } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      // description: "",
      isComplete: false
    };
  }

  titleHandler = e => {
    this.setState({
      title: e.target.value
    });
  };

  completeHandler = e => {
    this.setState({
      isComplete: !this.state.isComplete
    });
  };

  createTask = () => {
    const { title, description, isComplete } = this.state;
    const { id } = this.props.task;
    axios
      .post("https://practiceapi.devmountain.com/api/tasks", {
        id: id,
        title: title,
        // desciption: description,
        completed: isComplete
      })
      .then(tasks => {
        this.props.setTask(tasks.data);

        this.setState({
          title: ""
        });
        this.props.getAllTasks();
      });
  };

  render() {
    return (
      <div className="form-main">
        <div className="form-inner">
          <h1>TO-DO:</h1>
          <input
            placeholder="enter new task here..."
            value={this.state.title}
            className="title-input"
            onChange={this.titleHandler}
          />

          <div className="btns">
            {this.state.title ? (
              <button onClick={e => this.createTask(e)} className="add-todo">
                {/* <Link to="/">Add new Todo</Link> */}
              </button>
            ) : (
              <div>Please insert a task title!</div>
            )}
            {/* <button className="cancel-btn">Cancel</button>
            <button onClick={this.deleteTask} className="delete-btn">
              Delete
            </button> */}
          </div>
        </div>
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
)(Form);
