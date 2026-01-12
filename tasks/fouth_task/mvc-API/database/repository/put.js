import knex from 'knex';

async function putData(db, data) {
    const database = knex({
        client: 'sqlite3',
        connection: {
            filename: './database/database.sql',
        },
        useNullAsDefault: true,
    });

    await database.schema
    .hasTable(db)
    .then(async (exists) => {
      if (!exists) {
        database.schema.createTable(db, (table) => {
            for (const [key, value] of Object.entries(data[0])) {
                if (key === 'id') {
                    table.increments('id').primary();
                } else if (typeof value == 'number') {
                    table.integer(key);
                } else if (typeof value == 'string') {
                    table.string(key);
                } else if (typeof value == 'text') {
                    table.text(key);
                }
            }
        }).then(() => {
            console.log(`Table '${db}' created`);
        }).catch((err) => {
            console.error(err);
        });

        
      }
    })

    database(db)
    .insert(data)
    .then(() => {
        console.log("Data inserted");
    })
    .catch((err) => {
        console.error(err);
    });
    
}

export default putData;