const Task = require('./model');

const deleteTask = (req, res) => {
  const taskId = req.params.taskId;
  Task.deleteOne({_id: taskId})
    .exec()
    .then((result) =>
      res.status(200).send('Task was deleted')
    )
    .catch((error) => res.status(400).send(`Task wasn't deleted`))
}

module.exports = deleteTask;