const Router = require('express');
const postTask = require('./postTask')
const getTask = require('./getTasks');
const updateTask = require('./updateTask');


const taskRouter = Router();

taskRouter.post('/', postTask);
taskRouter.get('/', getTask);
taskRouter.patch('/:taskId', updateTask);

module.exports = taskRouter;