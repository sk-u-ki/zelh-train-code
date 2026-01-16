/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema
        .createTable('posts', function (table) {
            table.increments('id').primary();
            table.integer('userId').notNullable();
            table.string('title', 1000).notNullable();
            table.string('body', 5000).notNullable();
            table.timestamp('createdAt').defaultTo(knex.fn.now());
            table.timestamp('updateAt').defaultTo(knex.fn.now());
        });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  
}
