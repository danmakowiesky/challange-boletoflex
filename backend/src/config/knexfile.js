const { join } = require('path');

require('dotenv').config({
  path: join(__dirname, `../../.env.${process.env.NODE_ENV}`),
});

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  },
  migrations: {
    directory: '../shared/infra/knex/migrations',
  },
};
