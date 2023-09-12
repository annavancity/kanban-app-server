function home( req, res ) {
  res.status(200).send(`it's a home page of my server`)
}

module.exports = home;