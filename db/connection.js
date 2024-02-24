const mongoose = require('mongoose');

let mongoDB = process.env.MONGODB_URI || 'mongodb://'

////EXAMPLE////
// Make sure to create .env file and use an environment variable

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
