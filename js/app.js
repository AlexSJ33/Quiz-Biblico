// ==========================================
// VARIÁVEIS DO QUIZ
// ==========================================

let jogadorSelecionado = "";
let categoriaSelecionada = "";
let dificuldadeSelecionada = "";
let pontuacaoAtual = 0;
let perguntaRespondida = false;


// ==========================================
// ELEMENTOS DO HTML
// ==========================================

// Jogadores
const jogadores = document.querySelectorAll(".jogador");

// Categorias
const categorias = document.querySelectorAll(".categoria");

// Dificuldades
const dificuldades = document.querySelectorAll(".dificuldade");

// Alternativas
const alternativas = document.querySelectorAll(".alternativa");


// ==========================================
// TELAS
// ==========================================

const telaJogador = document.querySelector("#telaJogador");

const telaCategorias = document.querySelector("#telaCategorias");

const telaDificuldade = document.querySelector("#telaDificuldade");

const telaPergunta = document.querySelector("#telaPergunta");


// ==========================================
// ELEMENTOS DE INFORMAÇÃO
// ==========================================

const mensagemJogador =
    document.querySelector("#mensagemJogador");

const tituloCategoria =
    document.querySelector("#tituloCategoria");

const numeroPergunta =
    document.querySelector("#numeroPergunta");

const pontuacao =
    document.querySelector("#pontuacao");

const textoPergunta =
    document.querySelector("#textoPergunta");

const resultadoResposta =
    document.querySelector("#resultadoResposta");


// ==========================================
// BOTÕES DE VOLTAR
// ==========================================

const voltarJogador =
    document.querySelector("#voltarJogador");

const voltarCategorias =
    document.querySelector("#voltarCategorias");


// ==========================================
// RESPOSTA CORRETA
// ==========================================

const respostaCorreta = "B";


// ==========================================
// ESCOLHER JOGADOR
// ==========================================

jogadores.forEach(function (jogador) {

    jogador.addEventListener("click", function () {

        jogadorSelecionado =
            jogador.dataset.nome;

        mensagemJogador.textContent =
            "Olá, " + jogadorSelecionado + "!";

        telaJogador.classList.add("oculta");

        telaCategorias.classList.remove("oculta");

    });

});


// ==========================================
// ESCOLHER CATEGORIA
// ==========================================

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


// ==========================================
// ESCOLHER DIFICULDADE
// ==========================================

dificuldades.forEach(function (dificuldade) {

    dificuldade.addEventListener("click", function () {

        dificuldadeSelecionada =
            dificuldade.dataset.dificuldade;

        telaDificuldade.classList.add("oculta");

        telaPergunta.classList.remove("oculta");

    });

});


// ==========================================
// RESPONDER PERGUNTA
// ==========================================

alternativas.forEach(function (alternativa) {

    alternativa.addEventListener("click", function () {

        // Impede responder novamente
        if (perguntaRespondida) {
            return;
        }

        // Marca a pergunta como respondida
        perguntaRespondida = true;


        const respostaEscolhida =
            alternativa.dataset.resposta;


        if (respostaEscolhida === respostaCorreta) {

            pontuacaoAtual += 10;

            resultadoResposta.textContent =
                "Resposta correta! +10 pontos";

        } else {

            resultadoResposta.textContent =
                "Resposta incorreta!";

        }


        pontuacao.textContent =
            "Pontos: " + pontuacaoAtual;


        // Desabilita todas as alternativas
        alternativas.forEach(function (botao) {

            botao.disabled = true;

        });

    });

});


// ==========================================
// VOLTAR PARA ESCOLHA DO JOGADOR
// ==========================================

voltarJogador.addEventListener("click", function () {

    telaCategorias.classList.add("oculta");

    telaJogador.classList.remove("oculta");

});


// ==========================================
// VOLTAR PARA CATEGORIAS
// ==========================================

voltarCategorias.addEventListener("click", function () {

    telaDificuldade.classList.add("oculta");

    telaCategorias.classList.remove("oculta");

});