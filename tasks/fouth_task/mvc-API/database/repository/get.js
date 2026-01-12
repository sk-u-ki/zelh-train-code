import knex from 'knex';

const getData = (db = null,id="*") => {
    const database = knex({
        client: 'sqlite3',
        connection: {
            filename: './database/database.sql',
        },
        useNullAsDefault: true,
    });
    return database(db).select().where(id==="*" ? {} : {id: id});
}
export default getData;