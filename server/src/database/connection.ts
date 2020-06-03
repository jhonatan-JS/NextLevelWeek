import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        //__dirname => variavel global => retorna caminho pro diretorio database, onde esta o arquivo connection
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true
});

export default connection;
//Migrations = Histórico do banco de dados