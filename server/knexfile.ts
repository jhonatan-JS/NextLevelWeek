import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        //__dirname => variavel global => retorna caminho pro diretorio database, onde esta o arquivo connection
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
};