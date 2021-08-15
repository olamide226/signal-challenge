import knexDB from 'knex';



const knex =  knexDB({
        client: 'mysql2',
        connection: {
            host: 'localhost',
            user: 'root',
            password: 'P3rf3ct0u$',
            database: 'test',
            port: 3306
        }
      });

export default knex