import knex from 'knex';


export async function connect() {

    return knex({
        client: 'mysql2',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'signal',
            port: 3306
        }
      });

}