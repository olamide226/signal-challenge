import knexDB from 'knex';



const knex =  knexDB({
        client: 'mysql2',
        connection: {
            host: 'localhost',
            user: '',
            password: '',
            database: 'signal',
            port: 3306
        }
      });

export default knex