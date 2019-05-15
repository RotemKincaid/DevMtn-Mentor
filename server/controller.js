const tasks = [];

module.exports = {
  getTasks: (req, res) => {
    res.status(200).send(tasks);
  },

  createTask: (req, res) => {
    const { title, description, completed } = req.body;

    const newTask = { title, description, completed };

    tasks.push(newTask);
    id++;

    res.status(200).send(tasks);
  },

  updateTask: (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.query;
    let index = tasks.findIndex(el => el.id === +id);

    if (index !== 1) {
      tasks[index].title = title || tasks[index].title;
      tasks[index].description = description || tasks[index].description;
      tasks[index].completed = completed || tasks[index].completed;
    } else {
      res.status(404).send("ID not found");
    }
  },
  deleteTask: (req, res) => {
    const { id } = req.params;
    let index = tasks.findIndex(el => el.id === +id);

    if (index !== -1) {
      tasks.splice(index, 1);
      res.status(200).send(tasks);
    } else {
      res.status(404).send("could not find id");
    }
  },
  markComplete: (req, res) => {
    const { id } = req.params;

    const { completed } = req.query;

    if (id !== -1) {
      completed = true;
      res.status(200).send(task);
    } else {
      res.status(500).send("Something went wrong.");
    }
  }
};
