const { executarSQL } = require("../database");

async function listarEventos(){
    try {
        const result = await executarSQL(`SELECT * FROM eventos;`);
        return result;
    } catch (error) {
        return {
            severity: 'error',
            detail: error.message
        }
    }
}


async function criar(dados){
    try {

        if(dados.evento_titulo == "" || !dados.evento_titulo){
            throw new Error("O campo evento_titulo é obrigatório!");
        }

        if(dados.evento_descricao == "" || !dados.evento_descricao){
            throw new Error("O campo evento_descricao é obrigatório!");
        }

        const result = executarSQL(`INSERT INTO eventos (evento_titulo, evento_descricao) VALUES ('${dados.evento_titulo}','${dados.evento_descricao}')`);

        if(result.affected_rows == 0){
            return {
                severity: 'error',
                detail: 'Ocorreu um erro'
            }
        }

        return {
            severity: 'success',
            detail: 'Dados inseridos com sucesso!'
        };
    } catch (error) {
        return {
            severity: 'error',
            detail: error.message
        }
    }
}


async function editar(dados, id){
    try{
        
    } catch (error) {
        return{
            severity:'error',
            detail: error.message
        }
    }
}


async function deletar(id){
    try {
        const result = await executarSQL(`DELETE FROM eventos WHERE evento_id = ${id};`);
        return result;
    } catch (error) {
        return {
            severity: 'error',
            detail: error.message
        }
    }
}