// ==========================================
// VARIÁVEIS DO QUIZ
// ==========================================

let jogadorSelecionado = "";
let categoriaSelecionada = "";
let dificuldadeSelecionada = "";
let pontuacaoAtual = 0;
let perguntaRespondida = false;
let perguntaAtual = 0;


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

const telaResultado = document.querySelector("#telaResultado");


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

const resultadoJogador =
    document.querySelector("#resultadoJogador");

const resultadoCategoria =
    document.querySelector("#resultadoCategoria");

const resultadoDificuldade =
    document.querySelector("#resultadoDificuldade");

const pontuacaoFinal =
    document.querySelector("#pontuacaoFinal");

// ==========================================
// BOTÕES DE VOLTAR
// ==========================================

const voltarJogador =
    document.querySelector("#voltarJogador");

const voltarCategorias =
    document.querySelector("#voltarCategorias");

const proximaPergunta =
    document.querySelector("#proximaPergunta");

const jogarNovamente =
    document.querySelector("#jogarNovamente");


// ==========================================
// CARREGAR PERGUNTA
// ==========================================

function carregarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    textoPergunta.textContent =
        pergunta.pergunta;

    alternativas.forEach(function (alternativa, indice) {

        alternativa.textContent =
            String.fromCharCode(65 + indice) +
            ") " +
            pergunta.alternativas[indice];

        alternativa.dataset.resposta =
            String.fromCharCode(65 + indice);

        alternativa.disabled = false;

    });

    numeroPergunta.textContent =
        "Pergunta " +
        (perguntaAtual + 1) +
        " de " +
        perguntas.length;

    pontuacao.textContent =
        "Pontos: " +
        pontuacaoAtual;

    resultadoResposta.textContent = "";

    perguntaRespondida = false;
}


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

        carregarPergunta();

    });

});


// ==========================================
// RESPONDER PERGUNTA
// ==========================================

alternativas.forEach(function (alternativa) {

    alternativa.addEventListener("click", function () {

        if (perguntaRespondida) {
            return;
        }

        perguntaRespondida = true;


        const respostaEscolhida =
            alternativa.dataset.resposta;

        const respostaCorreta =
            perguntas[perguntaAtual].correta;


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


        alternativas.forEach(function (botao) {

            botao.disabled = true;

        });

        proximaPergunta.classList.remove("oculta");

    });

});

// ==========================================
// PRÓXIMA PERGUNTA
// ==========================================

proximaPergunta.addEventListener("click", function () {

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        carregarPergunta();

        proximaPergunta.classList.add("oculta");

    } else {

        mostrarResultado();

    }

});

// ==========================================
// MOSTRAR RESULTADO
// ==========================================

function mostrarResultado() {

    telaPergunta.classList.add("oculta");

    telaResultado.classList.remove("oculta");


    resultadoJogador.textContent =
        "Parabéns, " + jogadorSelecionado + "!";


    resultadoCategoria.textContent =
        "Categoria: " + categoriaSelecionada;


    resultadoDificuldade.textContent =
        "Dificuldade: " + dificuldadeSelecionada;


    pontuacaoFinal.textContent =
        pontuacaoAtual;

}


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

// ==========================================
// JOGAR NOVAMENTE
// ==========================================

jogarNovamente.addEventListener("click", function () {

    perguntaAtual = 0;

    pontuacaoAtual = 0;

    perguntaRespondida = false;


    telaResultado.classList.add("oculta");

    telaJogador.classList.remove("oculta");

});