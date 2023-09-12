const home = require('../home/home')
const taskRouter = require('../tasks/taskRouter');
function routes(app) {
  app.use('/tasks', taskRouter)
  app.use( '/', home )
}

module.exports = routes;