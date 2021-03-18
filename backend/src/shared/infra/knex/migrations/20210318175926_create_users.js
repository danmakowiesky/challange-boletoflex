
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('phone').notNullable();
    table.string('avatar').notNullable();
    table.string('cpf').notNullable();
    table.string('profession').notNullable();
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
