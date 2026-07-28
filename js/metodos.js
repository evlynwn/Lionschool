'use strict'

const URL = "https://lion-school-phbo.onrender.com"

export async function getCursos() {
    const response = await fetch(`${URL}/cursos`)

    if(!response.ok)
        throw new Error ('Erro ao listar o curso')

    return response.json
    
}
export async function getAlunos() {
    const response = await fetch(`${URL}/alunos`)

    if(!response.ok)
        throw new Error ('Erro ao listar aluno')

    return response.json
}
export async function getFiltro() {
    const response = await fetch(`${URL}/aluno?curso_id`)

    if(!response.ok)
        throw new Error ('Erro ao filtrar alunos')

    return response.json
}
export async function getStatus() {
    const response = await fetch(`${URL}/alunos?status`)

    if(!response.ok)
        throw new Error ('Erro ao filtrar status')

    return response.json

}
export async function getDetalhes() {
    const response = await fetch(`${URL}/alunos/1`)

    if(!response.ok)
        throw new Error ('Erro sobrre os detalhes do aluno')

    return response.json
    
}


