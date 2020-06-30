require('dotenv').config();
require('./lib/utils/connect')();

const mongoose = require('mongoose');
const seed = require('./data-helpers/seed');

seed()
  .then(() => console.log('Databse seeded!'))
  .catch(err => console.error(`Error: ${err}`))
  .finally(() => mongoose.connection.close());
