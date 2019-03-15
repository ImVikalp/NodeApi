const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/node_jwt';

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose;
