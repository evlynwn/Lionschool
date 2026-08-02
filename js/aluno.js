import { getAlunos } from "./rotas.js";

const foto = document.getElementById("fotoAluno");
const nome = document.getElementById("nomeAluno");
const status = document.getElementById("statusAluno");
const disciplinas = document.getElementById("disciplinas");

const id = Number(localStorage.getItem("idAluno"));

async function carregarAluno() {

    const alunos = await getAlunos();

    const aluno = alunos.find(item => item.id === id);

    foto.src = aluno.foto;
    nome.textContent = aluno.nome;
    status.textContent = aluno.status;

    aluno.desempenho.forEach(materia => {

        const div = document.createElement("div");

        div.classList.add("materia");

        div.innerHTML = `
            <h2>${materia.categoria}</h2>
            <p>${materia.valor}</p>
        `;

        disciplinas.appendChild(div);

    });

}

carregarAluno();