let jogadorSelecionado = "";
let categoriaSelecionada = "";


const jogadores = document.querySelectorAll(".jogador");

const categorias = document.querySelectorAll(".categoria");

const telaJogador = document.querySelector("#telaJogador");
const telaCategorias = document.querySelector("#telaCategorias");
const telaDificuldade = document.querySelector("#telaDificuldade");

const mensagemJogador = document.querySelector("#mensagemJogador");
const tituloCategoria = document.querySelector("#tituloCategoria");

const voltarJogador = document.querySelector("#voltarJogador");
const voltarCategorias = document.querySelector("#voltarCategorias");


/* ============================= */
/* ESCOLHER JOGADOR */
/* ============================= */

jogadores.forEach(function (jogador) {

    jogador.addEventListener("click", function () {

        jogadorSelecionado = jogador.dataset.nome;

        mensagemJogador.textContent =
            "Olá, " + jogadorSelecionado + "!";

        telaJogador.classList.add("oculta");

        telaCategorias.classList.remove("oculta");

    });

});


/* ============================= */
/* ESCOLHER CATEGORIA */
/* ============================= */

categorias.forEach(function (categoria) {

    categoria.addEventListener("click", function () {

        categoriaSelecionada =
            categoria.textContent.trim();

        tituloCategoria.textContent =
            categoriaSelecionada;

        telaCategorias.classList.add("oculta");

        telaDificuldade.classList.remove("oculta");

    });

});


/* ============================= */
/* VOLTAR PARA JOGADOR */
/* ============================= */

voltarJogador.addEventListener("click", function () {

    telaCategorias.classList.add("oculta");

    telaJogador.classList.remove("oculta");

});


/* ============================= */
/* VOLTAR PARA CATEGORIA */
/* ============================= */

voltarCategorias.addEventListener("click", function () {

    telaDificuldade.classList.add("oculta");

    telaCategorias.classList.remove("oculta");

});