<?php

require_once "config/database.php";

header("Content-Type: application/json; charset=utf-8");


if (!isset($_GET["id_categoria"]) || !isset($_GET["dificuldade"])) {
    echo json_encode([
        "erro" => "Informe a categoria e a dificuldade"
    ]);
    exit;
}

$idCategoria = $_GET["id_categoria"];
$dificuldade = $_GET["dificuldade"];


$sql = "SELECT id_pergunta, pergunta
        FROM tb_pergunta
        WHERE id_categoria = :id_categoria
        AND dificuldade = :dificuldade
        AND ativa = TRUE
        ORDER BY id_pergunta";


$stmt = $conexao->prepare($sql);

$stmt->bindParam(":id_categoria", $idCategoria, PDO::PARAM_INT);
$stmt->bindParam(":dificuldade", $dificuldade, PDO::PARAM_STR);

$stmt->execute();


$perguntas = $stmt->fetchAll(PDO::FETCH_ASSOC);


// Para cada pergunta, buscar suas alternativas

foreach ($perguntas as &$pergunta) {

    $sqlAlternativas = "SELECT texto, correta
                        FROM tb_alternativa
                        WHERE id_pergunta = :id_pergunta
                        ORDER BY id_alternativa";


    $stmtAlternativas = $conexao->prepare($sqlAlternativas);

    $stmtAlternativas->bindParam(
        ":id_pergunta",
        $pergunta["id_pergunta"],
        PDO::PARAM_INT
    );

    $stmtAlternativas->execute();


    $alternativas = $stmtAlternativas->fetchAll(PDO::FETCH_ASSOC);


    $pergunta["alternativas"] = [];

    $pergunta["correta"] = "";


    foreach ($alternativas as $indice => $alternativa) {

        $pergunta["alternativas"][] = $alternativa["texto"];


        if ($alternativa["correta"] == 1) {

            $pergunta["correta"] =
                chr(65 + $indice);
        }
    }
}


echo json_encode(
    $perguntas,
    JSON_UNESCAPED_UNICODE
);