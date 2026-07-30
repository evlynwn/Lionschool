function renderizarDivCurso (){
    const curso = document.createElement('div')
    curso.className = "curso" 

    const titulo = document.createElement('h1')
    titulo.innerHTML = 'Escolha um <span class="destaque">curso</span><br> para gerenciar'

    const computadores = document.createElement('img')
    computadores.src = "devices.svg"

    curso.append(titulo,computadores)

    return curso
}
function renderizarDivEstudante (){

    const divEstudante = document.createElement('div')
    divEstudante.className = "estudante"

    const imgEstudante = document.createElement('img')
    imgEstudante.src = "./studant.svg"

    divEstudante.append(imgEstudante)

    return divEstudante
}

function criarBotoes (cursos){

    const caixas = document.createElement('div')
    caixas.className = "caix1"

    const imgCaixa = document.createElement('img')
    imgCaixa.src = cursos.icon

    const nomeCurso = document.createElement('span')
    nomeCurso.textContent = cursos.sigla

    caixas.append(imgCaixa,nomeCurso)

    return caixas
}