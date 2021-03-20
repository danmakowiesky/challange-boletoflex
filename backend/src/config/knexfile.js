const { join } = require('path');

console.log(join(__dirname));
module.exports = {
  client: 'pg',
  connection: {
    host: '0.0.0.0',
    user: 'postgres',
    password: 'boletoflex',
    database: 'challenge-boletoflex',
  },
  migrations: {
    directory: '../shared/infra/knex/migrations',
  },
};
