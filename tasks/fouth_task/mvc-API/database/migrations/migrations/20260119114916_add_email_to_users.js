/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    return knex.schema.table('users', (table) => {
        table.string('email', 255).nullable();
        table.unique('email');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.table('users', (table) => {
    table.dropUnique('email');
    table.dropColumn('email');
  });
};
