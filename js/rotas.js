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
export async function getAlunoCursoId(curso) {
    const response = await fetch(`${URL}/aluno?curso_id=${curso}`)

    if(!response.ok)
        throw new Error ('Erro ao filtrar alunos')

    return response.json
}
export async function getAlunoStatus(status) {
    const response = await fetch(`${URL}/alunos?status=${status}`)

    if(!response.ok)
        throw new Error ('Erro ao filtrar status')

    return response.json

}
export async function getDetalhesAluno(id) {

    const response = await fetch(`${URL}/alunos/${id}`)

    if(!response.ok)
        throw new Error('Erro ao buscar aluno')

    return response.json()
}



