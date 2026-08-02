import { getAlunos } from "./rotas.js";

const curso = Number(localStorage.getItem("curso"));

const cards = document.getElementById("cards");
const titulo = document.getElementById("nomeCurso");

const btnTodos = document.getElementById("btnTodos");
const btnCursando = document.getElementById("btnCursando");
const btnFinalizado = document.getElementById("btnFinalizado");

let alunos = [];

async function carregarAlunos() {

    alunos = await getAlunos();

    alunos = alunos.filter(aluno => aluno.curso_id === curso);

    titulo.textContent =
        curso === 1
            ? "Desenvolvimento de Sistemas"
            : "Redes";

    criarCards(alunos);
}

function criarCards(lista) {

    cards.replaceChildren();

    lista.forEach(aluno => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <img src="${aluno.foto}">
            <h2>${aluno.nome}</h2>
            <p>${aluno.status}</p>
        `;

        card.addEventListener("click", () => {

            localStorage.setItem("idAluno", aluno.id);

            location.href = "aluno.html";

        });

        cards.appendChild(card);

    });

}

btnTodos.addEventListener("click", () => {

    criarCards(alunos);

});

btnCursando.addEventListener("click", () => {

    criarCards(

        alunos.filter(aluno => aluno.status === "cursando")

    );

});

btnFinalizado.addEventListener("click", () => {

    criarCards(

        alunos.filter(aluno => aluno.status === "finalizado")

    );

});

carregarAlunos();