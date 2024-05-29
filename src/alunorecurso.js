/**
 * Métodos de acesso aos dados de aluno no banco de dados.
 */

// Import das bibliotecas próprias
const db = require("./dbconfig");

// Retorna uma lista com todos os alunos
const getLista = async (request, response) => {   
    const sql = 'SELECT * FROM aluno';
    const params = [];
    db.all(sql, params, (error, rows) => {
    if (error) {
        throw error;
    }
    response.status(200).json(rows);
  });
};

// Procura um aluno pelo id
const getAluno = async (request, response) => {
    const alunoId = parseInt(request.params.alunoId);
    const sql = 'SELECT * FROM aluno WHERE alunoId = ?';
    const params = [alunoId];
    db.each(sql, params, (error, rows) => {
    if (error) {
        throw error;
    }
    response.status(200).json(rows);
    });
};

// Insere um novo aluno
const inserir = async (request, response) => {
    const { alunoId, nome, curso, cpf } = request.body ;  
    const sql = 'INSERT INTO aluno (alunoId, nome, curso, cpf) VALUES (?, ?, ?, ?)';
    const params =  [alunoId, nome, curso, cpf];
    db.run(sql, params, (error, rows) => {
    if (error) {
        throw error;
    }    
    response.status(201).json({ message: `Aluno inserido com alunoId: ${alunoId}` })
    });
};

// Altera um aluno pelo alunoId
const alterar = async (request, response) => {    
    const alunoId = parseInt(request.params.alunoId);
    const { nome, curso, cpf } = request.body;
    const sql = 'UPDATE aluno SET nome = ?, curso = ?, cpf = ? WHERE alunoId = ?';
    const params = [nome, curso, cpf, alunoId];
    db.run(sql, params, (error, rows) => {
    if (error) {
        throw error;
    }
    response.status(200).json( { message: `Aluno alterado com alunoId: ${alunoId}` });
    });
};
   

// Exclui um aluno pelo alunoId
const excluir = async (request, response) => {
    const alunoId = parseInt(request.params.alunoId);
    const sql = 'DELETE FROM aluno WHERE alunoId = ?';
    const params = [alunoId];
    db.run(sql, params, (error, rows) => {
    if (error) {
        throw error;
    }
    response.status(200).json( { message: `Aluno excluído com alunoId: ${alunoId}` });
    });
};

// Exporta as funções
module.exports = {
    getLista,
    getAluno,
    inserir,
    alterar,
    excluir
};