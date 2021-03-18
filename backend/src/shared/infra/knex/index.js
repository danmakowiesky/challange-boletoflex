const config = require('../../../config/knexfile');

module.exports = {
  knex: require('knex')(config),
};
