/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema
            .createTable('comments', function (table) {
                table.increments('id').primary();
                table.integer('postId').notNullable().references('id').inTable('posts').onDelete('CASCADE');
                table.string('name', 1000).notNullable();
                table.string('email', 255).notNullable();
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
