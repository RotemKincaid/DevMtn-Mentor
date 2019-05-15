import React from "react";
import TodoList from "./Components/TodoList/TodoList";
import Task from "./Components/Task/Task";
import Form from "./Components/Form/Form";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <TodoList />
        {/* <Task /> */}
      </header>
    </div>
  );
}

export default App;
