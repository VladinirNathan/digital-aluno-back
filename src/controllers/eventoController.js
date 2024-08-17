
const { prisma } = require("../database");

async function listarEventos(){
    try {
        return await prisma.vagas.findMany();
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}
async function listarEvento(id){
    try {
        return await prisma.vagas.findUnique({
            where: {
                vaga_id: Number(id)
            }
        });
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}
async function criarEvento(dados){
    try {
        return await prisma.eventos.create({
            data: dados
        });
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}
async function editarEvento(id, dados){
    try {
        return await prisma.evento.update({
            where: {
                evento_id: Number(id)
            },
            data: dados
        });
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}
async function deletarevento(id){
    try {
        return await prisma.eventos.delete({
            where: {
                evento_id: Number(id)
            }
        });
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

module.exports = {
    listarEventos,
    listarEvento,
    criarEvento,
    editarEvento,
    deletarEvento
}