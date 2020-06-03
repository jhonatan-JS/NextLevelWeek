import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);

// Rota: Endereço completo da requisição
// recurso: qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = criar um usuário
// GET http://localhost:3333/user = Listar usuários
// GET http://localhost:3333/user/5 = Buscar dados do usuário com ID 5

// Request Param: parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parãmetros que vem na própria rota geralmente opcionais para filtros, paginação
// Request body: Parâmetros para criação/atualização de informações

