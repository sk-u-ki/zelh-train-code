/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema
    .createTable('users', function (table) {
        table.increments('id').primary();
        table.string('username', 255).notNullable();
        table.string('password', 255).notNullable();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updateAt').defaultTo(knex.fn.now());
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  
}
