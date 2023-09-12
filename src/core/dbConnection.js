const mongoose = require('mongoose');

function dbConnect() {
   mongoose.connect('mongodb+srv://annadesigners:r0EFpPZzE8vY4ALY@cluster0.zpscaah.mongodb.net/', { useNewUrlParser: true })
     .then(() => console.log('Mongo connection is OK'))
     .catch(err => console.log(err))
}

mongoose.set('strictQuery', false);
module.exports = dbConnect