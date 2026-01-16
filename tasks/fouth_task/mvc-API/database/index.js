import knex from 'knex';

/**
* @type {import('knex').Knex}
*/
export const database = knex({
        client: 'sqlite3',
        connection: {
            filename: './database/database.sql',
        },
        useNullAsDefault: true,
    });