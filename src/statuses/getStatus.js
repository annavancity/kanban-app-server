const Status = require('./model');

const getStatus = (req, res) => {
  Status.find()
    .exec()
    .then(result => {
        console.log(result)
        res.status(200).send(result)
    }
    )
    .catch((error) =>
      res.status(400).send(`Status wasn't found`)
    )
}

module.exports = getStatus;