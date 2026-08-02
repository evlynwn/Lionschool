import { getCursos } from "./rotas.js";

async function carregarCursos() {

    const cursos = await getCursos();

    const caixaDS = document.querySelector(".caix1");
    const caixaRDS = document.querySelector(".caixa2");

    cursos.forEach(curso => {

        if (curso.sigla === "DS") {

            caixaDS.addEventListener("click", () => {

                localStorage.setItem("curso", curso.id);
                window.location.href = "./turma.html";

            });

        }

        if (curso.sigla === "REDES") {

            caixaRDS.addEventListener("click", () => {

                localStorage.setItem("curso", curso.id);
                window.location.href = "./turma.html";

            });

        }

    });

}

carregarCursos();