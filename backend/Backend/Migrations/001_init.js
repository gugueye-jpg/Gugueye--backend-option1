exports.up = function (knex) {
  return knex.schema.createTable('found_reports', function (t) {
    t.increments('id').primary();
    t.jsonb('data');
    t.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('found_reports');
};
