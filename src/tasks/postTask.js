const Task = require('./model');

function postTask(req, res) {
  const newTask = new Task(req.body);
  newTask.save()
    .then(result =>
      res.status(202).send('New task has been created')
    )
    .catch(error =>
    console.log(error)
    )
}

module.exports = postTask;