/**
 * Especificação das rotas.
 */

// Import das bibliotecas
const express = require('express');

// Import das bibliotecas próprias
const {
    getLista,
    getAluno,
    inserir,
    alterar,
    excluir
} = require("./alunorecurso");

// Inicializa o roteador dos serviços
const router = express.Router();

/**
 * Serviço da rota inicial.
 *
 * curl http://localhost:8000
 */
router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "API CRUD Aluno Rodando"
    })
});

/**
 * Serviço que retorna a lista de aluno.
 *
 * curl http://localhost:8000/alunos
 */
router.get('/alunos', getLista);

/**
 * Serviço que retorna um aluno.
 *
 * curl http://localhost:8000/aluno/1
 */
router.get('/aluno/:alunoId', getAluno);

/**
 * Serviço que insere um aluno.
 *
 * curl -v -X POST -H "Content-Type: application/json" -d "{\"alunoId\":\"1\",\"nome\":\"Pedro\",\"curso\":\"Computação\",\"cpf\":\"45678912399\"}" http://localhost:8000/aluno
 */
router.post('/aluno', inserir);

/**
 * Serviço que altera um aluno.
 *
 * curl -v -X PUT -H "Content-Type: application/json" -d "{\"alunoId\":\"1\",\"nome\":\"Antônio\",\"curso\":\"Computação\",\"cpf\":\"45678912399\"}" http://localhost:8000/aluno/1
 */
router.put('/aluno/:alunoId', alterar);

/**
 * Serviço que exclui um aluno.
 *
 * curl -v -X DELETE http://localhost:8000/aluno/1
 */
router.delete('/aluno/:alunoId', excluir);

// Exporta o roteador
module.exports = router;